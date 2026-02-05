# PRD - Website Pessoal Renato Ferreira da Silva

## Problema Original
Desenvolvimento de um website académico pessoal para um Professor Auxiliar da Faculdade de Medicina da Universidade do Porto, com foco em **custo zero** e **manutenção zero**.

## Requisitos Finais (Após Pivot)

### Requisitos Funcionais
- ✅ Site de página única estático (HTML, CSS, JavaScript)
- ✅ Bilingue (Português e Inglês) com toggle de idioma
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Links para perfis académicos externos
- ✅ Logos das afiliações institucionais
- ✅ Informações de contacto

### Requisitos Não-Funcionais
- ✅ Hospedagem gratuita (GitHub Pages)
- ✅ Zero manutenção (conteúdo estático)
- ✅ Sem backend ou base de dados
- ✅ Sem necessidade de API keys ou serviços pagos

## Arquitetura Final

```
/tmp/renatoifs-site/ (para entrega)
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpeg
    ├── logo-fmup.jpg
    ├── logo-medcids.png
    ├── logo-ufporto.png
    └── logo-rise.png
```

## O Que Foi Implementado

### 2025-02-05
1. **Pivot de Full-Stack para Estático**
   - Abandonada a aplicação React + FastAPI + MongoDB
   - Criado site estático simples para GitHub Pages

2. **Site Estático Criado**
   - Design moderno baseado no site React original
   - Secções: Hero, Afiliações, Contacto
   - Toggle de idioma PT/EN funcional
   - Layout assimétrico com foto grande
   - Todos os perfis académicos como links externos

3. **Assets Incluídos**
   - Foto de perfil
   - Logos: FMUP, UFPorto, MEDCIDS, RISE Health

## Conteúdo do Site

- **Nome**: Renato Ferreira da Silva, MPharm, PhD
- **Cargo**: Professor Auxiliar
- **Departamento**: Medicina da Comunidade, Informação e Decisão em Saúde
- **Instituição**: Faculdade de Medicina da Universidade do Porto
- **Especialidade**: Farmacovigilância e Farmacoepidemiologia

### Perfis Académicos
- ORCID
- Scopus
- Web of Science
- CIÊNCIAVITAE
- Authenticus
- Google Scholar
- ResearchGate
- LinkedIn

### Contacto
- Email: rsilva@med.up.pt
- Telefone: (+351) 220 426 913 (Ext: 26913)
- Morada: Rua Doutor Plácido da Costa, 4200-450 Porto, Portugal

## Backlog / Próximos Passos

### Para o Utilizador
1. Descarregar o ficheiro ZIP `/app/renatoifs-site.zip`
2. Criar repositório `renatoifs.github.io` no GitHub
3. Fazer upload de todos os ficheiros
4. Ativar GitHub Pages nas configurações
5. Aguardar ~2 minutos para publicação

### Melhorias Futuras (Opcionais)
- Adicionar favicon personalizado
- Integrar Google Analytics (se desejado tracking)
- Adicionar meta tags Open Graph para partilha em redes sociais

## Decisões Técnicas

1. **Por que HTML estático em vez de React?**
   - Custo zero (GitHub Pages gratuito)
   - Manutenção zero (não precisa de servidor)
   - Simplicidade (fácil de editar manualmente)

2. **Por que GitHub Pages?**
   - 100% gratuito para repositórios públicos
   - SSL automático (HTTPS)
   - URL limpa: `renatoifs.github.io`

## Status do Projeto
**CONCLUÍDO** - Site estático pronto para deploy pelo utilizador.
