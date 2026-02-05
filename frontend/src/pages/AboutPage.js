import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Award } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="about-title">
            {t('about.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Biography Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Award className="mr-3 text-slate-700" size={28} />
              {t('about.biography')}
            </h2>
            
            <div className="space-y-6 text-base lg:text-lg text-slate-700 leading-relaxed">
              <p>{t('about.bioText')}</p>
              <p>{t('about.bioText2')}</p>
              <p>{t('about.bioText3')}</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-slate-700" size={28} />
              {t('about.education')}
            </h2>

            <div className="space-y-8">
              {/* PhD */}
              <div className="relative pl-8 border-l-2 border-slate-900">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{t('about.phd')}</p>
                  <p className="text-base text-slate-600 mt-1">{t('about.phdInst')}</p>
                  <p className="text-sm text-slate-500 mt-2">2024</p>
                </div>
              </div>

              {/* Master */}
              <div className="relative pl-8 border-l-2 border-slate-300">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-300"></div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{t('about.master')}</p>
                  <p className="text-base text-slate-600 mt-1">{t('about.masterInst')}</p>
                  <p className="text-sm text-slate-500 mt-2">2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
