import React, { useState, useEffect, useCallback } from 'react';
import { Play, ArrowRight, Sparkles, Zap, Globe, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Hero translations
const heroTranslations = {
  en: {
    tagline: 'Welcome to the Future',
    slide1Title: 'Global Innovation',
    slide1Highlight: 'Leaders',
    slide1Subtitle: 'Transforming industries through technology, strategy, and excellence',
    slide2Title: 'Strategic',
    slide2Highlight: 'Consulting',
    slide2Subtitle: 'Expert guidance for digital transformation and business optimization',
    slide3Title: 'Enterprise',
    slide3Highlight: 'Solutions',
    slide3Subtitle: 'Scalable technology platforms for multinational corporations',
    slide4Title: 'Talent &',
    slide4Highlight: 'Advisory',
    slide4Subtitle: 'Building exceptional teams and cultivating organizational excellence',
    slide5Title: 'Research &',
    slide5Highlight: 'Analytics',
    slide5Subtitle: 'Data-driven insights powering strategic decision making',
    exploreSolutions: 'Explore Solutions',
    watchStory: 'Watch Story',
    countriesServed: 'Countries Served',
    clientValue: 'Client Value',
    professionals: 'Professionals',
    scrollDown: 'SCROLL',
  },
  zh: {
    tagline: '欢迎来到未来',
    slide1Title: '全球创新',
    slide1Highlight: '领导者',
    slide1Subtitle: '通过技术、战略和卓越转变行业',
    slide2Title: '战略',
    slide2Highlight: '咨询',
    slide2Subtitle: '数字化转型和业务优化的专家指导',
    slide3Title: '企业',
    slide3Highlight: '解决方案',
    slide3Subtitle: '面向跨国公司的可扩展技术平台',
    slide4Title: '人才与',
    slide4Highlight: '咨询',
    slide4Subtitle: '打造卓越团队，培养组织卓越性',
    slide5Title: '研究与',
    slide5Highlight: '分析',
    slide5Subtitle: '数据驱动的洞察力支持战略决策',
    exploreSolutions: '探索解决方案',
    watchStory: '观看故事',
    countriesServed: '服务国家',
    clientValue: '客户价值',
    professionals: '专业人员',
    scrollDown: '向下滚动',
  },
  ja: {
    tagline: '未来へようこそ',
    slide1Title: 'グローバルイノベーション',
    slide1Highlight: 'リーダー',
    slide1Subtitle: 'テクノロジー、戦略、卓越性を通じて産業を変革',
    slide2Title: '戦略的',
    slide2Highlight: 'コンサルティング',
    slide2Subtitle: 'デジタル変革とビジネス最適化の専門家によるガイダンス',
    slide3Title: 'エンタープライズ',
    slide3Highlight: 'ソリューション',
    slide3Subtitle: '多国籍企業向けのスケーラブルな技術プラットフォーム',
    slide4Title: 'タレント＆',
    slide4Highlight: 'アドバイザリー',
    slide4Subtitle: '優れたチームを構築し、組織の卓越性を育成',
    slide5Title: 'リサーチ＆',
    slide5Highlight: 'アナリティクス',
    slide5Subtitle: '戦略的意思決定を支えるデータドリブンな洞察',
    exploreSolutions: 'ソリューションを探る',
    watchStory: 'ストーリーを見る',
    countriesServed: '対応国',
    clientValue: 'クライアント価値',
    professionals: '専門家',
    scrollDown: 'スクロール',
  },
  ko: {
    tagline: '미래에 오신 것을 환영합니다',
    slide1Title: '글로벌 혁신',
    slide1Highlight: '리더',
    slide1Subtitle: '기술, 전략 및 우수성을 통해 산업을 혁신',
    slide2Title: '전략적',
    slide2Highlight: '컨설팅',
    slide2Subtitle: '디지털 전환 및 비즈니스 최적화를 위한 전문가 지침',
    slide3Title: '엔터프라이즈',
    slide3Highlight: '솔루션',
    slide3Subtitle: '다국적 기업을 위한 확장 가능한 기술 플랫폼',
    slide4Title: '인재 &',
    slide4Highlight: '자문',
    slide4Subtitle: '뛰어난 팀 구축 및 조직 우수성 육성',
    slide5Title: '리서치 &',
    slide5Highlight: '분석',
    slide5Subtitle: '전략적 의사결정을 지원하는 데이터 기반 인사이트',
    exploreSolutions: '솔루션 탐색',
    watchStory: '스토리 보기',
    countriesServed: '서비스 국가',
    clientValue: '고객 가치',
    professionals: '전문가',
    scrollDown: '스크롤',
  },
  hi: {
    tagline: 'भविष्य में आपका स्वागत है',
    slide1Title: 'वैश्विक नवाचार',
    slide1Highlight: 'नेता',
    slide1Subtitle: 'प्रौद्योगिकी, रणनीति और उत्कृष्टता के माध्यम से उद्योगों को बदलना',
    slide2Title: 'रणनीतिक',
    slide2Highlight: 'परामर्श',
    slide2Subtitle: 'डिजिटल परिवर्तन और व्यापार अनुकूलन के लिए विशेषज्ञ मार्गदर्शन',
    slide3Title: 'एंटरप्राइज',
    slide3Highlight: 'समाधान',
    slide3Subtitle: 'बहुराष्ट्रीय निगमों के लिए स्केलेबल प्रौद्योगिकी प्लेटफॉर्म',
    slide4Title: 'प्रतिभा और',
    slide4Highlight: 'सलाहकार',
    slide4Subtitle: 'असाधारण टीमों का निर्माण और संगठनात्मक उत्कृष्टता का पोषण',
    slide5Title: 'अनुसंधान और',
    slide5Highlight: 'विश्लेषण',
    slide5Subtitle: 'रणनीतिक निर्णय लेने को शक्ति देने वाली डेटा-संचालित अंतर्दृष्टि',
    exploreSolutions: 'समाधान खोजें',
    watchStory: 'कहानी देखें',
    countriesServed: 'सेवित देश',
    clientValue: 'ग्राहक मूल्य',
    professionals: 'पेशेवर',
    scrollDown: 'नीचे स्क्रॉल करें',
  },
  ar: {
    tagline: 'مرحباً بكم في المستقبل',
    slide1Title: 'الابتكار العالمي',
    slide1Highlight: 'القادة',
    slide1Subtitle: 'تحويل الصناعات من خلال التكنولوجيا والاستراتيجية والتميز',
    slide2Title: 'الاستشارات',
    slide2Highlight: 'الاستراتيجية',
    slide2Subtitle: 'إرشادات خبراء للتحول الرقمي وتحسين الأعمال',
    slide3Title: 'حلول',
    slide3Highlight: 'المؤسسات',
    slide3Subtitle: 'منصات تقنية قابلة للتطوير للشركات متعددة الجنسيات',
    slide4Title: 'المواهب',
    slide4Highlight: 'والاستشارات',
    slide4Subtitle: 'بناء فرق استثنائية وتنمية التميز المؤسسي',
    slide5Title: 'البحث',
    slide5Highlight: 'والتحليلات',
    slide5Subtitle: 'رؤى مدفوعة بالبيانات تدعم اتخاذ القرارات الاستراتيجية',
    exploreSolutions: 'استكشف الحلول',
    watchStory: 'شاهد القصة',
    countriesServed: 'الدول المخدومة',
    clientValue: 'قيمة العملاء',
    professionals: 'المحترفون',
    scrollDown: 'مرر للأسفل',
  },
  de: {
    tagline: 'Willkommen in der Zukunft',
    slide1Title: 'Globale Innovation',
    slide1Highlight: 'Führend',
    slide1Subtitle: 'Branchen durch Technologie, Strategie und Exzellenz transformieren',
    slide2Title: 'Strategische',
    slide2Highlight: 'Beratung',
    slide2Subtitle: 'Expertenführung für digitale Transformation und Geschäftsoptimierung',
    slide3Title: 'Enterprise',
    slide3Highlight: 'Lösungen',
    slide3Subtitle: 'Skalierbare Technologieplattformen für multinationale Unternehmen',
    slide4Title: 'Talent &',
    slide4Highlight: 'Advisory',
    slide4Subtitle: 'Aufbau außergewöhnlicher Teams und Förderung organisatorischer Exzellenz',
    slide5Title: 'Forschung &',
    slide5Highlight: 'Analytik',
    slide5Subtitle: 'Datengesteuerte Erkenntnisse für strategische Entscheidungen',
    exploreSolutions: 'Lösungen erkunden',
    watchStory: 'Story ansehen',
    countriesServed: 'Länder bedient',
    clientValue: 'Kundenwert',
    professionals: 'Fachleute',
    scrollDown: 'SCROLLEN',
  },
  fr: {
    tagline: 'Bienvenue dans le Futur',
    slide1Title: 'Innovation Globale',
    slide1Highlight: 'Leaders',
    slide1Subtitle: 'Transformer les industries par la technologie, la stratégie et l\'excellence',
    slide2Title: 'Conseil',
    slide2Highlight: 'Stratégique',
    slide2Subtitle: 'Accompagnement expert pour la transformation digitale et l\'optimisation business',
    slide3Title: 'Solutions',
    slide3Highlight: 'Entreprise',
    slide3Subtitle: 'Plateformes technologiques évolutives pour les multinationales',
    slide4Title: 'Talents &',
    slide4Highlight: 'Advisory',
    slide4Subtitle: 'Construire des équipes exceptionnelles et cultiver l\'excellence organisationnelle',
    slide5Title: 'Recherche &',
    slide5Highlight: 'Analytics',
    slide5Subtitle: 'Insights data-driven pour la prise de décision stratégique',
    exploreSolutions: 'Explorer les Solutions',
    watchStory: 'Voir l\'Histoire',
    countriesServed: 'Pays Servis',
    clientValue: 'Valeur Client',
    professionals: 'Professionnels',
    scrollDown: 'DÉFILER',
  },
  es: {
    tagline: 'Bienvenido al Futuro',
    slide1Title: 'Innovación Global',
    slide1Highlight: 'Líderes',
    slide1Subtitle: 'Transformando industrias a través de tecnología, estrategia y excelencia',
    slide2Title: 'Consultoría',
    slide2Highlight: 'Estratégica',
    slide2Subtitle: 'Orientación experta para transformación digital y optimización empresarial',
    slide3Title: 'Soluciones',
    slide3Highlight: 'Empresariales',
    slide3Subtitle: 'Plataformas tecnológicas escalables para corporaciones multinacionales',
    slide4Title: 'Talento &',
    slide4Highlight: 'Asesoría',
    slide4Subtitle: 'Construyendo equipos excepcionales y cultivando la excelencia organizacional',
    slide5Title: 'Investigación &',
    slide5Highlight: 'Analítica',
    slide5Subtitle: 'Insights basados en datos para la toma de decisiones estratégicas',
    exploreSolutions: 'Explorar Soluciones',
    watchStory: 'Ver Historia',
    countriesServed: 'Países Atendidos',
    clientValue: 'Valor del Cliente',
    professionals: 'Profesionales',
    scrollDown: 'DESPLAZAR',
  },
  pt: {
    tagline: 'Bem-vindo ao Futuro',
    slide1Title: 'Inovação Global',
    slide1Highlight: 'Líderes',
    slide1Subtitle: 'Transformando indústrias através de tecnologia, estratégia e excelência',
    slide2Title: 'Consultoria',
    slide2Highlight: 'Estratégica',
    slide2Subtitle: 'Orientação especializada para transformação digital e otimização de negócios',
    slide3Title: 'Soluções',
    slide3Highlight: 'Empresariais',
    slide3Subtitle: 'Plataformas tecnológicas escaláveis para corporações multinacionais',
    slide4Title: 'Talentos &',
    slide4Highlight: 'Assessoria',
    slide4Subtitle: 'Construindo equipes excepcionais e cultivando excelência organizacional',
    slide5Title: 'Pesquisa &',
    slide5Highlight: 'Analytics',
    slide5Subtitle: 'Insights baseados em dados impulsionando decisões estratégicas',
    exploreSolutions: 'Explorar Soluções',
    watchStory: 'Assistir História',
    countriesServed: 'Países Atendidos',
    clientValue: 'Valor do Cliente',
    professionals: 'Profissionais',
    scrollDown: 'ROLAR',
  },
  ru: {
    tagline: 'Добро пожаловать в будущее',
    slide1Title: 'Глобальные инновации',
    slide1Highlight: 'Лидеры',
    slide1Subtitle: 'Трансформация отраслей через технологии, стратегию и совершенство',
    slide2Title: 'Стратегический',
    slide2Highlight: 'Консалтинг',
    slide2Subtitle: 'Экспертное руководство по цифровой трансформации и оптимизации бизнеса',
    slide3Title: 'Корпоративные',
    slide3Highlight: 'Решения',
    slide3Subtitle: 'Масштабируемые технологические платформы для транснациональных корпораций',
    slide4Title: 'Таланты и',
    slide4Highlight: 'Консультации',
    slide4Subtitle: 'Создание исключительных команд и развитие организационного совершенства',
    slide5Title: 'Исследования и',
    slide5Highlight: 'Аналитика',
    slide5Subtitle: 'Аналитика на основе данных для стратегических решений',
    exploreSolutions: 'Изучить решения',
    watchStory: 'Смотреть историю',
    countriesServed: 'Стран обслуживается',
    clientValue: 'Ценность клиентов',
    professionals: 'Профессионалы',
    scrollDown: 'ПРОКРУТКА',
  },
};

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-random"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${139 + Math.random() * 50}, 92, 246, ${0.2 + Math.random() * 0.3})`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
};

// Animated Grid Background
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0"/>
            <stop offset="50%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)"/>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#grid-mask)"/>
      </svg>
    </div>
  );
};

// Progress Ring Component
const ProgressRing = ({ progress, isActive }) => {
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-10 h-10 -rotate-90">
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
      {isActive && (
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
      )}
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#D946EF"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

// Main Hero Slider Component
const HeroSlider = () => {
  const { t: globalT, currentLanguage, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Local translation function
  const t = (key) => {
    const localTranslations = heroTranslations[currentLanguage] || heroTranslations.en;
    return localTranslations[key] || globalT(key) || key;
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      titleKey: 'slide1Title',
      highlightKey: 'slide1Highlight',
      subtitleKey: 'slide1Subtitle',
      icon: Globe,
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      titleKey: 'slide2Title',
      highlightKey: 'slide2Highlight',
      subtitleKey: 'slide2Subtitle',
      icon: Zap,
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      titleKey: 'slide3Title',
      highlightKey: 'slide3Highlight',
      subtitleKey: 'slide3Subtitle',
      icon: TrendingUp,
    },
    {
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80',
      titleKey: 'slide4Title',
      highlightKey: 'slide4Highlight',
      subtitleKey: 'slide4Subtitle',
      icon: Users,
    },
    {
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80',
      titleKey: 'slide5Title',
      highlightKey: 'slide5Highlight',
      subtitleKey: 'slide5Subtitle',
      icon: Sparkles,
    }
  ];

  const SLIDE_DURATION = 6000;

  // Auto-play and progress
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, currentSlide]);

  useEffect(() => {
    if (progress >= 100) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }
  }, [progress, slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(true);
  }, []);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-violet-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative h-full z-20">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 flex items-center transition-all duration-700 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className={`max-w-4xl ${isRTL ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
                  
                  {/* Tagline */}
                  <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''} ${
                    index === currentSlide && isLoaded ? 'animate-fade-in-up' : ''
                  }`} style={{ animationDelay: '0.1s' }}>
                    <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                    <span className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
                      {t('tagline')}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.9] ${
                    index === currentSlide && isLoaded ? 'animate-fade-in-up' : ''
                  }`} style={{ animationDelay: '0.2s' }}>
                    <span className="block">{t(slide.titleKey)}</span>
                    <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      {t(slide.highlightKey)}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 font-light max-w-2xl leading-relaxed ${
                    index === currentSlide && isLoaded ? 'animate-fade-in-up' : ''
                  }`} style={{ animationDelay: '0.3s' }}>
                    {t(slide.subtitleKey)}
                  </p>

                  {/* CTA Buttons */}
                  <div className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''} ${
                    index === currentSlide && isLoaded ? 'animate-fade-in-up' : ''
                  }`} style={{ animationDelay: '0.4s' }}>
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105">
                      <span className={`relative z-10 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {t('exploreSolutions')}
                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <button className="group relative px-8 py-4 border border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
                      <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="p-1 rounded-full bg-white/10 group-hover:bg-violet-500/20 transition-colors">
                          <Play className="w-4 h-4" fill="currentColor" />
                        </div>
                        {t('watchStory')}
                      </span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className={`grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-white/10 max-w-xl ${
                    index === currentSlide && isLoaded ? 'animate-fade-in-up' : ''
                  }`} style={{ animationDelay: '0.5s' }}>
                    {[
                      { value: '150+', label: t('countriesServed') },
                      { value: '$50B+', label: t('clientValue') },
                      { value: '25K+', label: t('professionals') },
                    ].map((stat, idx) => (
                      <div key={idx} className={isRTL ? 'text-right' : 'text-left'}>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Indicators with Progress */}
      <div className={`absolute bottom-8 md:bottom-12 ${isRTL ? 'right-6 md:right-12' : 'left-6 md:left-12'} z-30`}>
        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative flex items-center justify-center transition-all duration-300 ${
                  index === currentSlide ? 'scale-100' : 'scale-90 opacity-50 hover:opacity-75'
                }`}
              >
                <ProgressRing 
                  progress={index === currentSlide ? progress : 0} 
                  isActive={index === currentSlide}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className={`w-4 h-4 transition-colors ${
                    index === currentSlide ? 'text-violet-400' : 'text-white/50 group-hover:text-white/70'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Slide Counter */}
        <div className={`mt-4 text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 md:bottom-12 ${isRTL ? 'left-6 md:left-12' : 'right-6 md:right-12'} z-30 hidden md:flex flex-col items-center gap-3`}>
        <span className="text-xs font-medium tracking-widest text-gray-500 writing-vertical">
          {t('scrollDown')}
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-violet-500 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent animate-scroll-indicator" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translate(var(--tx, 100px), var(--ty, -100vh)) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float-random {
          --tx: ${Math.random() * 200 - 100}px;
          --ty: -100vh;
          animation: float-random linear infinite;
        }
        
        @keyframes scroll-indicator {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;