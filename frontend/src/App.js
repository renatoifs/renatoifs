import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ResearchPage } from "./pages/ResearchPage";
import { TeachingPage } from "./pages/TeachingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/teaching" element={<TeachingPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
