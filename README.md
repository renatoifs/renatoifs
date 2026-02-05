# Academic Profile Website - Renato Ferreira da Silva

Professional bilingual (Portuguese/English) academic website for Professor Auxiliar at the Faculty of Medicine, University of Porto (FMUP).

## Features

### Core Functionality
- **Fully Bilingual**: Complete Portuguese and English translations with language toggle
- **Multi-page Navigation**: 7 main sections with React Router
- **Publications System**: 29 publications from Authenticus with filtering and sorting
- **Contact Form**: Functional contact form with backend storage
- **Responsive Design**: Mobile-first approach, works on all devices
- **Auto-updating Publications**: Backend endpoint to refresh publications from Authenticus

### Pages

1. **Home**: Hero section with profile photo, academic positions, areas of focus, and academic profile links (ORCID, Scopus, CIÊNCIAVITAE, Authenticus, ResearchGate, LinkedIn)

2. **About**: Professional biography and education timeline

3. **Research & Expertise**: 6 research areas with descriptions and methodological toolkit section

4. **Teaching**: Teaching experience across multiple programs and areas

5. **Projects & Networks**: Current projects (VIGIA) and professional memberships

6. **Publications**: Full publication list (29 items) with:
   - Year filter
   - Type filter (Article, Review, Editorial, etc.)
   - Sort options (Year, Citations)
   - DOI and Authenticus links

7. **Contact**: Contact information and functional form

## Design

- **Color Palette**: Navy blue (#1e293b) + Neutral grays
- **Typography**: 
  - Headings: Work Sans
  - Body: Inter
- **Style**: Minimalist, professional, high whitespace
- **Accessibility**: WCAG-friendly, semantic HTML

## Tech Stack

### Frontend
- React 19
- React Router 7.5
- Tailwind CSS 3.4
- Lucide React (icons)
- Axios (API calls)

### Backend
- FastAPI 0.110
- MongoDB (Motor async driver)
- BeautifulSoup4 (web scraping)
- Pydantic (data validation)

## Project Structure

```
/app/
├── backend/
│   ├── server.py           # FastAPI application
│   ├── data/
│   │   └── publications.json  # Publications data
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── contexts/
│   │   │   └── LanguageContext.js
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AboutPage.js
│   │   │   ├── ResearchPage.js
│   │   │   ├── TeachingPage.js
│   │   │   ├── ProjectsPage.js
│   │   │   ├── PublicationsPage.js
│   │   │   └── ContactPage.js
│   │   ├── index.css
│   │   └── App.css
│   ├── package.json
│   └── .env
└── README.md
```

## API Endpoints

### GET `/api/publications`
Returns all publications from JSON file.

**Response**: Array of publication objects
```json
[
  {
    "title": "Publication Title",
    "authors": "Author1, Author2",
    "year": "2025",
    "journal": "Journal Name",
    "volume": "17",
    "issue": "6",
    "doi": "10.1234/example",
    "url": "https://...",
    "doc_type": "Article",
    "citations": 3
  }
]
```

### POST `/api/publications/refresh`
Refresh publications by scraping Authenticus (admin endpoint).

### POST `/api/contact`
Submit contact form.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Message content"
}
```

## Running Locally

### Prerequisites
- Node.js 18+
- Python 3.11+
- MongoDB

### Backend Setup
```bash
cd /app/backend
pip install -r requirements.txt
# Start with supervisor or:
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend Setup
```bash
cd /app/frontend
yarn install
yarn start
```

The application will be available at `http://localhost:3000`

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=academic_profile
CORS_ORIGINS=*
```

## Deployment

### Supervisor Configuration
Services are managed by supervisor:
- **Backend**: Running on port 8001
- **Frontend**: Running on port 3000
- **MongoDB**: Running on port 27017

Restart services:
```bash
sudo supervisorctl restart backend frontend
```

Check status:
```bash
sudo supervisorctl status
```

## Data Sources

- **CV Content**: Extracted from provided CV document
- **Publications**: Scraped from Authenticus (https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254)
- **Profile Photo**: Provided asset
- **Institutional Logos**: FMUP, MEDCIDS, RISE Health

## Academic Profile Links

- ORCID: https://orcid.org/0000-0001-6517-6021
- Scopus: https://www.scopus.com/authid/detail.uri?authorId=57221854262
- CIÊNCIAVITAE: https://www.cienciavitae.pt//3611-8266-7514
- Authenticus: https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254
- ResearchGate: https://www.researchgate.net/profile/Renato-Ferreira-Da-Silva-2
- LinkedIn: https://www.linkedin.com/in/renatoifsilva/

## Updating Publications

To manually update publications:

1. **Automatic**: The `/api/publications` endpoint reads from the JSON file, which is automatically kept in sync.

2. **Manual Refresh**: Call the refresh endpoint:
```bash
curl -X POST https://your-backend-url.com/api/publications/refresh
```

3. **Edit JSON**: Directly edit `/app/backend/data/publications.json`

## Contact

**Email**: rsilva@med.up.pt

**Institution**: Faculty of Medicine, University of Porto, Porto, Portugal

## License

© 2026 Renato Ferreira da Silva. All rights reserved.
