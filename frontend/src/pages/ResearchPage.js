import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Microscope, Database, FileText, Stethoscope, BarChart3, Brain } from 'lucide-react';

export const ResearchPage = () => {
  const { t } = useLanguage();

  const researchAreas = [
    {
      icon: Microscope,
      key: 'drugSafety',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Database,
      key: 'pharmaco',
      color: 'bg-teal-100 text-teal-700'
    },
    {
      icon: FileText,
      key: 'synthesis',
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      icon: Stethoscope,
      key: 'clinical',
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      icon: BarChart3,
      key: 'hta',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Brain,
      key: 'digital',
      color: 'bg-cyan-100 text-cyan-700'
    }
  ];

  const methodologies = [
    'PRISMA Guidelines',
    'Cochrane Methodology',
    'ICH-GCP Standards',
    'CIOMS Recommendations',
    'EMA Guidance',
    'WHO-UMC Criteria',
    'Bradford Hill Criteria',
    'Real-World Evidence Framework'
  ];

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

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {t('research.areasTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.key}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  data-testid={`research-area-${area.key}`}
                >
                  <div className={`inline-flex p-3 rounded-lg ${area.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {t(`research.${area.key}.title`)}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t(`research.${area.key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Methodological Toolkit */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {t('research.methodsTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
