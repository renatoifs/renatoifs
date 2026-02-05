import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      research: 'Research & Expertise',
      teaching: 'Teaching',
      projects: 'Projects & Networks',
      publications: 'Publications',
      contact: 'Contact'
    },
    home: {
      role: 'Assistant Professor',
      affiliation: 'Department of Community Medicine, Information, and Health Decision Sciences',
      university: 'Faculty of Medicine, University of Porto',
      expert: 'Pharmacovigilance & Pharmacoepidemiology Expert',
      researchCenter: 'Porto Pharmacovigilance Centre',
      areas: 'Areas of Focus',
      areasList: 'Pharmacovigilance · Pharmacoepidemiology · Real-World Evidence · Evidence Synthesis · Clinical Research Methodology · Health Technology Assessment · Digital Health'
    },
    about: {
      title: 'About',
      biography: 'Professional Biography',
      bioText: 'Assistant Professor at the Department of Community Medicine, Information, and Health Decision Sciences at the Faculty of Medicine, University of Porto (FMUP). Pharmacist recognized by the Portuguese Pharmaceutical Society, with specialized expertise in Pharmacovigilance and Pharmacoepidemiology. Currently serving as an Expert at the Porto Pharmacovigilance Centre of the Portuguese Pharmacovigilance System (INFARMED, I.P.).',
      bioText2: 'Integrated Researcher at RISE-Health, focusing on Digital Transformation, Artificial Intelligence, Data and Decision Sciences in Health. Also serves as a Collaborating Researcher in the Pharmacotherapy & Pharmacovigilance group at the Algarve Biomedical Research and Training Center (ABC-RI).',
      bioText3: 'Research expertise encompasses the design and execution of post-marketing surveillance studies to evaluate drug safety, effectiveness, and utilization patterns. Active involvement in multiple national and international research projects with competitive funding, currently serving as Principal Investigator at FMUP for the VIGIA project.',
      education: 'Education',
      master: 'Master in Pharmaceutical Sciences',
      masterInst: 'Faculty of Pharmacy, University of Porto',
      phd: 'PhD in Clinical Research and Health Services',
      phdInst: 'Faculty of Medicine, University of Porto'
    },
    research: {
      title: 'Research & Expertise',
      areasTitle: 'Research Areas',
      methodsTitle: 'Methodological Toolkit',
      drugSafety: {
        title: 'Drug Safety & Pharmacovigilance',
        desc: 'Post-marketing surveillance, adverse event monitoring, signal detection, and causality assessment. Design and implementation of pharmacovigilance studies using spontaneous reporting systems and active surveillance methodologies.'
      },
      pharmaco: {
        title: 'Pharmacoepidemiology',
        desc: 'Drug utilization studies, real-world evidence generation, and population-based research. Evaluation of medication patterns, effectiveness, and safety in diverse clinical settings.'
      },
      synthesis: {
        title: 'Evidence Synthesis',
        desc: 'Systematic reviews and meta-analyses following PRISMA and Cochrane methodologies. Critical appraisal of clinical evidence to inform decision-making and guideline development.'
      },
      clinical: {
        title: 'Clinical Research Methodology',
        desc: 'Design and conduct of observational and interventional studies. Application of rigorous methodological frameworks including ICH-GCP standards and regulatory guidance.'
      },
      hta: {
        title: 'Health Technology Assessment',
        desc: 'Comprehensive evaluation of health technologies considering clinical effectiveness, safety, cost-effectiveness, and ethical implications. Support for regulatory and reimbursement decisions.'
      },
      digital: {
        title: 'Digital Health & Data Science',
        desc: 'Application of artificial intelligence and advanced analytics in pharmacovigilance and health services research. Development of innovative tools for signal detection and decision support.'
      }
    },
    teaching: {
      title: 'Teaching',
      experience: 'Teaching Experience',
      expDesc: 'Taught over 10 curricular units across various study cycles (undergraduate, integrated master\'s, master\'s, doctoral, and continuing education) for students in Pharmaceutical Sciences, Nursing, Medicine, and Digital Health & Biomedical Innovation.',
      areas: 'Teaching Areas',
      area1: 'Clinical Research Methodologies',
      area2: 'Health Technology Assessment',
      area3: 'Evidence Synthesis and Evaluation',
      area4: 'Health Decision-Making',
      area5: 'Digital Health',
      area6: 'Biostatistics and Data Analysis',
      area7: 'Pharmacovigilance and Pharmacoepidemiology'
    },
    projects: {
      title: 'Projects & Networks',
      current: 'Current Projects',
      vigia: {
        role: 'Principal Investigator at FMUP',
        desc: 'COMPETE2030-FEDER-02045600 - Post-marketing surveillance and pharmacovigilance research'
      },
      networks: 'Professional Networks & Memberships',
      network1: 'Secretary of the General Assembly - Portuguese Society of Healthcare Pharmacists',
      network2: 'President of the General Assembly - Portuguese Association of Young Pharmacists',
      network3: 'Member of the Clinical Trials Interest Group - Portuguese Pharmaceutical Society',
      network4: 'Member of the Real-World Evidence and Big Data Group - International Society of Pharmacovigilance',
      network5: 'Member of the Cochrane Collaboration & Porto Associate Center of Cochrane Portugal',
      network6: 'Member of the Portuguese Society of Pharmacology'
    },
    publications: {
      title: 'Publications',
      total: 'Total Publications',
      filters: 'Filters',
      all: 'All',
      year: 'Year',
      type: 'Type',
      sortBy: 'Sort by',
      yearDesc: 'Year (Newest)',
      yearAsc: 'Year (Oldest)',
      citations: 'Citations',
      article: 'Article',
      review: 'Review',
      editorial: 'Editorial Material',
      letter: 'Letter',
      abstract: 'Abstract',
      viewDoi: 'View DOI',
      viewPub: 'View Publication',
      cited: 'Cited',
      times: 'times'
    },
    contact: {
      title: 'Contact',
      getInTouch: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      location: 'Location',
      locationText: 'Porto, Portugal',
      institutional: 'Institutional Email'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      research: 'Investigação & Especialização',
      teaching: 'Ensino',
      projects: 'Projetos & Redes',
      publications: 'Publicações',
      contact: 'Contacto'
    },
    home: {
      role: 'Professor Auxiliar',
      affiliation: 'Departamento de Medicina da Comunidade, Informação e Decisão em Saúde',
      university: 'Faculdade de Medicina da Universidade do Porto',
      expert: 'Especialista em Farmacovigilância e Farmacoepidemiologia',
      researchCenter: 'Unidade de Farmacovigilância do Porto',
      areas: 'Áreas de Foco',
      areasList: 'Farmacovigilância · Farmacoepidemiologia · Evidência do Mundo Real · Síntese de Evidência · Metodologia de Investigação Clínica · Avaliação de Tecnologias de Saúde · Saúde Digital'
    },
    about: {
      title: 'Sobre',
      biography: 'Biografia Profissional',
      bioText: 'Professor Auxiliar no Departamento de Medicina da Comunidade, Informação e Decisão em Saúde da Faculdade de Medicina da Universidade do Porto (FMUP). Farmacêutico reconhecido pela Ordem dos Farmacêuticos Portugueses, com especialização em Farmacovigilância e Farmacoepidemiologia. Atualmente, exerce funções como Especialista na Unidade de Farmacovigilância do Porto do Sistema Nacional de Farmacovigilância (INFARMED, I.P.).',
      bioText2: 'Investigador Integrado no RISE-Health, focado na Transformação Digital, Inteligência Artificial e Ciências de Dados e da Decisão em Saúde. É também Investigador Colaborador no grupo de Farmacoterapia e Farmacovigilância do Centro de Investigação e Formação Biomédica do Algarve (ABC-RI).',
      bioText3: 'A experiência de investigação abrange o desenho e execução de estudos de vigilância pós-comercialização para avaliar a segurança, efetividade e padrões de utilização de medicamentos. Envolvimento ativo em múltiplos projetos de investigação nacionais e internacionais com financiamento competitivo, atuando atualmente como Investigador Principal na FMUP para o projeto VIGIA.',
      education: 'Formação',
      master: 'Mestrado em Ciências Farmacêuticas',
      masterInst: 'Faculdade de Farmácia da Universidade do Porto',
      phd: 'Doutoramento em Investigação Clínica e Serviços de Saúde',
      phdInst: 'Faculdade de Medicina da Universidade do Porto'
    },
    research: {
      title: 'Investigação & Especialização',
      areasTitle: 'Áreas de Investigação',
      methodsTitle: 'Ferramentas Metodológicas',
      drugSafety: {
        title: 'Segurança de Medicamentos & Farmacovigilância',
        desc: 'Vigilância pós-comercialização, monitorização de eventos adversos, deteção de sinais e avaliação de causalidade. Desenho e implementação de estudos de farmacovigilância usando sistemas de notificação espontânea e metodologias de vigilância ativa.'
      },
      pharmaco: {
        title: 'Farmacoepidemiologia',
        desc: 'Estudos de utilização de medicamentos, geração de evidência do mundo real e investigação populacional. Avaliação de padrões de medicação, efetividade e segurança em diversos contextos clínicos.'
      },
      synthesis: {
        title: 'Síntese de Evidência',
        desc: 'Revisões sistemáticas e meta-análises seguindo as metodologias PRISMA e Cochrane. Avaliação crítica da evidência clínica para informar a tomada de decisão e o desenvolvimento de diretrizes.'
      },
      clinical: {
        title: 'Metodologia de Investigação Clínica',
        desc: 'Desenho e condução de estudos observacionais e de intervenção. Aplicação de quadros metodológicos rigorosos, incluindo normas ICH-GCP e orientações regulamentares.'
      },
      hta: {
        title: 'Avaliação de Tecnologias de Saúde',
        desc: 'Avaliação abrangente de tecnologias de saúde considerando efetividade clínica, segurança, custo-efetividade e implicações éticas. Apoio a decisões regulamentares e de reembolso.'
      },
      digital: {
        title: 'Saúde Digital & Ciência de Dados',
        desc: 'Aplicação de inteligência artificial e análises avançadas em farmacovigilância e investigação de serviços de saúde. Desenvolvimento de ferramentas inovadoras para deteção de sinais e apoio à decisão.'
      }
    },
    teaching: {
      title: 'Ensino',
      experience: 'Experiência Docente',
      expDesc: 'Lecionou mais de 10 unidades curriculares em vários ciclos de estudos (licenciatura, mestrado integrado, mestrado, doutoramento e formação contínua) para estudantes de Ciências Farmacêuticas, Enfermagem, Medicina e Saúde Digital & Inovação Biomédica.',
      areas: 'Áreas de Ensino',
      area1: 'Metodologias de Investigação Clínica',
      area2: 'Avaliação de Tecnologias de Saúde',
      area3: 'Síntese e Avaliação de Evidência',
      area4: 'Tomada de Decisão em Saúde',
      area5: 'Saúde Digital',
      area6: 'Bioestatística e Análise de Dados',
      area7: 'Farmacovigilância e Farmacoepidemiologia'
    },
    projects: {
      title: 'Projetos & Redes',
      current: 'Projetos Atuais',
      vigia: {
        role: 'Investigador Principal na FMUP',
        desc: 'COMPETE2030-FEDER-02045600 - Vigilância pós-comercialização e investigação em farmacovigilância'
      },
      networks: 'Redes Profissionais & Associações',
      network1: 'Secretário da Mesa da Assembleia Geral - Sociedade Portuguesa de Farmacêuticos dos Cuidados de Saúde',
      network2: 'Presidente da Mesa da Assembleia Geral - Associação Portuguesa de Jovens Farmacêuticos',
      network3: 'Membro do Grupo de Interesse em Ensaios Clínicos - Ordem dos Farmacêuticos Portugueses',
      network4: 'Membro do Grupo de Evidência do Mundo Real e Big Data - International Society of Pharmacovigilance',
      network5: 'Membro da Cochrane Collaboration & Centro Associado do Porto da Cochrane Portugal',
      network6: 'Membro da Sociedade Portuguesa de Farmacologia'
    },
    publications: {
      title: 'Publicações',
      total: 'Total de Publicações',
      filters: 'Filtros',
      all: 'Todos',
      year: 'Ano',
      type: 'Tipo',
      sortBy: 'Ordenar por',
      yearDesc: 'Ano (Mais recente)',
      yearAsc: 'Ano (Mais antigo)',
      citations: 'Citações',
      article: 'Artigo',
      review: 'Revisão',
      editorial: 'Material Editorial',
      letter: 'Carta',
      abstract: 'Resumo',
      viewDoi: 'Ver DOI',
      viewPub: 'Ver Publicação',
      cited: 'Citado',
      times: 'vezes'
    },
    contact: {
      title: 'Contacto',
      getInTouch: 'Entre em Contacto',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'A enviar...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Falha ao enviar mensagem. Por favor, tente novamente.',
      location: 'Localização',
      locationText: 'Porto, Portugal',
      institutional: 'Email Institucional'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
