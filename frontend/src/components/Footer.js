import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Primary Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Renato Ferreira da Silva</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Faculty of Medicine<br />
              University of Porto<br />
              Porto, Portugal
            </p>
          </div>

          {/* Column 2: Academic Profiles */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Academic Profiles</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://orcid.org/0000-0001-6517-6021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ORCID
                </a>
              </li>
              <li>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57221854262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Scopus
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=hw4VpSEAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://www.cienciavitae.pt//3611-8266-7514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  CIÊNCIAVITAE
                </a>
              </li>
              <li>
                <a
                  href="https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Authenticus
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Renato-Ferreira-Da-Silva-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/renatoifsilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="leading-relaxed">
                Rua Doutor Plácido da Costa<br />
                4200-450 Porto<br />
                Portugal
              </p>
              <p className="mt-3">
                <a
                  href="tel:+351220426913"
                  className="hover:text-white transition-colors"
                >
                  Phone: (+351) 220 426 913
                </a>
                <br />
                <span className="text-slate-400">Ext: 26913</span>
              </p>
              <p className="mt-3">
                <a
                  href="mailto:rsilva@med.up.pt"
                  className="hover:text-white transition-colors"
                >
                  rsilva@med.up.pt
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {currentYear} Renato Ferreira da Silva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
