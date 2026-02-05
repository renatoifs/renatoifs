from fastapi import FastAPI, APIRouter, HTTPException, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone
import aiohttp
from bs4 import BeautifulSoup
import re
from auth import verify_token, create_access_token, get_password_hash, verify_password


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class Publication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    title: str
    authors: str
    year: str
    journal: str
    volume: Optional[str] = None
    issue: Optional[str] = None
    doi: Optional[str] = None
    url: Optional[str] = None
    doc_type: Optional[str] = None
    citations: Optional[int] = None

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class LoginRequest(BaseModel):
    username: str
    password: str

class ContentUpdate(BaseModel):
    section: str
    language: str
    field: str
    value: str

class ContentVersionCreate(BaseModel):
    section: str
    content: Dict[str, Any]
    author: str
    message: Optional[str] = None


# Authenticus Scraper
async def scrape_authenticus_publications():
    """Scrape publications from Authenticus profile"""
    try:
        publications = []
        base_url = "https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254"
        
        async with aiohttp.ClientSession() as session:
            # Scrape all three pages
            for page in range(1, 4):
                url = f"{base_url}?total_results=29&page={page}" if page > 1 else base_url
                
                async with session.get(url) as response:
                    if response.status == 200:
                        html = await response.text()
                        soup = BeautifulSoup(html, 'html.parser')
                        
                        # Find all publication entries
                        pub_blocks = soup.find_all('div', style=lambda value: value and 'padding-bottom: 15px' in value if value else False)
                        
                        if not pub_blocks:
                            # Try alternative selector
                            pub_blocks = soup.find_all(['p', 'div'], class_=lambda x: x is None)
                            
                        # Parse each publication
                        current_pub = {}
                        for block in pub_blocks:
                            text = block.get_text(strip=True)
                            
                            if 'TITLE:' in text:
                                if current_pub:
                                    publications.append(current_pub)
                                current_pub = {}
                                title_match = re.search(r'TITLE:\s*(.+?)(?=AUTHORS:|PUBLISHED:|$)', text, re.DOTALL)
                                if title_match:
                                    current_pub['title'] = title_match.group(1).strip()
                            
                            if 'AUTHORS:' in text:
                                authors_match = re.search(r'AUTHORS:\s*(.+?)(?=PUBLISHED:|$)', text, re.DOTALL)
                                if authors_match:
                                    current_pub['authors'] = authors_match.group(1).strip()
                            
                            if 'PUBLISHED:' in text:
                                pub_match = re.search(r'PUBLISHED:\s*(\d{4}),\s*SOURCE:\s*(.+?)(?=VOLUME:|ISSUE:|INDEXED|IN MY:|$)', text, re.DOTALL)
                                if pub_match:
                                    current_pub['year'] = pub_match.group(1)
                                    current_pub['journal'] = pub_match.group(2).strip()
                                
                                vol_match = re.search(r'VOLUME:\s*(\S+)', text)
                                if vol_match:
                                    current_pub['volume'] = vol_match.group(1)
                                
                                issue_match = re.search(r'ISSUE:\s*(\S+)', text)
                                if issue_match:
                                    current_pub['issue'] = issue_match.group(1)
                        
                        if current_pub:
                            publications.append(current_pub)
        
        return publications
    except Exception as e:
        logging.error(f"Error scraping Authenticus: {e}")
        raise


# API Routes
@api_router.get("/")
async def root():
    return {"message": "Academic Profile API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.get("/publications", response_model=List[Publication])
async def get_publications():
    """Get all publications from JSON file"""
    try:
        import json
        pub_file = ROOT_DIR / 'data' / 'publications.json'
        with open(pub_file, 'r', encoding='utf-8') as f:
            publications = json.load(f)
        return publications
    except Exception as e:
        logging.error(f"Error fetching publications: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch publications")

@api_router.post("/publications/refresh")
async def refresh_publications():
    """Refresh publications by scraping Authenticus (admin endpoint)"""
    try:
        publications = await scrape_authenticus_publications()
        
        import json
        pub_file = ROOT_DIR / 'data' / 'publications.json'
        with open(pub_file, 'w', encoding='utf-8') as f:
            json.dump(publications, f, indent=2, ensure_ascii=False)
        
        return {"message": "Publications refreshed successfully", "count": len(publications)}
    except Exception as e:
        logging.error(f"Error refreshing publications: {e}")
        raise HTTPException(status_code=500, detail="Failed to refresh publications")

@api_router.post("/contact")
async def submit_contact_form(form: ContactForm):
    """Store contact form submission"""
    try:
        contact_doc = form.model_dump()
        contact_doc['timestamp'] = datetime.now(timezone.utc).isoformat()
        contact_doc['id'] = str(uuid.uuid4())
        
        await db.contact_submissions.insert_one(contact_doc)
        
        # In production, you would send email here
        logging.info(f"Contact form submitted: {form.name} - {form.email}")
        
        return {"message": "Contact form submitted successfully"}
    except Exception as e:
        logging.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")


# CMS/Admin Endpoints
@api_router.post("/admin/login")
async def admin_login(login: LoginRequest):
    """Admin login endpoint"""
    # Default admin credentials (change in production via environment variables)
    ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME', 'admin')
    ADMIN_PASSWORD_HASH = os.environ.get('ADMIN_PASSWORD_HASH', get_password_hash('changeme123'))
    
    if login.username != ADMIN_USERNAME:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    if not verify_password(login.password, ADMIN_PASSWORD_HASH):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": login.username})
    return {"access_token": access_token, "token_type": "bearer"}

@api_router.get("/admin/content")
async def get_content(username: str = Depends(verify_token)):
    """Get all content for editing"""
    try:
        import json
        content_file = ROOT_DIR / 'data' / 'content.json'
        with open(content_file, 'r', encoding='utf-8') as f:
            content = json.load(f)
        return content
    except Exception as e:
        logging.error(f"Error fetching content: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch content")

@api_router.put("/admin/content")
async def update_content(update: ContentUpdate, username: str = Depends(verify_token)):
    """Update specific content field"""
    try:
        import json
        content_file = ROOT_DIR / 'data' / 'content.json'
        
        # Read current content
        with open(content_file, 'r', encoding='utf-8') as f:
            content = json.load(f)
        
        # Update the specific field
        if update.section not in content:
            content[update.section] = {}
        if update.language not in content[update.section]:
            content[update.section][update.language] = {}
        
        content[update.section][update.language][update.field] = update.value
        
        # Save version to database
        version_doc = {
            'id': str(uuid.uuid4()),
            'section': update.section,
            'language': update.language,
            'field': update.field,
            'old_value': content[update.section][update.language].get(update.field, ''),
            'new_value': update.value,
            'author': username,
            'timestamp': datetime.now(timezone.utc).isoformat()
        }
        await db.content_versions.insert_one(version_doc)
        
        # Write updated content
        with open(content_file, 'w', encoding='utf-8') as f:
            json.dump(content, f, indent=2, ensure_ascii=False)
        
        return {"message": "Content updated successfully", "version_id": version_doc['id']}
    except Exception as e:
        logging.error(f"Error updating content: {e}")
        raise HTTPException(status_code=500, detail="Failed to update content")

@api_router.get("/admin/content/versions")
async def get_content_versions(username: str = Depends(verify_token), limit: int = 50):
    """Get content version history"""
    try:
        versions = await db.content_versions.find({}, {"_id": 0}).sort("timestamp", -1).limit(limit).to_list(limit)
        return versions
    except Exception as e:
        logging.error(f"Error fetching versions: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch versions")

@api_router.post("/admin/content/revert/{version_id}")
async def revert_content_version(version_id: str, username: str = Depends(verify_token)):
    """Revert to a specific version"""
    try:
        import json
        
        # Get the version
        version = await db.content_versions.find_one({"id": version_id}, {"_id": 0})
        if not version:
            raise HTTPException(status_code=404, detail="Version not found")
        
        content_file = ROOT_DIR / 'data' / 'content.json'
        
        # Read current content
        with open(content_file, 'r', encoding='utf-8') as f:
            content = json.load(f)
        
        # Revert the specific field
        content[version['section']][version['language']][version['field']] = version['old_value']
        
        # Save revert as new version
        revert_doc = {
            'id': str(uuid.uuid4()),
            'section': version['section'],
            'language': version['language'],
            'field': version['field'],
            'old_value': version['new_value'],
            'new_value': version['old_value'],
            'author': username,
            'timestamp': datetime.now(timezone.utc).isoformat(),
            'revert_from': version_id
        }
        await db.content_versions.insert_one(revert_doc)
        
        # Write updated content
        with open(content_file, 'w', encoding='utf-8') as f:
            json.dump(content, f, indent=2, ensure_ascii=False)
        
        return {"message": "Content reverted successfully", "version_id": revert_doc['id']}
    except Exception as e:
        logging.error(f"Error reverting content: {e}")
        raise HTTPException(status_code=500, detail="Failed to revert content")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
