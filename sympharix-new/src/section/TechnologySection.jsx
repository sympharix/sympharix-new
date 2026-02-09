import React, { useState, useRef, useEffect } from 'react';
import { Code2, Server, Cloud, Database, Shield, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Technology translations
const techTranslations = {
  en: {
    techWeUse: 'Technologies We Use',
    poweringInnovation: 'Powering',
    innovation: 'Innovation',
    techDescription: 'We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions that drive your business forward.',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud & DevOps',
    database: 'Database',
    mobile: 'Mobile',
    ai: 'AI & ML',
    viewAllTech: 'View All Technologies',
    trustedBy: 'Trusted by leading companies worldwide',
  },
  zh: {
    techWeUse: '我们使用的技术',
    poweringInnovation: '驱动',
    innovation: '创新',
    techDescription: '我们利用尖端技术构建可扩展、安全且高性能的解决方案，推动您的业务向前发展。',
    frontend: '前端',
    backend: '后端',
    cloud: '云和DevOps',
    database: '数据库',
    mobile: '移动端',
    ai: '人工智能',
    viewAllTech: '查看所有技术',
    trustedBy: '受到全球领先公司的信赖',
  },
  ja: {
    techWeUse: '使用技術',
    poweringInnovation: 'パワリング',
    innovation: 'イノベーション',
    techDescription: '最先端のテクノロジーを活用して、ビジネスを前進させるスケーラブルで安全な高性能ソリューションを構築します。',
    frontend: 'フロントエンド',
    backend: 'バックエンド',
    cloud: 'クラウド・DevOps',
    database: 'データベース',
    mobile: 'モバイル',
    ai: 'AI・ML',
    viewAllTech: 'すべての技術を見る',
    trustedBy: '世界中の大手企業から信頼されています',
  },
  ko: {
    techWeUse: '사용 기술',
    poweringInnovation: '혁신을',
    innovation: '이끄는 힘',
    techDescription: '최첨단 기술을 활용하여 비즈니스를 발전시키는 확장 가능하고 안전한 고성능 솔루션을 구축합니다.',
    frontend: '프론트엔드',
    backend: '백엔드',
    cloud: '클라우드 & DevOps',
    database: '데이터베이스',
    mobile: '모바일',
    ai: 'AI & ML',
    viewAllTech: '모든 기술 보기',
    trustedBy: '전 세계 선도 기업들이 신뢰합니다',
  },
  hi: {
    techWeUse: 'हम जो तकनीक उपयोग करते हैं',
    poweringInnovation: 'नवाचार को',
    innovation: 'शक्ति प्रदान करना',
    techDescription: 'हम आपके व्यवसाय को आगे बढ़ाने वाले स्केलेबल, सुरक्षित और उच्च-प्रदर्शन समाधान बनाने के लिए अत्याधुनिक तकनीकों का लाभ उठाते हैं।',
    frontend: 'फ्रंटएंड',
    backend: 'बैकएंड',
    cloud: 'क्लाउड और DevOps',
    database: 'डेटाबेस',
    mobile: 'मोबाइल',
    ai: 'AI और ML',
    viewAllTech: 'सभी तकनीकें देखें',
    trustedBy: 'दुनिया भर की अग्रणी कंपनियों द्वारा विश्वसनीय',
  },
  ar: {
    techWeUse: 'التقنيات التي نستخدمها',
    poweringInnovation: 'تشغيل',
    innovation: 'الابتكار',
    techDescription: 'نحن نستفيد من التقنيات المتطورة لبناء حلول قابلة للتطوير وآمنة وعالية الأداء تدفع عملك إلى الأمام.',
    frontend: 'الواجهة الأمامية',
    backend: 'الخلفية',
    cloud: 'السحابة و DevOps',
    database: 'قاعدة البيانات',
    mobile: 'الجوال',
    ai: 'الذكاء الاصطناعي',
    viewAllTech: 'عرض جميع التقنيات',
    trustedBy: 'موثوق به من قبل الشركات الرائدة في جميع أنحاء العالم',
  },
  de: {
    techWeUse: 'Unsere Technologien',
    poweringInnovation: 'Innovation',
    innovation: 'antreiben',
    techDescription: 'Wir nutzen modernste Technologien, um skalierbare, sichere und leistungsstarke Lösungen zu entwickeln, die Ihr Unternehmen voranbringen.',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud & DevOps',
    database: 'Datenbank',
    mobile: 'Mobile',
    ai: 'KI & ML',
    viewAllTech: 'Alle Technologien anzeigen',
    trustedBy: 'Vertraut von führenden Unternehmen weltweit',
  },
  fr: {
    techWeUse: 'Technologies Utilisées',
    poweringInnovation: 'Alimenter',
    innovation: "l'Innovation",
    techDescription: 'Nous exploitons des technologies de pointe pour créer des solutions évolutives, sécurisées et performantes qui font avancer votre entreprise.',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud & DevOps',
    database: 'Base de données',
    mobile: 'Mobile',
    ai: 'IA & ML',
    viewAllTech: 'Voir toutes les technologies',
    trustedBy: 'Approuvé par des entreprises leaders dans le monde',
  },
  es: {
    techWeUse: 'Tecnologías que Usamos',
    poweringInnovation: 'Impulsando la',
    innovation: 'Innovación',
    techDescription: 'Aprovechamos tecnologías de vanguardia para construir soluciones escalables, seguras y de alto rendimiento que impulsan su negocio.',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud & DevOps',
    database: 'Base de datos',
    mobile: 'Móvil',
    ai: 'IA & ML',
    viewAllTech: 'Ver todas las tecnologías',
    trustedBy: 'Confiado por empresas líderes en todo el mundo',
  },
  pt: {
    techWeUse: 'Tecnologias que Usamos',
    poweringInnovation: 'Impulsionando a',
    innovation: 'Inovação',
    techDescription: 'Aproveitamos tecnologias de ponta para construir soluções escaláveis, seguras e de alto desempenho que impulsionam seu negócio.',
    frontend: 'Frontend',
    backend: 'Backend',
    cloud: 'Cloud & DevOps',
    database: 'Banco de dados',
    mobile: 'Mobile',
    ai: 'IA & ML',
    viewAllTech: 'Ver todas as tecnologias',
    trustedBy: 'Confiado por empresas líderes em todo o mundo',
  },
  ru: {
    techWeUse: 'Технологии которые мы используем',
    poweringInnovation: 'Движущая сила',
    innovation: 'инноваций',
    techDescription: 'Мы используем передовые технологии для создания масштабируемых, безопасных и высокопроизводительных решений, которые продвигают ваш бизнес вперед.',
    frontend: 'Фронтенд',
    backend: 'Бэкенд',
    cloud: 'Облако и DevOps',
    database: 'База данных',
    mobile: 'Мобильный',
    ai: 'ИИ и ML',
    viewAllTech: 'Все технологии',
    trustedBy: 'Нам доверяют ведущие компании по всему миру',
  },
};

// Real SVG Icons for Technologies
const TechIcons = {
  // Frontend
  React: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  Vue: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3z" fill="#42B883"/>
      <path d="M6.5 3H12l0 0 5.5 0L12 14.5 6.5 3z" fill="#35495E"/>
    </svg>
  ),
  Angular: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L2 6l1.5 13L12 22l8.5-3L22 6l-10-4z" fill="#DD0031"/>
      <path d="M12 2v20l8.5-3L22 6l-10-4z" fill="#C3002F"/>
      <path d="M12 5.5l-6 13h2.25l1.2-3h5.1l1.2 3H18l-6-13zm0 4.5l1.8 4h-3.6l1.8-4z" fill="white"/>
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="white"/>
      <path d="M8 8v8h1.5v-5.5l4 6.5h2L9.5 8H8zm7 0v8h1.5V8H15z" fill="black"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="2" fill="#3178C6"/>
      <path d="M6 12h5v1.5H9v5H7.5v-5H6V12zm6.5 0h5v1.2l-2 .3v5h-1.5v-5l-1.5.3V12z" fill="white"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" fill="#F7DF1E"/>
      <path d="M7 18.5c.3.5.7.8 1.2.8.5 0 .8-.2.8-.6 0-.4-.3-.6-1-.9-.8-.3-1.5-.8-1.5-1.8 0-1 .8-1.7 2-1.7.9 0 1.5.3 1.9 1l-1 .7c-.2-.4-.5-.5-.9-.5-.4 0-.6.2-.6.5 0 .4.3.5 1 .8.9.4 1.5.8 1.5 1.9 0 1-.8 1.8-2.1 1.8-1.1 0-1.9-.5-2.3-1.2l1-.8zm5.5-4.2h1.3V18c0 .5.2.7.6.7.4 0 .6-.2.6-.7v-3.7h1.3V18c0 1.3-.7 2-2 2-1.2 0-1.9-.7-1.9-2v-3.7z" fill="black"/>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="#E34F26"/>
      <path d="M12 4v16l5-2.2L18.2 4H12z" fill="#EF652A"/>
      <path d="M7 7h10l-.2 2H9.2l.2 2h7.4l-.4 5-4.4 1.5-4.4-1.5-.2-3h2l.1 1.5 2.5.7 2.5-.7.3-3H7.2L7 7z" fill="white"/>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="#1572B6"/>
      <path d="M12 4v16l5-2.2L18.2 4H12z" fill="#33A9DC"/>
      <path d="M7 7h10l-.2 2H9.2l.2 2h7.4l-.4 5-4.4 1.5-4.4-1.5-.2-3h2l.1 1.5 2.5.7 2.5-.7.3-3H7.2L7 7z" fill="white"/>
    </svg>
  ),
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.2 2.2 4.6 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-1-2.2-2.2-4.6-2.2zM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.2 2.2 4.6 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-1-2.2-2.2-4.6-2.2z" fill="#06B6D4"/>
    </svg>
  ),
  Sass: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#CD6799"/>
      <path d="M15.5 10.5c-.5 0-1 .1-1.4.3.2-.8.3-1.5.1-2-.3-.8-1-1-1.5-.9-.6.1-1 .5-1.3 1-.4.8-.3 1.8.2 2.7-.5.3-1 .7-1.3 1.2-.5.8-.6 1.7-.2 2.3.3.5.9.8 1.5.8.5 0 1-.2 1.4-.5.6.4 1.3.6 2 .6 1.3 0 2.3-.8 2.5-1.8.2-.8-.2-1.5-.8-2-.4-.3-1-.5-1.5-.6.3-.4.5-.8.5-1.3 0-.5-.3-.8-.7-.8z" fill="white"/>
    </svg>
  ),
  Redux: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M16.6 16.6c.8-.1 1.4-.8 1.4-1.6 0-.9-.7-1.6-1.6-1.6h-.1c-.9 0-1.6.8-1.5 1.7-.6 1.2-1.5 2-2.8 2.7-1 .5-2 .6-3 .4-1.3-.3-2-1-2.3-2-.4-1.4 0-2.7.9-3.8.6-.8 1.4-1.3 1.9-1.6-.1-.4-.3-1-.3-1.5-4 2.9-3.6 6.8-2.4 8.5.9 1.3 2.7 2 4.5 2 .5 0 1 0 1.5-.2 3.2-.6 4.4-3.3 4.5-4.6.4.1.9.2 1.3.2z" fill="#764ABC"/>
      <path d="M19.4 12.6c-2-2.4-5-3.7-8.5-3.7h-.4c-.2-.5-.8-.8-1.3-.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h.1c.6 0 1.1-.3 1.3-.8h.5c2.1 0 4 .6 5.7 1.8 1.3.9 2.2 2 2.7 3.4.4 1.1.4 2.2-.1 3.1-.7 1.4-2 2.1-3.6 2.1-.7 0-1.3-.2-2-.4-.5.4-1 .7-1.5.9 1 .5 2 .7 3 .7 2.2 0 3.9-1.2 4.5-3 .7-2-.3-4.6-2.4-6.5z" fill="#764ABC"/>
      <path d="M6.8 16.2c0-.9.7-1.6 1.6-1.6h.1c.9 0 1.6.8 1.5 1.7 0 .8-.7 1.5-1.6 1.5-.9 0-1.6-.7-1.6-1.6zm2.9-7c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6-.1.9.6 1.6 1.6 1.6z" fill="#764ABC"/>
    </svg>
  ),

  // Backend
  NodeJS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933"/>
      <path d="M12 22l9-5V7l-9 5v10z" fill="#2E7D32"/>
      <path d="M12 12l-9-5v10l9 5V12z" fill="#43A047"/>
      <text x="12" y="14" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">JS</text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2C8 2 8.5 3.5 8.5 3.5v2.5h4v1h-6s-3-.3-3 4 2.5 4.3 2.5 4.3h1.5v-2s-.1-2.5 2.5-2.5h4s2.5.1 2.5-2.3V4.2S16.3 2 12 2zm-2 1.5a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB"/>
      <path d="M12 22c4 0 3.5-1.5 3.5-1.5v-2.5h-4v-1h6s3 .3 3-4-2.5-4.3-2.5-4.3H16.5v2s.1 2.5-2.5 2.5h-4s-2.5-.1-2.5 2.3v4.3S7.7 22 12 22zm2-1.5a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B"/>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M8.5 18.5s-1 .5.5 1c2 .5 6 .5 9-1 0 0 .5.5.5.5-3 1.5-8.5 1.5-10 0-.5-.5 0-.5 0-.5zm-.5-2s-1 .5.5 1c2.5.5 7.5.5 10-1 0 0 .5.5.5.5-3.5 1.5-10 1.5-11-.5z" fill="#E76F00"/>
      <path d="M14 10c2 2.5-1 5-1 5s6-3 3-6.5c-2.5-3-4.5-4.5 6-9.5 0 0-12 3-8 11z" fill="#5382A1"/>
      <path d="M19 20s1 .5-1 1c-3 1-13 1.5-16 0-1-.5 1-1 1.5-1.5 1 0 1.5 0 1.5 0-2-1.5-12 2.5-5 3.5 18 3 33-1.5 19-3zm-8-7s-5 1.5-2 2c1.5 0 4 0 6.5-.5 2-.5 4-1 4-1s-1 .5-1.5 1c-6 1.5-17 1-14-1 3-1.5 7-1 7-1v.5z" fill="#5382A1"/>
    </svg>
  ),
  Go: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M2.5 8.5L1 10l1.5 1.5L4 10l-1.5-1.5zm2 0L3 10l1.5 1.5L6 10 4.5 8.5z" fill="#00ADD8"/>
      <ellipse cx="12" cy="12" rx="8" ry="5" fill="#00ADD8"/>
      <circle cx="8.5" cy="11" r="1" fill="white"/>
      <circle cx="8.5" cy="11" r=".5" fill="black"/>
      <path d="M12 15c3 0 5-1 6-2H6c1 1 3 2 6 2z" fill="#00ADD8"/>
      <ellipse cx="12" cy="12" rx="6" ry="3" fill="none" stroke="white" strokeWidth=".5"/>
    </svg>
  ),
  Rust: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#CE422B" strokeWidth="2"/>
      <circle cx="12" cy="5" r="1.5" fill="#CE422B"/>
      <circle cx="6" cy="16" r="1.5" fill="#CE422B"/>
      <circle cx="18" cy="16" r="1.5" fill="#CE422B"/>
      <path d="M12 8v8M8 12h8" stroke="#CE422B" strokeWidth="2"/>
      <path d="M9 9l6 6M15 9l-6 6" stroke="#CE422B" strokeWidth="1.5"/>
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <ellipse cx="12" cy="12" rx="11" ry="6" fill="#777BB3"/>
      <path d="M6 12c0-1.5 1-2.5 2.5-2.5h1c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5H8v2H6.5v-2.5zm8 0c0-1.5 1-2.5 2.5-2.5h1c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5H16v2h-1.5v-2.5z" fill="white"/>
      <path d="M11.5 9.5H13v3h1v-3h.5l.5 4.5h-4l.5-4.5z" fill="white"/>
    </svg>
  ),
  Ruby: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M4 16l3 4 13-3-4-13-3 3-3-3-6 12z" fill="#CC342D"/>
      <path d="M7 20l13-3-2-8-5 5 3 3-9 3z" fill="#B91C1C"/>
      <path d="M16 4l4 13-9 3 3-8 2-8z" fill="#CC342D"/>
    </svg>
  ),
  CSharp: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#68217A"/>
      <path d="M8 8c-2 1-3 3-3 5s1 4 3 5c2 1 4 1 6 0" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M14 9v6M16 9v6M13 11h4M13 13h4" stroke="white" strokeWidth="1"/>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="2" fill="#000000"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Ex</text>
    </svg>
  ),
  Django: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="2" fill="#092E20"/>
      <path d="M11 5h3v10c-1.5.5-3 .5-4 0-2-1-2-4 0-5 1-.5 2-.5 3 0V7h-2V5zm1 8c1 0 1-.5 1-1s0-1-1-1-1 .5-1 1 0 1 1 1zm5-8h2v12h-2V5z" fill="white"/>
    </svg>
  ),
  Spring: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
      <path d="M18 6c-2 3-5 4-8 3s-5 2-5 4c0 4 6 6 10 4 3-2 5-6 3-11z" fill="white"/>
      <circle cx="7" cy="14" r="1.5" fill="#6DB33F"/>
    </svg>
  ),
  FastAPI: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="2" fill="#009688"/>
      <path d="M12 4l-8 8h5v8l8-8h-5V4z" fill="white"/>
    </svg>
  ),
  GraphQL: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" fill="none" stroke="#E535AB" strokeWidth="1.5"/>
      <circle cx="12" cy="3" r="1.5" fill="#E535AB"/>
      <circle cx="4" cy="7.5" r="1.5" fill="#E535AB"/>
      <circle cx="4" cy="16.5" r="1.5" fill="#E535AB"/>
      <circle cx="12" cy="21" r="1.5" fill="#E535AB"/>
      <circle cx="20" cy="16.5" r="1.5" fill="#E535AB"/>
      <circle cx="20" cy="7.5" r="1.5" fill="#E535AB"/>
      <circle cx="12" cy="12" r="3" fill="#E535AB"/>
    </svg>
  ),

  // Cloud & DevOps
  AWS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M7 13c0 2.5 2 4 5 4s5-1.5 5-4" stroke="#FF9900" strokeWidth="2" fill="none"/>
      <path d="M3 15c0 2 2 3 4 3M21 15c0 2-2 3-4 3" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
      <path d="M6 10l3 3 3-6 3 6 3-3" stroke="#232F3E" strokeWidth="1.5" fill="none"/>
      <text x="12" y="20" textAnchor="middle" fill="#FF9900" fontSize="4" fontWeight="bold">AWS</text>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M6 6l6 12H4l8-16h6l-2 4H6z" fill="#0089D6"/>
      <path d="M10 18l8-12h2l-6 12h-4z" fill="#0089D6"/>
    </svg>
  ),
  GCP: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 6l6 4v6l-6 4-6-4v-6l6-4z" fill="#4285F4"/>
      <path d="M12 6l6 4v6" fill="#EA4335"/>
      <path d="M6 10l6-4 6 4" fill="#FBBC04"/>
      <path d="M6 10v6l6 4" fill="#34A853"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M13 4h2v2h-2V4zm-3 0h2v2h-2V4zM7 4h2v2H7V4zm6 3h2v2h-2V7zm-3 0h2v2h-2V7zM7 7h2v2H7V7zm-3 0h2v2H4V7zm6 3h2v2h-2v-2zm-3 0h2v2H7v-2zm-3 0h2v2H4v-2zM1 10h2v2H1v-2z" fill="#2496ED"/>
      <path d="M23 11c-.5-1-1.5-1.5-2.5-1.5-.3 0-.6 0-1 .1-.3-1-1-2-2.5-2.5v0c-1 3-4 5-7 5H1c0 4 3 7 8 7 6 0 10-3 11-5 2 0 3-.5 3-3z" fill="#2496ED"/>
    </svg>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="#326CE5"/>
      <path d="M12 7l4 2v4l-4 2-4-2V9l4-2z" fill="white"/>
      <circle cx="12" cy="12" r="1.5" fill="#326CE5"/>
      <path d="M12 7v2m0 6v2M8 9l1.5 1m5 4l1.5 1M8 15l1.5-1m5-4l1.5-1" stroke="white" strokeWidth=".5"/>
    </svg>
  ),
  Jenkins: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="10" r="8" fill="#D33833"/>
      <circle cx="12" cy="10" r="6" fill="#F0D6B7"/>
      <circle cx="10" cy="9" r="1" fill="#000"/>
      <circle cx="14" cy="9" r="1" fill="#000"/>
      <path d="M10 12c0 1.5 1 2 2 2s2-.5 2-2" stroke="#000" strokeWidth=".5" fill="none"/>
      <path d="M8 6c0-2 1.5-3 4-3s4 1 4 3" stroke="#335061" strokeWidth="1.5" fill="none"/>
      <rect x="11" y="18" width="2" height="3" fill="#335061"/>
    </svg>
  ),
  Terraform: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M1 5l4 2v5l-4-2V5z" fill="#5C4EE5"/>
      <path d="M6 8l4 2v5l-4-2V8z" fill="#4040B2"/>
      <path d="M11 5l4 2v5l-4-2V5z" fill="#5C4EE5"/>
      <path d="M11 13l4 2v5l-4-2v-5z" fill="#4040B2"/>
      <path d="M16 8l4 2v5l-4-2V8z" fill="#5C4EE5"/>
    </svg>
  ),
  GitHubActions: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#24292E"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" stroke="#FFFFFF" strokeWidth="1.5"/>
    </svg>
  ),
  Nginx: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#009639"/>
      <path d="M8 8v8l2-1V9l4 6v-6l-2 1v4l-4-6z" fill="white"/>
    </svg>
  ),
  Linux: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <ellipse cx="12" cy="14" rx="6" ry="5" fill="#FFC107"/>
      <circle cx="12" cy="9" r="5" fill="#FFC107"/>
      <circle cx="10" cy="8" r="1" fill="#000"/>
      <circle cx="14" cy="8" r="1" fill="#000"/>
      <path d="M10 11c0 1 1 2 2 2s2-1 2-2" fill="#000"/>
      <path d="M7 16c-1 2-2 4 0 4 1 0 2-1 2-2M17 16c1 2 2 4 0 4-1 0-2-1-2-2" fill="#000"/>
    </svg>
  ),

  // Database
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <ellipse cx="12" cy="8" rx="8" ry="5" fill="#336791"/>
      <path d="M4 8v8c0 2.8 3.6 5 8 5s8-2.2 8-5V8" fill="none" stroke="#336791" strokeWidth="2"/>
      <ellipse cx="12" cy="8" rx="5" ry="3" fill="white"/>
      <circle cx="10" cy="8" r="1" fill="#336791"/>
      <circle cx="14" cy="8" r="1" fill="#336791"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2c-1 4-3 6-3 10 0 5 2 8 3 10 1-2 3-5 3-10 0-4-2-6-3-10z" fill="#00ED64"/>
      <path d="M12 2c1 4 3 6 3 10 0 5-2 8-3 10" fill="#12924F"/>
      <rect x="11" y="18" width="2" height="4" fill="#B8C4C2"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M4 6c0-2 2-3 4-3h8c2 0 4 1 4 3v12c0 2-2 3-4 3H8c-2 0-4-1-4-3V6z" fill="#00758F"/>
      <path d="M8 10l2 2 2-2 2 2 2-2M8 14l2 2 2-2 2 2 2-2" stroke="white" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M22 12c0 3-4 5-10 5S2 15 2 12s4-5 10-5 10 2 10 5z" fill="#DC382D"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="#A41E11"/>
      <path d="M8 10l4 2 4-2M6 12l6 3 6-3" stroke="#FFF" strokeWidth="1"/>
    </svg>
  ),
  Elasticsearch: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#FEC514"/>
      <path d="M4 10h16M4 14h16" stroke="#343741" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3" fill="#00BFB3"/>
    </svg>
  ),
  Oracle: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect x="2" y="8" width="20" height="8" rx="4" fill="#F80000"/>
      <text x="12" y="14" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">ORACLE</text>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M4 20l2-14 4 7-2 1 8 6H4z" fill="#FFA000"/>
      <path d="M6 6l4 7 2-1L14 2l-2 6-6-2z" fill="#F57F17"/>
      <path d="M4 20l8-5 8 5H4z" fill="#FFCA28"/>
      <path d="M12 15l-2-9 2-4 6 8-6 5z" fill="#FF6F00"/>
    </svg>
  ),
  Supabase: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 3l-8 16h10v4l8-16H12V3z" fill="#3ECF8E"/>
      <path d="M12 3v4h10l-10-4z" fill="#3ECF8E" opacity="0.7"/>
    </svg>
  ),

  // Mobile
  ReactNative: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="4" fill="#282C34"/>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M14 2l-10 10 4 4 14-14h-8z" fill="#02569B"/>
      <path d="M14 12l-4 4 4 4 8-8h-8z" fill="#02569B"/>
      <path d="M10 16l4-4 4 4-4 4-4-4z" fill="#13B9FD"/>
    </svg>
  ),
  Swift: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="5" fill="#FA7343"/>
      <path d="M18 6c-2 4-6 7-10 8 2-1 3-3 3-5-1 1-3 2-5 2 4-2 7-5 8-9 1 2 3 3 4 4z" fill="white"/>
    </svg>
  ),
  Kotlin: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M2 22V2h20L12 12l10 10H2z" fill="url(#kotlinGrad)"/>
      <defs>
        <linearGradient id="kotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F52FF"/>
          <stop offset="50%" stopColor="#C811E2"/>
          <stop offset="100%" stopColor="#E54857"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Android: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M6 10c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1s1-.5 1-1v-6c0-.5-.5-1-1-1zm12 0c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1s1-.5 1-1v-6c0-.5-.5-1-1-1z" fill="#3DDC84"/>
      <rect x="8" y="10" width="8" height="9" rx="1" fill="#3DDC84"/>
      <path d="M8 10c0-2 2-4 4-4s4 2 4 4H8z" fill="#3DDC84"/>
      <circle cx="10" cy="7" r=".5" fill="white"/>
      <circle cx="14" cy="7" r=".5" fill="white"/>
      <path d="M9 4l-1-2M15 4l1-2" stroke="#3DDC84" strokeWidth=".5"/>
    </svg>
  ),
  iOS: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="5" fill="#000"/>
      <path d="M16 6c-.5-2-2-3-3.5-3-1 0-2 .5-2.5 1.5-.5-1-1.5-1.5-2.5-1.5C6 3 5 4 4.5 5.5 4 7 4.5 9 6 10c1.5 1 3 1 4 0 1 1 2.5 1 4 0 1.5-1 2-3 1.5-4z" fill="white"/>
      <path d="M12 10v8c0 2-2 3-4 3s-4-1-4-3c0 2 2 3 4 3 1 0 2-.5 2.5-1.5.5 1 1.5 1.5 2.5 1.5 2 0 4-1 4-3 0 2-2 3-4 3-.5 0-1-.5-1-1v-7z" fill="white"/>
    </svg>
  ),

  // AI & ML
  TensorFlow: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2l-10 6v8l10 6 10-6V8L12 2z" fill="#FF6F00"/>
      <path d="M12 2v20l10-6V8L12 2z" fill="#FF9800"/>
      <path d="M2 8l10 6 10-6" fill="#FF6F00"/>
      <path d="M12 8v14" stroke="white" strokeWidth="1.5"/>
      <path d="M8 10v8l4 2V12l-4-2z" fill="white"/>
      <path d="M16 10v8l-4 2V12l4-2z" fill="white" opacity="0.7"/>
    </svg>
  ),
  PyTorch: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="14" r="8" fill="none" stroke="#EE4C2C" strokeWidth="2"/>
      <circle cx="16" cy="8" r="2" fill="#EE4C2C"/>
      <path d="M12 6v8l-5 5" stroke="#EE4C2C" strokeWidth="2" fill="none"/>
    </svg>
  ),
  OpenAI: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#000"/>
      <path d="M12 6c3 0 5 2 5 5v1h-2v-1c0-2-1-3-3-3s-3 1-3 3v1H7v-1c0-3 2-5 5-5z" fill="white"/>
      <path d="M9 14c0 2 1 3 3 3s3-1 3-3H9z" fill="white"/>
    </svg>
  ),
  Hugging: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
      <circle cx="9" cy="10" r="2" fill="#000"/>
      <circle cx="15" cy="10" r="2" fill="#000"/>
      <path d="M8 15c2 2 6 2 8 0" stroke="#000" strokeWidth="1.5" fill="none"/>
      <circle cx="9" cy="10" r=".5" fill="white"/>
      <circle cx="15" cy="10" r=".5" fill="white"/>
    </svg>
  ),
  Scikit: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="8" cy="8" r="4" fill="#F89939"/>
      <circle cx="16" cy="8" r="4" fill="#3499CD"/>
      <circle cx="12" cy="16" r="4" fill="#F89939"/>
      <path d="M8 12l4 4M16 12l-4 4M12 8v4" stroke="#3499CD" strokeWidth="1.5"/>
    </svg>
  ),
  Jupyter: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#F37626"/>
      <circle cx="5" cy="6" r="2" fill="#9E9E9E"/>
      <circle cx="19" cy="6" r="1.5" fill="#616161"/>
      <circle cx="17" cy="18" r="1" fill="#757575"/>
      <ellipse cx="12" cy="12" rx="6" ry="3" fill="none" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  Pandas: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect x="3" y="4" width="4" height="16" rx="1" fill="#150458"/>
      <rect x="10" y="8" width="4" height="8" rx="1" fill="#150458"/>
      <rect x="17" y="4" width="4" height="16" rx="1" fill="#150458"/>
      <rect x="10" y="4" width="4" height="2" rx="0.5" fill="#E70488"/>
      <rect x="10" y="18" width="4" height="2" rx="0.5" fill="#E70488"/>
    </svg>
  ),
  NumPy: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2l10 6v8l-10 6-10-6V8l10-6z" fill="#4DABCF"/>
      <path d="M12 2v20l10-6V8l-10-6z" fill="#4D77CF"/>
      <path d="M7 10v8l5 3V13l-5-3z" fill="#FFFFFF"/>
      <path d="M12 10v11l5-3V10l-5 0z" fill="#4DABCF"/>
    </svg>
  ),

  // Additional Tools
  Git: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M21.6 11.3L12.7 2.4c-.5-.5-1.3-.5-1.8 0l-2.1 2.1 2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.7-1.3-.4-1.9l-2.4-2.4v6.3c.2.1.3.2.5.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.4-.3.6-.4V9.8c-.2-.1-.4-.2-.6-.4-.6-.6-.7-1.4-.4-2l-2.6-2.6-7 7c-.5.5-.5 1.3 0 1.8l9 9c.5.5 1.3.5 1.8 0l8.9-8.9c.5-.5.5-1.3 0-1.8z" fill="#F05032"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#24292E"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z" fill="white"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="15" cy="7" r="3" fill="#1ABCFE"/>
      <circle cx="15" cy="12" r="3" fill="#0ACF83"/>
      <circle cx="9" cy="17" r="3" fill="#A259FF"/>
      <circle cx="9" cy="12" r="3" fill="#FF7262"/>
      <circle cx="9" cy="7" r="3" fill="#F24E1E"/>
    </svg>
  ),
  Jira: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#2684FF"/>
      <path d="M12 7l-5 5 5 5 5-5-5-5z" fill="white"/>
      <path d="M12 9l-3 3 3 3 3-3-3-3z" fill="#2684FF"/>
    </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M6 15a2 2 0 01-2-2 2 2 0 012-2h2v2a2 2 0 01-2 2z" fill="#E01E5A"/>
      <path d="M6 6h2a2 2 0 012 2v5a2 2 0 01-2 2 2 2 0 01-2-2V6z" fill="#E01E5A"/>
      <path d="M18 9a2 2 0 012 2 2 2 0 01-2 2h-2v-2a2 2 0 012-2z" fill="#36C5F0"/>
      <path d="M11 6a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2 2 2 0 012-2h5z" fill="#36C5F0"/>
      <path d="M9 18a2 2 0 01-2-2 2 2 0 012-2h2v2a2 2 0 01-2 2z" fill="#2EB67D"/>
      <path d="M9 9h5a2 2 0 012 2 2 2 0 01-2 2h-5V9z" fill="#2EB67D"/>
      <path d="M15 18h-2a2 2 0 01-2-2v-5a2 2 0 012-2 2 2 0 012 2v7z" fill="#ECB22E"/>
      <path d="M18 13a2 2 0 012 2 2 2 0 01-2 2h-5v-4h5z" fill="#ECB22E"/>
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M17 2l4 3v14l-4 3-10-8V6l10 8V2z" fill="#007ACC"/>
      <path d="M17 2v12l-10 8V6l10-4z" fill="#1F9CF0"/>
      <path d="M7 14l-4-2V8l4 2v4z" fill="#007ACC"/>
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 4l10 16H2L12 4z" fill="#000"/>
    </svg>
  ),
  Netlify: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#00C7B7"/>
      <path d="M12 2l10 5v10l-10 5" fill="#00AD9F"/>
      <path d="M7 9.5L12 12l5-2.5L12 7 7 9.5z" fill="white"/>
    </svg>
  ),
};

// Tech Item Component
const TechItem = ({ name, icon: Icon, color, isHovered, onHover }) => {
  return (
    <div
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
      className={`flex-shrink-0 group relative cursor-pointer transition-all duration-300 ${
        isHovered ? 'scale-110 z-10' : 'scale-100'
      }`}
    >
      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-zinc-900/80 border border-white/10 p-3 md:p-4 transition-all duration-300 group-hover:border-violet-500/50 group-hover:shadow-lg group-hover:shadow-violet-500/20 ${
        isHovered ? 'bg-zinc-800/90' : ''
      }`}>
        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className="relative w-full h-full">
          <Icon />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 rounded-lg text-xs text-white whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        {name}
      </div>
    </div>
  );
};

// Marquee Row Component
const MarqueeRow = ({ items, direction = 'left', speed = 30, t, hoveredTech, setHoveredTech }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 group">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Marquee Content */}
      <div
        className={`flex gap-4 md:gap-6 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <TechItem
            key={`${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
            color={item.color}
            isHovered={hoveredTech === item.name}
            onHover={setHoveredTech}
          />
        ))}
      </div>
    </div>
  );
};

// Category Badge Component
const CategoryBadge = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
          : 'bg-zinc-900/50 border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/30'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

// Main Component
const TechnologySection = () => {
  const { t: globalT, currentLanguage, isRTL } = useLanguage();
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef(null);

  // Local translation function
  const t = (key) => {
    const localTranslations = techTranslations[currentLanguage] || techTranslations.en;
    return localTranslations[key] || globalT(key) || key;
  };

  // Technology categories
  const categories = [
    { id: 'all', icon: Layers, label: 'All' },
    { id: 'frontend', icon: Code2, label: t('frontend') },
    { id: 'backend', icon: Server, label: t('backend') },
    { id: 'cloud', icon: Cloud, label: t('cloud') },
    { id: 'database', icon: Database, label: t('database') },
    { id: 'mobile', icon: Cpu, label: t('mobile') },
    { id: 'ai', icon: Sparkles, label: t('ai') },
  ];

  // Technologies data
  const technologies = {
    frontend: [
      { name: 'React', icon: TechIcons.React, color: 'from-cyan-400 to-blue-500' },
      { name: 'Vue.js', icon: TechIcons.Vue, color: 'from-green-400 to-emerald-500' },
      { name: 'Angular', icon: TechIcons.Angular, color: 'from-red-400 to-red-600' },
      { name: 'Next.js', icon: TechIcons.NextJS, color: 'from-gray-400 to-gray-600' },
      { name: 'TypeScript', icon: TechIcons.TypeScript, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', icon: TechIcons.JavaScript, color: 'from-yellow-400 to-yellow-500' },
      { name: 'HTML5', icon: TechIcons.HTML5, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS3', icon: TechIcons.CSS3, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind', icon: TechIcons.TailwindCSS, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Sass', icon: TechIcons.Sass, color: 'from-pink-400 to-pink-600' },
      { name: 'Redux', icon: TechIcons.Redux, color: 'from-purple-400 to-purple-600' },
    ],
    backend: [
      { name: 'Node.js', icon: TechIcons.NodeJS, color: 'from-green-400 to-green-600' },
      { name: 'Python', icon: TechIcons.Python, color: 'from-blue-400 to-yellow-500' },
      { name: 'Java', icon: TechIcons.Java, color: 'from-red-400 to-blue-500' },
      { name: 'Go', icon: TechIcons.Go, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Rust', icon: TechIcons.Rust, color: 'from-orange-400 to-orange-600' },
      { name: 'PHP', icon: TechIcons.PHP, color: 'from-indigo-400 to-indigo-600' },
      { name: 'Ruby', icon: TechIcons.Ruby, color: 'from-red-400 to-red-600' },
      { name: 'C#', icon: TechIcons.CSharp, color: 'from-purple-400 to-purple-600' },
      { name: 'Express', icon: TechIcons.Express, color: 'from-gray-400 to-gray-600' },
      { name: 'Django', icon: TechIcons.Django, color: 'from-green-700 to-green-900' },
      { name: 'Spring', icon: TechIcons.Spring, color: 'from-green-400 to-green-600' },
      { name: 'FastAPI', icon: TechIcons.FastAPI, color: 'from-teal-400 to-teal-600' },
      { name: 'GraphQL', icon: TechIcons.GraphQL, color: 'from-pink-400 to-pink-600' },
    ],
    cloud: [
      { name: 'AWS', icon: TechIcons.AWS, color: 'from-orange-400 to-orange-600' },
      { name: 'Azure', icon: TechIcons.Azure, color: 'from-blue-400 to-blue-600' },
      { name: 'GCP', icon: TechIcons.GCP, color: 'from-blue-400 to-red-500' },
      { name: 'Docker', icon: TechIcons.Docker, color: 'from-blue-400 to-blue-600' },
      { name: 'Kubernetes', icon: TechIcons.Kubernetes, color: 'from-blue-400 to-blue-600' },
      { name: 'Jenkins', icon: TechIcons.Jenkins, color: 'from-red-400 to-red-600' },
      { name: 'Terraform', icon: TechIcons.Terraform, color: 'from-purple-400 to-purple-600' },
      { name: 'GitHub Actions', icon: TechIcons.GitHubActions, color: 'from-gray-400 to-gray-600' },
      { name: 'Nginx', icon: TechIcons.Nginx, color: 'from-green-400 to-green-600' },
      { name: 'Linux', icon: TechIcons.Linux, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Vercel', icon: TechIcons.Vercel, color: 'from-gray-400 to-gray-600' },
      { name: 'Netlify', icon: TechIcons.Netlify, color: 'from-teal-400 to-teal-600' },
    ],
    database: [
      { name: 'PostgreSQL', icon: TechIcons.PostgreSQL, color: 'from-blue-400 to-blue-600' },
      { name: 'MongoDB', icon: TechIcons.MongoDB, color: 'from-green-400 to-green-600' },
      { name: 'MySQL', icon: TechIcons.MySQL, color: 'from-blue-400 to-orange-500' },
      { name: 'Redis', icon: TechIcons.Redis, color: 'from-red-400 to-red-600' },
      { name: 'Elasticsearch', icon: TechIcons.Elasticsearch, color: 'from-yellow-400 to-teal-500' },
      { name: 'Oracle', icon: TechIcons.Oracle, color: 'from-red-500 to-red-700' },
      { name: 'Firebase', icon: TechIcons.Firebase, color: 'from-yellow-400 to-orange-500' },
      { name: 'Supabase', icon: TechIcons.Supabase, color: 'from-green-400 to-green-600' },
    ],
    mobile: [
      { name: 'React Native', icon: TechIcons.ReactNative, color: 'from-cyan-400 to-blue-500' },
      { name: 'Flutter', icon: TechIcons.Flutter, color: 'from-blue-400 to-blue-600' },
      { name: 'Swift', icon: TechIcons.Swift, color: 'from-orange-400 to-orange-600' },
      { name: 'Kotlin', icon: TechIcons.Kotlin, color: 'from-purple-400 to-orange-500' },
      { name: 'Android', icon: TechIcons.Android, color: 'from-green-400 to-green-600' },
      { name: 'iOS', icon: TechIcons.iOS, color: 'from-gray-400 to-gray-600' },
    ],
    ai: [
      { name: 'TensorFlow', icon: TechIcons.TensorFlow, color: 'from-orange-400 to-orange-600' },
      { name: 'PyTorch', icon: TechIcons.PyTorch, color: 'from-red-400 to-orange-500' },
      { name: 'OpenAI', icon: TechIcons.OpenAI, color: 'from-gray-400 to-gray-600' },
      { name: 'Hugging Face', icon: TechIcons.Hugging, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Scikit-learn', icon: TechIcons.Scikit, color: 'from-orange-400 to-blue-500' },
      { name: 'Jupyter', icon: TechIcons.Jupyter, color: 'from-orange-400 to-orange-600' },
      { name: 'Pandas', icon: TechIcons.Pandas, color: 'from-blue-900 to-pink-600' },
      { name: 'NumPy', icon: TechIcons.NumPy, color: 'from-blue-400 to-blue-600' },
    ],
    tools: [
      { name: 'Git', icon: TechIcons.Git, color: 'from-orange-400 to-red-500' },
      { name: 'GitHub', icon: TechIcons.GitHub, color: 'from-gray-400 to-gray-600' },
      { name: 'Figma', icon: TechIcons.Figma, color: 'from-purple-400 to-pink-500' },
      { name: 'Jira', icon: TechIcons.Jira, color: 'from-blue-400 to-blue-600' },
      { name: 'Slack', icon: TechIcons.Slack, color: 'from-purple-400 to-green-500' },
      { name: 'VS Code', icon: TechIcons.VSCode, color: 'from-blue-400 to-blue-600' },
    ],
  };

  // Get all technologies or filtered by category
  const getDisplayTechnologies = () => {
    if (selectedCategory === 'all') {
      return Object.values(technologies).flat();
    }
    return technologies[selectedCategory] || [];
  };

  // Split technologies into rows for marquee
  const allTech = getDisplayTechnologies();
  const row1 = allTech.slice(0, Math.ceil(allTech.length / 2));
  const row2 = allTech.slice(Math.ceil(allTech.length / 2));

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'text-right md:text-center' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Code2 className="w-4 h-4 text-violet-400" />
            <span className="text-xs md:text-sm font-medium tracking-wider text-violet-400 uppercase">
              {t('techWeUse')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
            {t('poweringInnovation')}{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t('innovation')}
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            {t('techDescription')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4">
          {categories.map((category) => (
            <CategoryBadge
              key={category.id}
              icon={category.icon}
              label={category.label}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>

        {/* Marquee Rows */}
        <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
          <MarqueeRow
            items={row1}
            direction="left"
            speed={40}
            t={t}
            hoveredTech={hoveredTech}
            setHoveredTech={setHoveredTech}
          />
          <MarqueeRow
            items={row2}
            direction="right"
            speed={35}
            t={t}
            hoveredTech={hoveredTech}
            setHoveredTech={setHoveredTech}
          />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { value: '60+', label: 'Technologies' },
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 md:p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-violet-500/20 transition-colors">
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25">
            <span>{t('viewAllTech')}</span>
            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        {/* Trusted By */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-sm text-gray-500 mb-6">{t('trustedBy')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
              <span key={company} className="text-xl md:text-2xl font-bold text-gray-600">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;