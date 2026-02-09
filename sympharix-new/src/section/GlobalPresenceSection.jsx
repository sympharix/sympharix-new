import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Users, Building, Award, Globe, TrendingUp, Sparkles, ChevronRight, Play, Pause } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Add these translations to your LanguageContext.jsx
const globalPresenceTranslations = {
  en: {
    globalReach: 'Global Reach',
    worldwideExcellence: 'Worldwide',
    excellence: 'Excellence',
    globalDescription: 'Operating across six continents with local expertise and global standards. Wherever you are, we\'re there.',
    countries: 'Countries',
    offices: 'Offices',
    professionals: 'Professionals',
    employees: 'Employees',
    clients: 'Clients',
    revenue: 'Revenue',
    ourJourney: 'Our Journey',
    globalRecognition: 'Global Recognition',
    exploreRegion: 'Explore Region',
    viewAll: 'View All Offices',
    northAmerica: 'North America',
    europe: 'Europe',
    asiaPacific: 'Asia Pacific',
    middleEastAfrica: 'Middle East & Africa',
    latinAmerica: 'Latin America',
    founded: 'Founded in New York',
    expandedEurope: 'Expanded to Europe & Asia',
    reached50: 'Reached 50 countries',
    launchedLabs: 'Launched innovation labs globally',
    digitalTransform: 'Digital transformation leadership',
    globalLeader: '150+ countries, 25,000+ professionals',
    bestConsulting: 'Best Consulting Firm',
    innovationLeader: 'Innovation Leader',
    topEmployer: 'Top Employer',
    techPioneer: 'Tech Pioneer',
    liveActivity: 'Live Activity',
    projectsActive: 'Active Projects',
    teamMembers: 'Team Members Online',
    clientMeetings: 'Client Meetings Today',
  },
  zh: {
    globalReach: '全球覆盖',
    worldwideExcellence: '全球',
    excellence: '卓越',
    globalDescription: '在六大洲运营，拥有本地专业知识和全球标准。无论您身在何处，我们都在那里。',
    countries: '国家',
    offices: '办事处',
    professionals: '专业人员',
    employees: '员工',
    clients: '客户',
    revenue: '收入',
    ourJourney: '我们的历程',
    globalRecognition: '全球认可',
    exploreRegion: '探索地区',
    viewAll: '查看所有办事处',
    northAmerica: '北美洲',
    europe: '欧洲',
    asiaPacific: '亚太地区',
    middleEastAfrica: '中东和非洲',
    latinAmerica: '拉丁美洲',
    founded: '在纽约成立',
    expandedEurope: '扩展到欧洲和亚洲',
    reached50: '覆盖50个国家',
    launchedLabs: '在全球启动创新实验室',
    digitalTransform: '数字化转型领导力',
    globalLeader: '150+国家，25,000+专业人员',
    bestConsulting: '最佳咨询公司',
    innovationLeader: '创新领导者',
    topEmployer: '最佳雇主',
    techPioneer: '科技先锋',
    liveActivity: '实时活动',
    projectsActive: '活跃项目',
    teamMembers: '在线团队成员',
    clientMeetings: '今日客户会议',
  },
  ja: {
    globalReach: 'グローバル展開',
    worldwideExcellence: '世界規模の',
    excellence: '卓越性',
    globalDescription: '6大陸で事業を展開し、地域の専門知識とグローバルスタンダードを提供。お客様がどこにいても、私たちはそこにいます。',
    countries: '国',
    offices: 'オフィス',
    professionals: '専門家',
    employees: '従業員',
    clients: 'クライアント',
    revenue: '収益',
    ourJourney: '私たちの歩み',
    globalRecognition: 'グローバル認知',
    exploreRegion: '地域を探索',
    viewAll: '全オフィスを見る',
    northAmerica: '北米',
    europe: 'ヨーロッパ',
    asiaPacific: 'アジア太平洋',
    middleEastAfrica: '中東・アフリカ',
    latinAmerica: 'ラテンアメリカ',
    founded: 'ニューヨークで設立',
    expandedEurope: 'ヨーロッパとアジアに拡大',
    reached50: '50カ国に到達',
    launchedLabs: 'グローバルにイノベーションラボを開設',
    digitalTransform: 'デジタル変革のリーダーシップ',
    globalLeader: '150+カ国、25,000+人の専門家',
    bestConsulting: '最優秀コンサルティング会社',
    innovationLeader: 'イノベーションリーダー',
    topEmployer: 'トップ雇用主',
    techPioneer: 'テックパイオニア',
    liveActivity: 'ライブアクティビティ',
    projectsActive: 'アクティブプロジェクト',
    teamMembers: 'オンラインチームメンバー',
    clientMeetings: '本日のクライアントミーティング',
  },
  ko: {
    globalReach: '글로벌 영역',
    worldwideExcellence: '전 세계',
    excellence: '우수성',
    globalDescription: '6개 대륙에서 현지 전문 지식과 글로벌 표준으로 운영됩니다. 어디에 있든 저희가 함께합니다.',
    countries: '국가',
    offices: '사무소',
    professionals: '전문가',
    employees: '직원',
    clients: '고객',
    revenue: '수익',
    ourJourney: '우리의 여정',
    globalRecognition: '글로벌 인정',
    exploreRegion: '지역 탐색',
    viewAll: '모든 사무소 보기',
    northAmerica: '북미',
    europe: '유럽',
    asiaPacific: '아시아 태평양',
    middleEastAfrica: '중동 및 아프리카',
    latinAmerica: '라틴 아메리카',
    founded: '뉴욕에서 설립',
    expandedEurope: '유럽과 아시아로 확장',
    reached50: '50개국 도달',
    launchedLabs: '글로벌 혁신 연구소 출범',
    digitalTransform: '디지털 전환 리더십',
    globalLeader: '150+ 국가, 25,000+ 전문가',
    bestConsulting: '최고의 컨설팅 회사',
    innovationLeader: '혁신 리더',
    topEmployer: '최고의 고용주',
    techPioneer: '기술 선구자',
    liveActivity: '실시간 활동',
    projectsActive: '활성 프로젝트',
    teamMembers: '온라인 팀원',
    clientMeetings: '오늘의 고객 미팅',
  },
  hi: {
    globalReach: 'वैश्विक पहुंच',
    worldwideExcellence: 'विश्वव्यापी',
    excellence: 'उत्कृष्टता',
    globalDescription: 'छह महाद्वीपों में स्थानीय विशेषज्ञता और वैश्विक मानकों के साथ संचालन। आप जहां भी हों, हम वहां हैं।',
    countries: 'देश',
    offices: 'कार्यालय',
    professionals: 'पेशेवर',
    employees: 'कर्मचारी',
    clients: 'ग्राहक',
    revenue: 'राजस्व',
    ourJourney: 'हमारी यात्रा',
    globalRecognition: 'वैश्विक मान्यता',
    exploreRegion: 'क्षेत्र का अन्वेषण करें',
    viewAll: 'सभी कार्यालय देखें',
    northAmerica: 'उत्तरी अमेरिका',
    europe: 'यूरोप',
    asiaPacific: 'एशिया प्रशांत',
    middleEastAfrica: 'मध्य पूर्व और अफ्रीका',
    latinAmerica: 'लैटिन अमेरिका',
    founded: 'न्यूयॉर्क में स्थापित',
    expandedEurope: 'यूरोप और एशिया में विस्तार',
    reached50: '50 देशों तक पहुंचे',
    launchedLabs: 'वैश्विक स्तर पर नवाचार प्रयोगशालाएं शुरू कीं',
    digitalTransform: 'डिजिटल परिवर्तन नेतृत्व',
    globalLeader: '150+ देश, 25,000+ पेशेवर',
    bestConsulting: 'सर्वश्रेष्ठ परामर्श फर्म',
    innovationLeader: 'नवाचार नेता',
    topEmployer: 'शीर्ष नियोक्ता',
    techPioneer: 'तकनीक अग्रणी',
    liveActivity: 'लाइव गतिविधि',
    projectsActive: 'सक्रिय परियोजनाएं',
    teamMembers: 'ऑनलाइन टीम सदस्य',
    clientMeetings: 'आज की ग्राहक बैठकें',
  },
  ar: {
    globalReach: 'الوصول العالمي',
    worldwideExcellence: 'التميز',
    excellence: 'العالمي',
    globalDescription: 'نعمل في ست قارات مع الخبرة المحلية والمعايير العالمية. أينما كنت، نحن هناك.',
    countries: 'دولة',
    offices: 'مكتب',
    professionals: 'محترف',
    employees: 'الموظفين',
    clients: 'العملاء',
    revenue: 'الإيرادات',
    ourJourney: 'رحلتنا',
    globalRecognition: 'الاعتراف العالمي',
    exploreRegion: 'استكشف المنطقة',
    viewAll: 'عرض جميع المكاتب',
    northAmerica: 'أمريكا الشمالية',
    europe: 'أوروبا',
    asiaPacific: 'آسيا والمحيط الهادئ',
    middleEastAfrica: 'الشرق الأوسط وأفريقيا',
    latinAmerica: 'أمريكا اللاتينية',
    founded: 'تأسست في نيويورك',
    expandedEurope: 'التوسع إلى أوروبا وآسيا',
    reached50: 'وصلنا إلى 50 دولة',
    launchedLabs: 'أطلقنا مختبرات الابتكار عالمياً',
    digitalTransform: 'قيادة التحول الرقمي',
    globalLeader: '150+ دولة، 25,000+ محترف',
    bestConsulting: 'أفضل شركة استشارية',
    innovationLeader: 'رائد الابتكار',
    topEmployer: 'أفضل صاحب عمل',
    techPioneer: 'رائد التكنولوجيا',
    liveActivity: 'النشاط المباشر',
    projectsActive: 'المشاريع النشطة',
    teamMembers: 'أعضاء الفريق المتصلين',
    clientMeetings: 'اجتماعات العملاء اليوم',
  },
  de: {
    globalReach: 'Globale Reichweite',
    worldwideExcellence: 'Weltweite',
    excellence: 'Exzellenz',
    globalDescription: 'Tätig auf sechs Kontinenten mit lokaler Expertise und globalen Standards. Wo auch immer Sie sind, wir sind da.',
    countries: 'Länder',
    offices: 'Büros',
    professionals: 'Fachleute',
    employees: 'Mitarbeiter',
    clients: 'Kunden',
    revenue: 'Umsatz',
    ourJourney: 'Unsere Reise',
    globalRecognition: 'Globale Anerkennung',
    exploreRegion: 'Region erkunden',
    viewAll: 'Alle Büros anzeigen',
    northAmerica: 'Nordamerika',
    europe: 'Europa',
    asiaPacific: 'Asien-Pazifik',
    middleEastAfrica: 'Naher Osten & Afrika',
    latinAmerica: 'Lateinamerika',
    founded: 'Gegründet in New York',
    expandedEurope: 'Expansion nach Europa & Asien',
    reached50: '50 Länder erreicht',
    launchedLabs: 'Innovationslabore weltweit gestartet',
    digitalTransform: 'Führung der digitalen Transformation',
    globalLeader: '150+ Länder, 25.000+ Fachleute',
    bestConsulting: 'Beste Beratungsfirma',
    innovationLeader: 'Innovationsführer',
    topEmployer: 'Top-Arbeitgeber',
    techPioneer: 'Tech-Pionier',
    liveActivity: 'Live-Aktivität',
    projectsActive: 'Aktive Projekte',
    teamMembers: 'Online-Teammitglieder',
    clientMeetings: 'Kundenmeetings heute',
  },
  fr: {
    globalReach: 'Portée Mondiale',
    worldwideExcellence: 'Excellence',
    excellence: 'Mondiale',
    globalDescription: 'Opérant sur six continents avec une expertise locale et des normes mondiales. Où que vous soyez, nous y sommes.',
    countries: 'Pays',
    offices: 'Bureaux',
    professionals: 'Professionnels',
    employees: 'Employés',
    clients: 'Clients',
    revenue: 'Revenus',
    ourJourney: 'Notre Parcours',
    globalRecognition: 'Reconnaissance Mondiale',
    exploreRegion: 'Explorer la Région',
    viewAll: 'Voir Tous les Bureaux',
    northAmerica: 'Amérique du Nord',
    europe: 'Europe',
    asiaPacific: 'Asie-Pacifique',
    middleEastAfrica: 'Moyen-Orient & Afrique',
    latinAmerica: 'Amérique Latine',
    founded: 'Fondé à New York',
    expandedEurope: 'Expansion en Europe & Asie',
    reached50: 'Atteint 50 pays',
    launchedLabs: 'Lancement des labs d\'innovation mondiaux',
    digitalTransform: 'Leadership de la transformation digitale',
    globalLeader: '150+ pays, 25 000+ professionnels',
    bestConsulting: 'Meilleur Cabinet de Conseil',
    innovationLeader: 'Leader de l\'Innovation',
    topEmployer: 'Meilleur Employeur',
    techPioneer: 'Pionnier Tech',
    liveActivity: 'Activité en Direct',
    projectsActive: 'Projets Actifs',
    teamMembers: 'Membres de l\'Équipe en Ligne',
    clientMeetings: 'Réunions Clients Aujourd\'hui',
  },
  es: {
    globalReach: 'Alcance Global',
    worldwideExcellence: 'Excelencia',
    excellence: 'Mundial',
    globalDescription: 'Operando en seis continentes con experiencia local y estándares globales. Donde sea que estés, estamos ahí.',
    countries: 'Países',
    offices: 'Oficinas',
    professionals: 'Profesionales',
    employees: 'Empleados',
    clients: 'Clientes',
    revenue: 'Ingresos',
    ourJourney: 'Nuestro Viaje',
    globalRecognition: 'Reconocimiento Global',
    exploreRegion: 'Explorar Región',
    viewAll: 'Ver Todas las Oficinas',
    northAmerica: 'América del Norte',
    europe: 'Europa',
    asiaPacific: 'Asia Pacífico',
    middleEastAfrica: 'Medio Oriente y África',
    latinAmerica: 'América Latina',
    founded: 'Fundado en Nueva York',
    expandedEurope: 'Expansión a Europa y Asia',
    reached50: 'Alcanzamos 50 países',
    launchedLabs: 'Lanzamiento de labs de innovación globales',
    digitalTransform: 'Liderazgo en transformación digital',
    globalLeader: '150+ países, 25,000+ profesionales',
    bestConsulting: 'Mejor Firma Consultora',
    innovationLeader: 'Líder en Innovación',
    topEmployer: 'Mejor Empleador',
    techPioneer: 'Pionero Tecnológico',
    liveActivity: 'Actividad en Vivo',
    projectsActive: 'Proyectos Activos',
    teamMembers: 'Miembros del Equipo en Línea',
    clientMeetings: 'Reuniones con Clientes Hoy',
  },
  pt: {
    globalReach: 'Alcance Global',
    worldwideExcellence: 'Excelência',
    excellence: 'Mundial',
    globalDescription: 'Operando em seis continentes com expertise local e padrões globais. Onde quer que você esteja, nós estamos lá.',
    countries: 'Países',
    offices: 'Escritórios',
    professionals: 'Profissionais',
    employees: 'Funcionários',
    clients: 'Clientes',
    revenue: 'Receita',
    ourJourney: 'Nossa Jornada',
    globalRecognition: 'Reconhecimento Global',
    exploreRegion: 'Explorar Região',
    viewAll: 'Ver Todos os Escritórios',
    northAmerica: 'América do Norte',
    europe: 'Europa',
    asiaPacific: 'Ásia-Pacífico',
    middleEastAfrica: 'Oriente Médio e África',
    latinAmerica: 'América Latina',
    founded: 'Fundada em Nova York',
    expandedEurope: 'Expansão para Europa e Ásia',
    reached50: 'Alcançamos 50 países',
    launchedLabs: 'Lançamento de labs de inovação globais',
    digitalTransform: 'Liderança em transformação digital',
    globalLeader: '150+ países, 25.000+ profissionais',
    bestConsulting: 'Melhor Empresa de Consultoria',
    innovationLeader: 'Líder em Inovação',
    topEmployer: 'Melhor Empregador',
    techPioneer: 'Pioneiro em Tecnologia',
    liveActivity: 'Atividade ao Vivo',
    projectsActive: 'Projetos Ativos',
    teamMembers: 'Membros da Equipe Online',
    clientMeetings: 'Reuniões com Clientes Hoje',
  },
  ru: {
    globalReach: 'Глобальный охват',
    worldwideExcellence: 'Мировое',
    excellence: 'Совершенство',
    globalDescription: 'Работаем на шести континентах с местной экспертизой и глобальными стандартами. Где бы вы ни были, мы рядом.',
    countries: 'Стран',
    offices: 'Офисов',
    professionals: 'Специалистов',
    employees: 'Сотрудники',
    clients: 'Клиенты',
    revenue: 'Доход',
    ourJourney: 'Наш Путь',
    globalRecognition: 'Мировое Признание',
    exploreRegion: 'Исследовать Регион',
    viewAll: 'Все Офисы',
    northAmerica: 'Северная Америка',
    europe: 'Европа',
    asiaPacific: 'Азиатско-Тихоокеанский регион',
    middleEastAfrica: 'Ближний Восток и Африка',
    latinAmerica: 'Латинская Америка',
    founded: 'Основана в Нью-Йорке',
    expandedEurope: 'Расширение в Европу и Азию',
    reached50: 'Достигли 50 стран',
    launchedLabs: 'Запуск инновационных лабораторий по всему миру',
    digitalTransform: 'Лидерство в цифровой трансформации',
    globalLeader: '150+ стран, 25 000+ специалистов',
    bestConsulting: 'Лучшая Консалтинговая Фирма',
    innovationLeader: 'Лидер Инноваций',
    topEmployer: 'Лучший Работодатель',
    techPioneer: 'Технологический Пионер',
    liveActivity: 'Активность в реальном времени',
    projectsActive: 'Активные проекты',
    teamMembers: 'Участники команды онлайн',
    clientMeetings: 'Встречи с клиентами сегодня',
  },
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ''));
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericEnd));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-violet-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

// Interactive Globe Component
const InteractiveGlobe = ({ activeRegion, onRegionClick, t }) => {
  const markers = [
    { id: 0, top: '30%', left: '20%', region: 'northAmerica' },
    { id: 1, top: '28%', left: '45%', region: 'europe' },
    { id: 2, top: '35%', left: '72%', region: 'asiaPacific' },
    { id: 3, top: '50%', left: '55%', region: 'middleEastAfrica' },
    { id: 4, top: '65%', left: '30%', region: 'latinAmerica' },
  ];

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-violet-950/20 to-zinc-900 border border-white/5">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing Orb Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl" />

      {/* World Map Outline - Simplified SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg viewBox="0 0 1000 500" className="w-4/5 h-auto">
          <path
            d="M150,120 Q180,100 220,110 Q260,120 280,140 Q300,160 290,180 Q280,200 250,210 Q220,220 190,200 Q160,180 150,150 Q140,130 150,120
               M450,80 Q500,60 550,70 Q600,80 620,120 Q640,160 620,200 Q600,240 550,250 Q500,260 460,230 Q420,200 430,150 Q440,100 450,80
               M700,100 Q750,80 800,90 Q850,100 880,140 Q910,180 890,220 Q870,260 820,280 Q770,300 720,270 Q670,240 680,190 Q690,140 700,100
               M200,280 Q240,260 280,270 Q320,280 340,310 Q360,340 340,370 Q320,400 280,410 Q240,420 210,390 Q180,360 190,320 Q200,290 200,280
               M550,320 Q590,300 630,310 Q670,320 690,350 Q710,380 690,410 Q670,440 630,450 Q590,460 560,430 Q530,400 540,360 Q550,330 550,320"
            fill="none"
            stroke="url(#mapGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Markers */}
      {markers.map((marker, idx) => (
        <button
          key={marker.id}
          onClick={() => onRegionClick(idx)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group transition-all duration-300 ${
            activeRegion === idx ? 'scale-150' : 'hover:scale-125'
          }`}
          style={{ top: marker.top, left: marker.left }}
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className={`absolute inset-0 w-8 h-8 -m-2 rounded-full animate-ping ${
              activeRegion === idx ? 'bg-fuchsia-500/50' : 'bg-violet-500/30'
            }`} />
            
            {/* Marker dot */}
            <div className={`relative w-4 h-4 rounded-full ${
              activeRegion === idx
                ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 shadow-lg shadow-fuchsia-500/50'
                : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30'
            }`} />
            
            {/* Tooltip */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-800/90 backdrop-blur-sm rounded-lg text-xs text-white whitespace-nowrap transition-all duration-300 ${
              activeRegion === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0'
            }`}>
              {t(marker.region)}
            </div>
          </div>
        </button>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        {activeRegion !== null && (
          <>
            <line x1="50%" y1="50%" x2={markers[activeRegion]?.left} y2={markers[activeRegion]?.top} stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          </>
        )}
      </svg>

      {/* Stats Overlay */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-wrap gap-2 md:gap-4">
        {[
          { value: '150', suffix: '+', label: t('countries') },
          { value: '85', suffix: '+', label: t('offices') },
          { value: '25', suffix: 'K+', label: t('professionals') },
        ].map((stat, idx) => (
          <div key={idx} className="flex-1 min-w-[80px] bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl">
            <div className="text-xl md:text-3xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[10px] md:text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Region Card Component
const RegionCard = ({ region, index, isSelected, onClick, t, isRTL }) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`group relative overflow-hidden cursor-pointer rounded-2xl md:rounded-3xl transition-all duration-500 ${
        isSelected ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-black' : ''
      }`}
    >
      {/* Background Image */}
      <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden">
        <img 
          src={region.image}
          alt={t(region.nameKey)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className={`absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs md:text-sm font-medium text-white/80">{region.offices.length} {t('offices')}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{t(region.nameKey)}</h3>
        </div>

        {/* Stats - Always visible on mobile, hover on desktop */}
        <div className={`transition-all duration-500 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0`}>
          <div className="space-y-1 md:space-y-2 text-xs md:text-sm mb-3 md:mb-4">
            <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/70">{t('employees')}</span>
              <span className="font-bold">{region.employees}</span>
            </div>
            <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/70">{t('clients')}</span>
              <span className="font-bold">{region.clients}</span>
            </div>
            <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/70">{t('revenue')}</span>
              <span className="font-bold">{region.revenue}</span>
            </div>
          </div>
          
          {/* Office List */}
          <div className="hidden md:block text-xs space-y-1 max-h-24 overflow-hidden">
            {region.offices.slice(0, 4).map((office, idx) => (
              <div key={idx} className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-1 h-1 bg-white rounded-full flex-shrink-0" />
                <span className="truncate">{office}</span>
              </div>
            ))}
            {region.offices.length > 4 && (
              <div className="text-white/60">+{region.offices.length - 4} more</div>
            )}
          </div>
        </div>

        {/* Explore Button */}
        <button className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30`}>
          <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// Live Activity Component
const LiveActivity = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activities, setActivities] = useState([
    { type: 'project', value: 847, change: '+12' },
    { type: 'team', value: 3421, change: '+89' },
    { type: 'meeting', value: 156, change: '+23' },
  ]);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActivities(prev => prev.map(a => ({
        ...a,
        value: a.value + Math.floor(Math.random() * 5),
        change: `+${Math.floor(Math.random() * 20) + 1}`
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white">{t('liveActivity')}</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4 text-gray-400" /> : <Play className="w-4 h-4 text-gray-400" />}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {[
          { label: t('projectsActive'), ...activities[0] },
          { label: t('teamMembers'), ...activities[1] },
          { label: t('clientMeetings'), ...activities[2] },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-lg md:text-2xl font-bold text-white mb-1">
              {item.value.toLocaleString()}
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 mb-1">{item.label}</div>
            <div className="text-[10px] md:text-xs text-green-400 flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Timeline Component
const Timeline = ({ milestones, t, isRTL }) => {
  return (
    <div className="relative py-8 md:py-12">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500 md:-translate-x-1/2" />
      
      {milestones.map((milestone, index) => (
        <div key={index} className={`relative flex items-center mb-8 md:mb-12 ${
          isRTL ? 'flex-row-reverse' : ''
        } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Content */}
          <div className={`ml-12 md:ml-0 md:w-1/2 ${
            index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
          } ${isRTL ? 'text-right' : 'text-left md:text-inherit'}`}>
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="text-violet-400 font-bold text-lg md:text-xl mb-2 group-hover:text-fuchsia-400 transition-colors">
                {milestone.year}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{t(milestone.eventKey)}</div>
            </div>
          </div>

          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full z-10 ring-4 ring-black" />

          {/* Spacer for desktop layout */}
          <div className="hidden md:block md:w-1/2" />
        </div>
      ))}
    </div>
  );
};

// Award Card Component
const AwardCard = ({ award, t, isRTL }) => {
  return (
    <div className="group relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-fuchsia-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Award className="w-6 h-6 md:w-8 md:h-8 text-violet-400 group-hover:text-fuchsia-400 transition-colors" />
        </div>
        <div className={`font-bold text-white text-sm md:text-base mb-1 ${isRTL ? 'text-right' : 'text-center'}`}>
          {t(award.awardKey)}
        </div>
        <div className={`text-xs md:text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-center'}`}>{award.org}</div>
        <div className={`text-xs text-violet-400 mt-1 md:mt-2 ${isRTL ? 'text-right' : 'text-center'}`}>{award.year}</div>
      </div>
    </div>
  );
};

// Main Component
const GlobalPresenceSection = () => {
  const { t: globalT, currentLanguage, isRTL } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const sectionRef = useRef(null);

  // Local translation function that combines global and local translations
  const t = (key) => {
    const localTranslations = globalPresenceTranslations[currentLanguage] || globalPresenceTranslations.en;
    return localTranslations[key] || globalT(key) || key;
  };

  const regions = [
    {
      nameKey: 'northAmerica',
      offices: ['New York', 'San Francisco', 'Toronto', 'Chicago', 'Austin', 'Seattle', 'Boston'],
      employees: '8,500+',
      clients: '450+',
      revenue: '$18B',
      color: 'from-blue-600/90 to-cyan-600/90',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80'
    },
    {
      nameKey: 'europe',
      offices: ['London', 'Paris', 'Frankfurt', 'Amsterdam', 'Zurich', 'Dublin', 'Stockholm'],
      employees: '6,200+',
      clients: '380+',
      revenue: '$14B',
      color: 'from-purple-600/90 to-indigo-600/90',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80'
    },
    {
      nameKey: 'asiaPacific',
      offices: ['Singapore', 'Tokyo', 'Hong Kong', 'Sydney', 'Mumbai', 'Shanghai', 'Seoul'],
      employees: '7,800+',
      clients: '520+',
      revenue: '$16B',
      color: 'from-orange-600/90 to-red-600/90',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
    },
    {
      nameKey: 'middleEastAfrica',
      offices: ['Dubai', 'Riyadh', 'Johannesburg', 'Cairo', 'Lagos', 'Tel Aviv', 'Nairobi'],
      employees: '2,800+',
      clients: '180+',
      revenue: '$6B',
      color: 'from-amber-600/90 to-orange-600/90',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
    },
    {
      nameKey: 'latinAmerica',
      offices: ['São Paulo', 'Mexico City', 'Buenos Aires', 'Santiago', 'Bogotá', 'Lima', 'Montevideo'],
      employees: '3,200+',
      clients: '210+',
      revenue: '$7B',
      color: 'from-emerald-600/90 to-teal-600/90',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80'
    }
  ];

  const milestones = [
    { year: '1995', eventKey: 'founded' },
    { year: '2000', eventKey: 'expandedEurope' },
    { year: '2010', eventKey: 'reached50' },
    { year: '2015', eventKey: 'launchedLabs' },
    { year: '2020', eventKey: 'digitalTransform' },
    { year: '2025', eventKey: 'globalLeader' }
  ];

  const awards = [
    { awardKey: 'bestConsulting', org: 'Fortune 500', year: '2025' },
    { awardKey: 'innovationLeader', org: 'Fast Company', year: '2024' },
    { awardKey: 'topEmployer', org: 'Great Place to Work', year: '2025' },
    { awardKey: 'techPioneer', org: 'World Economic Forum', year: '2023' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 ${isRTL ? 'text-right md:text-center' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Globe className="w-4 h-4 text-violet-400" />
            <span className="text-xs md:text-sm font-medium tracking-wider text-violet-400 uppercase">
              {t('globalReach')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
            {t('worldwideExcellence')}{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t('excellence')}
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            {t('globalDescription')}
          </p>
        </div>

        {/* Interactive Globe Map */}
        <div className="mb-12 md:mb-20">
          <InteractiveGlobe 
            activeRegion={selectedRegion} 
            onRegionClick={setSelectedRegion}
            t={t}
          />
        </div>

        {/* Live Activity Widget */}
        <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
          <LiveActivity t={t} />
        </div>

        {/* Regional Cards */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {regions.map((region, index) => (
              <RegionCard
                key={index}
                region={region}
                index={index}
                isSelected={selectedRegion === index}
                onClick={setSelectedRegion}
                t={t}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mb-16 md:mb-24">
          <button className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25">
            <Building className="w-5 h-5" />
            <span>{t('viewAll')}</span>
            <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        {/* Timeline Section */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-white flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />
              {t('ourJourney')}
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-fuchsia-400" />
            </h3>
          </div>
          
          <Timeline milestones={milestones} t={t} isRTL={isRTL} />
        </div>

        {/* Awards Section */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-white">
              {t('globalRecognition')}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {awards.map((award, idx) => (
              <AwardCard key={idx} award={award} t={t} isRTL={isRTL} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalPresenceSection;