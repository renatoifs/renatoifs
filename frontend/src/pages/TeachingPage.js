import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const TeachingPage = () => {
  const { t, language } = useLanguage();

  const teachingAreasEN = [
    'Clinical research methodologies',
    'Health technology assessment',
    'Evidence synthesis and evaluation',
    'Health decision-making',
    'Digital health',
    'Biostatistics and data analysis',
    'Pharmacovigilance and pharmacoepidemiology'
  ];

  const teachingAreasPT = [
    'Metodologias de investigação clínica',
    'Avaliação de tecnologias de saúde',
    'Síntese e avaliação de evidência',
    'Tomada de decisão em saúde',
    'Saúde digital',
    'Bioestatística e análise de dados',
    'Farmacovigilância e farmacoepidemiologia'
  ];

  const areas = language === 'en' ? teachingAreasEN : teachingAreasPT;

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="teaching-title">
            {t('teaching.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Teaching Areas - Single Section */}
        <section>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {language === 'en' ? 'Teaching Areas' : 'Áreas de Docência'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {areas.slice(0, Math.ceil(areas.length / 2)).map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-base text-slate-800 font-medium leading-relaxed pt-1">
                      {area}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {areas.slice(Math.ceil(areas.length / 2)).map((area, index) => (
                  <div
                    key={index + Math.ceil(areas.length / 2)}
                    className="flex items-start space-x-4 p-5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                      {index + Math.ceil(areas.length / 2) + 1}
                    </div>
                    <p className="text-base text-slate-800 font-medium leading-relaxed pt-1">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
