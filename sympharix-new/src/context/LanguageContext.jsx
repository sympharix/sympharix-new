import React, { createContext, useContext, useState, useEffect } from 'react';

// Comprehensive translations object
const translations = {
  en: {
    // Navigation
    exploreUs: 'Explore us',
    ourProducts: 'Our Products',
    whoWeAre: 'Who we are',
    ourIndustry: 'Our Industry',
    careers: 'Careers',
    connectWithUs: 'Connect with us',
    
    // UI Elements
    search: 'Search',
    searchPlaceholder: 'Search anything...',
    selectRegion: 'Select Region',
    close: 'Close',
    menu: 'Menu',
    
    // Common
    welcome: 'Welcome',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    viewAll: 'View All',
    readMore: 'Read More',
    submit: 'Submit',
    cancel: 'Cancel',
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved',
  },
  
  zh: {
    // Navigation - Chinese (Simplified)
    exploreUs: '探索我们',
    ourProducts: '我们的产品',
    whoWeAre: '关于我们',
    ourIndustry: '我们的行业',
    careers: '职业机会',
    connectWithUs: '联系我们',
    
    // UI Elements
    search: '搜索',
    searchPlaceholder: '搜索任何内容...',
    selectRegion: '选择地区',
    close: '关闭',
    menu: '菜单',
    
    // Common
    welcome: '欢迎',
    learnMore: '了解更多',
    getStarted: '开始使用',
    viewAll: '查看全部',
    readMore: '阅读更多',
    submit: '提交',
    cancel: '取消',
    
    // Footer
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    allRightsReserved: '版权所有',
  },
  
  ja: {
    // Navigation - Japanese
    exploreUs: '私たちを探る',
    ourProducts: '製品情報',
    whoWeAre: '会社概要',
    ourIndustry: '業界情報',
    careers: '採用情報',
    connectWithUs: 'お問い合わせ',
    
    // UI Elements
    search: '検索',
    searchPlaceholder: '何でも検索...',
    selectRegion: '地域を選択',
    close: '閉じる',
    menu: 'メニュー',
    
    // Common
    welcome: 'ようこそ',
    learnMore: '詳しく見る',
    getStarted: '始める',
    viewAll: 'すべて見る',
    readMore: '続きを読む',
    submit: '送信',
    cancel: 'キャンセル',
    
    // Footer
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    allRightsReserved: '全著作権所有',
  },
  
  ko: {
    // Navigation - Korean
    exploreUs: '우리를 탐색하세요',
    ourProducts: '제품 소개',
    whoWeAre: '회사 소개',
    ourIndustry: '산업 정보',
    careers: '채용 정보',
    connectWithUs: '문의하기',
    
    // UI Elements
    search: '검색',
    searchPlaceholder: '무엇이든 검색...',
    selectRegion: '지역 선택',
    close: '닫기',
    menu: '메뉴',
    
    // Common
    welcome: '환영합니다',
    learnMore: '더 알아보기',
    getStarted: '시작하기',
    viewAll: '모두 보기',
    readMore: '더 읽기',
    submit: '제출',
    cancel: '취소',
    
    // Footer
    privacyPolicy: '개인정보 처리방침',
    termsOfService: '서비스 약관',
    allRightsReserved: '모든 권리 보유',
  },
  
  hi: {
    // Navigation - Hindi
    exploreUs: 'हमें जानें',
    ourProducts: 'हमारे उत्पाद',
    whoWeAre: 'हम कौन हैं',
    ourIndustry: 'हमारा उद्योग',
    careers: 'करियर',
    connectWithUs: 'संपर्क करें',
    
    // UI Elements
    search: 'खोजें',
    searchPlaceholder: 'कुछ भी खोजें...',
    selectRegion: 'क्षेत्र चुनें',
    close: 'बंद करें',
    menu: 'मेन्यू',
    
    // Common
    welcome: 'स्वागत है',
    learnMore: 'और जानें',
    getStarted: 'शुरू करें',
    viewAll: 'सभी देखें',
    readMore: 'और पढ़ें',
    submit: 'जमा करें',
    cancel: 'रद्द करें',
    
    // Footer
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
  },
  
  ar: {
    // Navigation - Arabic
    exploreUs: 'استكشفنا',
    ourProducts: 'منتجاتنا',
    whoWeAre: 'من نحن',
    ourIndustry: 'صناعتنا',
    careers: 'الوظائف',
    connectWithUs: 'تواصل معنا',
    
    // UI Elements
    search: 'بحث',
    searchPlaceholder: 'ابحث عن أي شيء...',
    selectRegion: 'اختر المنطقة',
    close: 'إغلاق',
    menu: 'القائمة',
    
    // Common
    welcome: 'مرحباً',
    learnMore: 'اعرف المزيد',
    getStarted: 'ابدأ الآن',
    viewAll: 'عرض الكل',
    readMore: 'اقرأ المزيد',
    submit: 'إرسال',
    cancel: 'إلغاء',
    
    // Footer
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  
  de: {
    // Navigation - German
    exploreUs: 'Entdecken Sie uns',
    ourProducts: 'Unsere Produkte',
    whoWeAre: 'Wer wir sind',
    ourIndustry: 'Unsere Branche',
    careers: 'Karriere',
    connectWithUs: 'Kontakt',
    
    // UI Elements
    search: 'Suche',
    searchPlaceholder: 'Suche...',
    selectRegion: 'Region auswählen',
    close: 'Schließen',
    menu: 'Menü',
    
    // Common
    welcome: 'Willkommen',
    learnMore: 'Mehr erfahren',
    getStarted: 'Loslegen',
    viewAll: 'Alle anzeigen',
    readMore: 'Weiterlesen',
    submit: 'Absenden',
    cancel: 'Abbrechen',
    
    // Footer
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    allRightsReserved: 'Alle Rechte vorbehalten',
  },
  
  fr: {
    // Navigation - French
    exploreUs: 'Découvrez-nous',
    ourProducts: 'Nos Produits',
    whoWeAre: 'Qui sommes-nous',
    ourIndustry: 'Notre Industrie',
    careers: 'Carrières',
    connectWithUs: 'Contactez-nous',
    
    // UI Elements
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher...',
    selectRegion: 'Sélectionner la région',
    close: 'Fermer',
    menu: 'Menu',
    
    // Common
    welcome: 'Bienvenue',
    learnMore: 'En savoir plus',
    getStarted: 'Commencer',
    viewAll: 'Voir tout',
    readMore: 'Lire la suite',
    submit: 'Soumettre',
    cancel: 'Annuler',
    
    // Footer
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions d\'utilisation',
    allRightsReserved: 'Tous droits réservés',
  },
  
  es: {
    // Navigation - Spanish
    exploreUs: 'Explóranos',
    ourProducts: 'Nuestros Productos',
    whoWeAre: 'Quiénes Somos',
    ourIndustry: 'Nuestra Industria',
    careers: 'Carreras',
    connectWithUs: 'Contáctanos',
    
    // UI Elements
    search: 'Buscar',
    searchPlaceholder: 'Buscar...',
    selectRegion: 'Seleccionar región',
    close: 'Cerrar',
    menu: 'Menú',
    
    // Common
    welcome: 'Bienvenido',
    learnMore: 'Más información',
    getStarted: 'Empezar',
    viewAll: 'Ver todo',
    readMore: 'Leer más',
    submit: 'Enviar',
    cancel: 'Cancelar',
    
    // Footer
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    allRightsReserved: 'Todos los derechos reservados',
  },
  
  pt: {
    // Navigation - Portuguese
    exploreUs: 'Explore-nos',
    ourProducts: 'Nossos Produtos',
    whoWeAre: 'Quem Somos',
    ourIndustry: 'Nossa Indústria',
    careers: 'Carreiras',
    connectWithUs: 'Fale Conosco',
    
    // UI Elements
    search: 'Pesquisar',
    searchPlaceholder: 'Pesquisar...',
    selectRegion: 'Selecionar região',
    close: 'Fechar',
    menu: 'Menu',
    
    // Common
    welcome: 'Bem-vindo',
    learnMore: 'Saiba mais',
    getStarted: 'Começar',
    viewAll: 'Ver tudo',
    readMore: 'Leia mais',
    submit: 'Enviar',
    cancel: 'Cancelar',
    
    // Footer
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço',
    allRightsReserved: 'Todos os direitos reservados',
  },
  
  ru: {
    // Navigation - Russian
    exploreUs: 'Узнайте о нас',
    ourProducts: 'Наши продукты',
    whoWeAre: 'Кто мы',
    ourIndustry: 'Наша отрасль',
    careers: 'Карьера',
    connectWithUs: 'Связаться с нами',
    
    // UI Elements
    search: 'Поиск',
    searchPlaceholder: 'Искать...',
    selectRegion: 'Выбрать регион',
    close: 'Закрыть',
    menu: 'Меню',
    
    // Common
    welcome: 'Добро пожаловать',
    learnMore: 'Узнать больше',
    getStarted: 'Начать',
    viewAll: 'Смотреть все',
    readMore: 'Читать далее',
    submit: 'Отправить',
    cancel: 'Отмена',
    
    // Footer
    privacyPolicy: 'Политика конфиденциальности',
    termsOfService: 'Условия использования',
    allRightsReserved: 'Все права защищены',
  },
};

// Create Context
const LanguageContext = createContext();

// Custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentRegion, setCurrentRegion] = useState({
    name: 'India',
    code: 'IN',
    language: 'en',
    flag: '🇮🇳',
    currency: 'INR',
    direction: 'ltr',
  });
  const [isRTL, setIsRTL] = useState(false);

  // Regions with comprehensive data
  const regions = [
    { name: 'India', code: 'IN', language: 'en', flag: '🇮🇳', currency: 'INR', direction: 'ltr', nativeName: 'India' },
    { name: 'United States', code: 'US', language: 'en', flag: '🇺🇸', currency: 'USD', direction: 'ltr', nativeName: 'United States' },
    { name: 'United Kingdom', code: 'GB', language: 'en', flag: '🇬🇧', currency: 'GBP', direction: 'ltr', nativeName: 'United Kingdom' },
    { name: 'China', code: 'CN', language: 'zh', flag: '🇨🇳', currency: 'CNY', direction: 'ltr', nativeName: '中国' },
    { name: 'Japan', code: 'JP', language: 'ja', flag: '🇯🇵', currency: 'JPY', direction: 'ltr', nativeName: '日本' },
    { name: 'South Korea', code: 'KR', language: 'ko', flag: '🇰🇷', currency: 'KRW', direction: 'ltr', nativeName: '한국' },
    { name: 'Germany', code: 'DE', language: 'de', flag: '🇩🇪', currency: 'EUR', direction: 'ltr', nativeName: 'Deutschland' },
    { name: 'France', code: 'FR', language: 'fr', flag: '🇫🇷', currency: 'EUR', direction: 'ltr', nativeName: 'France' },
    { name: 'Spain', code: 'ES', language: 'es', flag: '🇪🇸', currency: 'EUR', direction: 'ltr', nativeName: 'España' },
    { name: 'Brazil', code: 'BR', language: 'pt', flag: '🇧🇷', currency: 'BRL', direction: 'ltr', nativeName: 'Brasil' },
    { name: 'Russia', code: 'RU', language: 'ru', flag: '🇷🇺', currency: 'RUB', direction: 'ltr', nativeName: 'Россия' },
    { name: 'Saudi Arabia', code: 'SA', language: 'ar', flag: '🇸🇦', currency: 'SAR', direction: 'rtl', nativeName: 'السعودية' },
    { name: 'UAE', code: 'AE', language: 'ar', flag: '🇦🇪', currency: 'AED', direction: 'rtl', nativeName: 'الإمارات' },
  ];

  // Translation function
  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  // Change region and language
  const changeRegion = (region) => {
    setCurrentRegion(region);
    setCurrentLanguage(region.language);
    setIsRTL(region.direction === 'rtl');
    
    // Update document direction for RTL languages
    document.documentElement.dir = region.direction;
    document.documentElement.lang = region.language;
    
    // Store preference
    localStorage.setItem('selectedRegion', JSON.stringify(region));
  };

  // Load saved preference on mount
  useEffect(() => {
    const savedRegion = localStorage.getItem('selectedRegion');
    if (savedRegion) {
      try {
        const region = JSON.parse(savedRegion);
        changeRegion(region);
      } catch (e) {
        console.error('Error loading saved region:', e);
      }
    }
  }, []);

  // Get all available languages
  const getAvailableLanguages = () => Object.keys(translations);

  const value = {
    currentLanguage,
    currentRegion,
    regions,
    isRTL,
    t,
    changeRegion,
    getAvailableLanguages,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;