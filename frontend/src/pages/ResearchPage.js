import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const ResearchPage = () => {
  const { t } = useLanguage();

  const researchAreas = [
    'Drug safety',
    'Pharmacovigilance',
    'Pharmacoepidemiology',
    'Clinical research methodologies',
    'Health technology assessment',
    'Digital health',
    'Evidence synthesis (systematic reviews and meta-analyses)',
    'Clinical epidemiology',
    'Post-marketing surveillance studies'
  ];

  const researchAreasPT = [
    'Segurança de medicamentos',
    'Farmacovigilância',
    'Farmacoepidemiologia',
    'Metodologias de investigação clínica',
    'Avaliação de tecnologias de saúde',
    'Saúde digital',
    'Síntese de evidência (revisões sistemáticas e meta-análises)',
    'Epidemiologia clínica',
    'Estudos de vigilância pós-comercialização'
  ];

  const { language } = useLanguage();
  const areas = language === 'en' ? researchAreas : researchAreasPT;

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="research-title">
            {t('research.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Research Areas - Friendly Cards */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {t('research.areasTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm font-bold group-hover:bg-slate-800 transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-base text-slate-800 font-medium leading-relaxed pt-1">
                    {area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
