import React, { useState, useRef, useEffect } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Users, 
  Globe2, 
  Building2, 
  LineChart, 
  Lightbulb, 
  Shield, 
  Rocket, 
  Network, 
  Coins,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Services translations
const servicesTranslations = {
  en: {
    whatWeDo: 'What We Do',
    enterprise: 'Enterprise',
    solutions: 'Solutions',
    sectionDescription: 'Comprehensive services spanning strategy, technology, operations, and beyond. Everything a modern enterprise needs to compete and win.',
    learnMore: 'Learn More',
    discussNeeds: 'Discuss Your Needs',
    customSolutions: 'Need something specific? We customize solutions for unique challenges.',
    viewAllServices: 'View All Services',
    // Service titles
    managementConsulting: 'Management Consulting',
    technologySolutions: 'Technology Solutions',
    financialAdvisory: 'Financial Advisory',
    talentHR: 'Talent & HR Services',
    globalOperations: 'Global Operations',
    dataAnalytics: 'Data & Analytics',
    riskCompliance: 'Risk & Compliance',
    innovationRD: 'Innovation & R&D',
    industrySolutions: 'Industry Solutions',
    digitalTransformation: 'Digital Transformation',
    ecosystemAlliances: 'Ecosystem & Alliances',
    sustainabilityESG: 'Sustainability & ESG',
    // Taglines
    strategyExecution: 'Strategy Meets Execution',
    innovationScale: 'Innovation at Scale',
    capitalGrowth: 'Capital. Strategy. Growth.',
    peopleStrategy: 'People Are Strategy',
    scaleWithoutBorders: 'Scale Without Borders',
    intelligenceDelivered: 'Intelligence Delivered',
    secureByDesign: 'Secure by Design',
    futureForward: 'Future Forward',
    sectorSpecialists: 'Sector Specialists',
    reimagineEverything: 'Reimagine Everything',
    connectedSuccess: 'Connected Success',
    profitPurpose: 'Profit Meets Purpose',
    // Descriptions
    desc1: 'End-to-end strategic advisory from market entry to operational excellence. We partner with C-suite executives to drive transformational change.',
    desc2: 'Custom software development, AI/ML integration, and enterprise technology platforms. Building the digital infrastructure of tomorrow.',
    desc3: 'M&A advisory, investment strategy, risk management, and financial restructuring. Navigating complexity with precision.',
    desc4: 'Executive search, organizational development, and HR transformation. Building high-performance cultures that win.',
    desc5: 'Supply chain optimization, international expansion, and operational excellence across continents. Local expertise, global reach.',
    desc6: 'Advanced analytics, predictive modeling, and business intelligence platforms. Turning data into competitive advantage.',
    desc7: 'Cybersecurity, regulatory compliance, and enterprise risk management. Protecting value in an uncertain world.',
    desc8: 'Product development, emerging tech labs, and innovation frameworks. Building what comes next.',
    desc9: 'Deep vertical expertise across healthcare, finance, manufacturing, energy, and retail. Domain knowledge that drives results.',
    desc10: 'Complete digital overhauls that reshape business models, customer experiences, and operational capabilities.',
    desc11: 'Strategic partnerships, vendor ecosystems, and collaborative networks. Building value through connection.',
    desc12: 'Environmental strategy, social impact programs, and governance frameworks. Creating sustainable value for all stakeholders.',
    // Features
    strategyDev: 'Strategy Development',
    perfImprovement: 'Performance Improvement',
    orgDesign: 'Organizational Design',
    changeMgmt: 'Change Management',
    customDev: 'Custom Development',
    aiAutomation: 'AI & Automation',
    cloudArch: 'Cloud Architecture',
    legacyMod: 'Legacy Modernization',
    maAdvisory: 'M&A Advisory',
    dueDiligence: 'Due Diligence',
    valuationServices: 'Valuation Services',
    riskAnalytics: 'Risk Analytics',
    execSearch: 'Executive Search',
    talentStrategy: 'Talent Strategy',
    leadershipDev: 'Leadership Development',
    cultureTransform: 'Culture Transformation',
    supplyChain: 'Supply Chain',
    globalExpansion: 'Global Expansion',
    processExcellence: 'Process Excellence',
    vendorMgmt: 'Vendor Management',
    advAnalytics: 'Advanced Analytics',
    biPlatforms: 'BI Platforms',
    predictiveModels: 'Predictive Models',
    dataStrategy: 'Data Strategy',
    cybersecurity: 'Cybersecurity',
    compliance: 'Compliance',
    riskAssessment: 'Risk Assessment',
    businessContinuity: 'Business Continuity',
    productDev: 'Product Development',
    innovationLabs: 'Innovation Labs',
    ipStrategy: 'IP Strategy',
    techScouting: 'Technology Scouting',
    healthcare: 'Healthcare',
    financialServices: 'Financial Services',
    manufacturing: 'Manufacturing',
    energyUtilities: 'Energy & Utilities',
    digitalStrategy: 'Digital Strategy',
    customerExp: 'Customer Experience',
    platformDesign: 'Platform Design',
    agileTransform: 'Agile Transformation',
    partnerStrategy: 'Partnership Strategy',
    allianceFormation: 'Alliance Formation',
    networkOptimization: 'Network Optimization',
    esgStrategy: 'ESG Strategy',
    carbonReduction: 'Carbon Reduction',
    socialImpact: 'Social Impact',
    sustainabilityReporting: 'Sustainability Reporting',
  },
  zh: {
    whatWeDo: '我们的服务',
    enterprise: '企业',
    solutions: '解决方案',
    sectionDescription: '涵盖战略、技术、运营等领域的综合服务。现代企业竞争获胜所需的一切。',
    learnMore: '了解更多',
    discussNeeds: '讨论您的需求',
    customSolutions: '需要特定服务？我们为独特挑战定制解决方案。',
    viewAllServices: '查看所有服务',
    managementConsulting: '管理咨询',
    technologySolutions: '技术解决方案',
    financialAdvisory: '财务咨询',
    talentHR: '人才与人力资源服务',
    globalOperations: '全球运营',
    dataAnalytics: '数据与分析',
    riskCompliance: '风险与合规',
    innovationRD: '创新与研发',
    industrySolutions: '行业解决方案',
    digitalTransformation: '数字化转型',
    ecosystemAlliances: '生态系统与联盟',
    sustainabilityESG: '可持续发展与ESG',
    strategyExecution: '战略与执行',
    innovationScale: '规模化创新',
    capitalGrowth: '资本·战略·增长',
    peopleStrategy: '人才即战略',
    scaleWithoutBorders: '无国界扩展',
    intelligenceDelivered: '智能交付',
    secureByDesign: '设计安全',
    futureForward: '面向未来',
    sectorSpecialists: '行业专家',
    reimagineEverything: '重新构想一切',
    connectedSuccess: '连接成功',
    profitPurpose: '利润与使命',
    desc1: '从市场进入到卓越运营的端到端战略咨询。我们与高管团队合作推动变革。',
    desc2: '定制软件开发、AI/ML集成和企业技术平台。构建未来的数字基础设施。',
    desc3: '并购咨询、投资策略、风险管理和财务重组。精准应对复杂挑战。',
    desc4: '高管猎头、组织发展和人力资源转型。打造高绩效文化。',
    desc5: '供应链优化、国际扩张和跨大陆卓越运营。本地专业知识，全球覆盖。',
    desc6: '高级分析、预测建模和商业智能平台。将数据转化为竞争优势。',
    desc7: '网络安全、法规合规和企业风险管理。在不确定的世界中保护价值。',
    desc8: '产品开发、新兴技术实验室和创新框架。构建未来。',
    desc9: '深厚的医疗、金融、制造、能源和零售垂直专业知识。驱动结果的领域知识。',
    desc10: '全面的数字化改造，重塑商业模式、客户体验和运营能力。',
    desc11: '战略合作伙伴关系、供应商生态系统和协作网络。通过连接创造价值。',
    desc12: '环境战略、社会影响计划和治理框架。为所有利益相关者创造可持续价值。',
    strategyDev: '战略发展',
    perfImprovement: '绩效改进',
    orgDesign: '组织设计',
    changeMgmt: '变革管理',
    customDev: '定制开发',
    aiAutomation: 'AI与自动化',
    cloudArch: '云架构',
    legacyMod: '遗留系统现代化',
    maAdvisory: '并购咨询',
    dueDiligence: '尽职调查',
    valuationServices: '估值服务',
    riskAnalytics: '风险分析',
    execSearch: '高管猎头',
    talentStrategy: '人才战略',
    leadershipDev: '领导力发展',
    cultureTransform: '文化转型',
    supplyChain: '供应链',
    globalExpansion: '全球扩张',
    processExcellence: '流程卓越',
    vendorMgmt: '供应商管理',
    advAnalytics: '高级分析',
    biPlatforms: 'BI平台',
    predictiveModels: '预测模型',
    dataStrategy: '数据战略',
    cybersecurity: '网络安全',
    compliance: '合规',
    riskAssessment: '风险评估',
    businessContinuity: '业务连续性',
    productDev: '产品开发',
    innovationLabs: '创新实验室',
    ipStrategy: '知识产权战略',
    techScouting: '技术侦察',
    healthcare: '医疗保健',
    financialServices: '金融服务',
    manufacturing: '制造业',
    energyUtilities: '能源与公用事业',
    digitalStrategy: '数字战略',
    customerExp: '客户体验',
    platformDesign: '平台设计',
    agileTransform: '敏捷转型',
    partnerStrategy: '合作伙伴战略',
    allianceFormation: '联盟形成',
    networkOptimization: '网络优化',
    esgStrategy: 'ESG战略',
    carbonReduction: '碳减排',
    socialImpact: '社会影响',
    sustainabilityReporting: '可持续发展报告',
  },
  ja: {
    whatWeDo: '私たちのサービス',
    enterprise: 'エンタープライズ',
    solutions: 'ソリューション',
    sectionDescription: '戦略、テクノロジー、オペレーションなどを網羅した包括的なサービス。現代企業が競争に勝つために必要なすべて。',
    learnMore: '詳しく見る',
    discussNeeds: 'ご相談ください',
    customSolutions: '特別なニーズがありますか？ユニークな課題に合わせてソリューションをカスタマイズします。',
    viewAllServices: 'すべてのサービスを見る',
    managementConsulting: '経営コンサルティング',
    technologySolutions: 'テクノロジーソリューション',
    financialAdvisory: '財務アドバイザリー',
    talentHR: 'タレント＆人事サービス',
    globalOperations: 'グローバルオペレーション',
    dataAnalytics: 'データ＆アナリティクス',
    riskCompliance: 'リスク＆コンプライアンス',
    innovationRD: 'イノベーション＆R&D',
    industrySolutions: '業界ソリューション',
    digitalTransformation: 'デジタルトランスフォーメーション',
    ecosystemAlliances: 'エコシステム＆アライアンス',
    sustainabilityESG: 'サステナビリティ＆ESG',
    strategyExecution: '戦略と実行',
    innovationScale: 'スケールでイノベーション',
    capitalGrowth: '資本・戦略・成長',
    peopleStrategy: '人材は戦略',
    scaleWithoutBorders: '国境なきスケール',
    intelligenceDelivered: 'インテリジェンス配信',
    secureByDesign: 'セキュアバイデザイン',
    futureForward: '未来志向',
    sectorSpecialists: 'セクタースペシャリスト',
    reimagineEverything: 'すべてを再構築',
    connectedSuccess: 'つながる成功',
    profitPurpose: '利益と目的',
    desc1: '市場参入からオペレーショナルエクセレンスまでのエンドツーエンドの戦略アドバイザリー。',
    desc2: 'カスタムソフトウェア開発、AI/ML統合、エンタープライズ技術プラットフォーム。',
    desc3: 'M&Aアドバイザリー、投資戦略、リスク管理、財務再構築。',
    desc4: 'エグゼクティブサーチ、組織開発、HR変革。',
    desc5: 'サプライチェーン最適化、国際展開、大陸を越えたオペレーショナルエクセレンス。',
    desc6: '高度なアナリティクス、予測モデリング、ビジネスインテリジェンスプラットフォーム。',
    desc7: 'サイバーセキュリティ、規制コンプライアンス、エンタープライズリスク管理。',
    desc8: '製品開発、新興技術ラボ、イノベーションフレームワーク。',
    desc9: 'ヘルスケア、金融、製造、エネルギー、小売における深い垂直専門知識。',
    desc10: 'ビジネスモデル、顧客体験、運用能力を再構築する完全なデジタル変革。',
    desc11: '戦略的パートナーシップ、ベンダーエコシステム、協力ネットワーク。',
    desc12: '環境戦略、社会的影響プログラム、ガバナンスフレームワーク。',
    strategyDev: '戦略開発',
    perfImprovement: 'パフォーマンス改善',
    orgDesign: '組織設計',
    changeMgmt: '変革管理',
    customDev: 'カスタム開発',
    aiAutomation: 'AI＆自動化',
    cloudArch: 'クラウドアーキテクチャ',
    legacyMod: 'レガシー近代化',
    maAdvisory: 'M&Aアドバイザリー',
    dueDiligence: 'デューデリジェンス',
    valuationServices: 'バリュエーションサービス',
    riskAnalytics: 'リスクアナリティクス',
    execSearch: 'エグゼクティブサーチ',
    talentStrategy: 'タレント戦略',
    leadershipDev: 'リーダーシップ開発',
    cultureTransform: 'カルチャー変革',
    supplyChain: 'サプライチェーン',
    globalExpansion: 'グローバル展開',
    processExcellence: 'プロセスエクセレンス',
    vendorMgmt: 'ベンダー管理',
    advAnalytics: '高度なアナリティクス',
    biPlatforms: 'BIプラットフォーム',
    predictiveModels: '予測モデル',
    dataStrategy: 'データ戦略',
    cybersecurity: 'サイバーセキュリティ',
    compliance: 'コンプライアンス',
    riskAssessment: 'リスク評価',
    businessContinuity: '事業継続',
    productDev: '製品開発',
    innovationLabs: 'イノベーションラボ',
    ipStrategy: 'IP戦略',
    techScouting: 'テクノロジースカウティング',
    healthcare: 'ヘルスケア',
    financialServices: '金融サービス',
    manufacturing: '製造業',
    energyUtilities: 'エネルギー＆ユーティリティ',
    digitalStrategy: 'デジタル戦略',
    customerExp: '顧客体験',
    platformDesign: 'プラットフォーム設計',
    agileTransform: 'アジャイル変革',
    partnerStrategy: 'パートナーシップ戦略',
    allianceFormation: 'アライアンス形成',
    networkOptimization: 'ネットワーク最適化',
    esgStrategy: 'ESG戦略',
    carbonReduction: '炭素削減',
    socialImpact: '社会的影響',
    sustainabilityReporting: 'サステナビリティ報告',
  },
  // Add more languages as needed - I'll include key ones
  ko: {
    whatWeDo: '우리의 서비스',
    enterprise: '엔터프라이즈',
    solutions: '솔루션',
    sectionDescription: '전략, 기술, 운영 등을 아우르는 종합 서비스. 현대 기업이 경쟁하고 승리하는 데 필요한 모든 것.',
    learnMore: '자세히 보기',
    discussNeeds: '상담하기',
    customSolutions: '특별한 요구 사항이 있으신가요? 고유한 과제에 맞는 솔루션을 제공합니다.',
    viewAllServices: '모든 서비스 보기',
    managementConsulting: '경영 컨설팅',
    technologySolutions: '기술 솔루션',
    financialAdvisory: '재무 자문',
    talentHR: '인재 및 HR 서비스',
    globalOperations: '글로벌 운영',
    dataAnalytics: '데이터 및 분석',
    riskCompliance: '리스크 및 컴플라이언스',
    innovationRD: '혁신 및 R&D',
    industrySolutions: '산업 솔루션',
    digitalTransformation: '디지털 전환',
    ecosystemAlliances: '에코시스템 및 제휴',
    sustainabilityESG: '지속가능성 및 ESG',
    strategyExecution: '전략과 실행',
    innovationScale: '규모의 혁신',
    capitalGrowth: '자본·전략·성장',
    peopleStrategy: '인재가 전략이다',
    scaleWithoutBorders: '국경 없는 확장',
    intelligenceDelivered: '인텔리전스 전달',
    secureByDesign: '설계에 의한 보안',
    futureForward: '미래 지향',
    sectorSpecialists: '섹터 전문가',
    reimagineEverything: '모든 것을 재구상',
    connectedSuccess: '연결된 성공',
    profitPurpose: '이익과 목적',
  },
  hi: {
    whatWeDo: 'हम क्या करते हैं',
    enterprise: 'एंटरप्राइज',
    solutions: 'समाधान',
    sectionDescription: 'रणनीति, प्रौद्योगिकी, संचालन और उससे परे व्यापक सेवाएं। एक आधुनिक उद्यम को प्रतिस्पर्धा और जीतने के लिए जो कुछ भी चाहिए।',
    learnMore: 'और जानें',
    discussNeeds: 'अपनी जरूरतों पर चर्चा करें',
    customSolutions: 'कुछ विशेष चाहिए? हम अद्वितीय चुनौतियों के लिए समाधान अनुकूलित करते हैं।',
    viewAllServices: 'सभी सेवाएं देखें',
    managementConsulting: 'प्रबंधन परामर्श',
    technologySolutions: 'प्रौद्योगिकी समाधान',
    financialAdvisory: 'वित्तीय सलाहकार',
    talentHR: 'प्रतिभा और एचआर सेवाएं',
  },
  ar: {
    whatWeDo: 'ما نقوم به',
    enterprise: 'حلول',
    solutions: 'المؤسسات',
    sectionDescription: 'خدمات شاملة تغطي الاستراتيجية والتكنولوجيا والعمليات وما بعدها. كل ما تحتاجه المؤسسة الحديثة للمنافسة والفوز.',
    learnMore: 'اعرف المزيد',
    discussNeeds: 'ناقش احتياجاتك',
    customSolutions: 'تحتاج شيئًا محددًا؟ نخصص الحلول للتحديات الفريدة.',
    viewAllServices: 'عرض جميع الخدمات',
    managementConsulting: 'الاستشارات الإدارية',
    technologySolutions: 'الحلول التقنية',
    financialAdvisory: 'الاستشارات المالية',
    talentHR: 'خدمات المواهب والموارد البشرية',
  },
  de: {
    whatWeDo: 'Was wir tun',
    enterprise: 'Enterprise',
    solutions: 'Lösungen',
    sectionDescription: 'Umfassende Dienstleistungen in den Bereichen Strategie, Technologie, Betrieb und darüber hinaus.',
    learnMore: 'Mehr erfahren',
    discussNeeds: 'Besprechen Sie Ihre Anforderungen',
    customSolutions: 'Brauchen Sie etwas Spezielles? Wir passen Lösungen für einzigartige Herausforderungen an.',
    viewAllServices: 'Alle Dienste anzeigen',
    managementConsulting: 'Managementberatung',
    technologySolutions: 'Technologielösungen',
    financialAdvisory: 'Finanzberatung',
    talentHR: 'Talent & HR Services',
  },
  fr: {
    whatWeDo: 'Ce que nous faisons',
    enterprise: 'Solutions',
    solutions: 'Entreprise',
    sectionDescription: 'Services complets couvrant la stratégie, la technologie, les opérations et au-delà.',
    learnMore: 'En savoir plus',
    discussNeeds: 'Discutez de vos besoins',
    customSolutions: 'Besoin de quelque chose de spécifique? Nous personnalisons les solutions.',
    viewAllServices: 'Voir tous les services',
    managementConsulting: 'Conseil en Management',
    technologySolutions: 'Solutions Technologiques',
    financialAdvisory: 'Conseil Financier',
    talentHR: 'Talents & RH',
  },
  es: {
    whatWeDo: 'Lo que hacemos',
    enterprise: 'Soluciones',
    solutions: 'Empresariales',
    sectionDescription: 'Servicios integrales que abarcan estrategia, tecnología, operaciones y más.',
    learnMore: 'Más información',
    discussNeeds: 'Discuta sus necesidades',
    customSolutions: '¿Necesita algo específico? Personalizamos soluciones para desafíos únicos.',
    viewAllServices: 'Ver todos los servicios',
    managementConsulting: 'Consultoría de Gestión',
    technologySolutions: 'Soluciones Tecnológicas',
    financialAdvisory: 'Asesoría Financiera',
    talentHR: 'Talento y RRHH',
  },
  pt: {
    whatWeDo: 'O que fazemos',
    enterprise: 'Soluções',
    solutions: 'Empresariais',
    sectionDescription: 'Serviços abrangentes que cobrem estratégia, tecnologia, operações e além.',
    learnMore: 'Saiba mais',
    discussNeeds: 'Discuta suas necessidades',
    customSolutions: 'Precisa de algo específico? Personalizamos soluções para desafios únicos.',
    viewAllServices: 'Ver todos os serviços',
    managementConsulting: 'Consultoria de Gestão',
    technologySolutions: 'Soluções Tecnológicas',
    financialAdvisory: 'Assessoria Financeira',
    talentHR: 'Talentos e RH',
  },
  ru: {
    whatWeDo: 'Что мы делаем',
    enterprise: 'Корпоративные',
    solutions: 'Решения',
    sectionDescription: 'Комплексные услуги в области стратегии, технологий, операций и не только.',
    learnMore: 'Узнать больше',
    discussNeeds: 'Обсудите ваши потребности',
    customSolutions: 'Нужно что-то особенное? Мы адаптируем решения под уникальные задачи.',
    viewAllServices: 'Все услуги',
    managementConsulting: 'Управленческий консалтинг',
    technologySolutions: 'Технологические решения',
    financialAdvisory: 'Финансовый консалтинг',
    talentHR: 'Таланты и HR',
  },
};

// Service Card Component
const ServiceCard = ({ service, index, isHovered, onHover, t, isRTL }) => {
  const Icon = service.icon;
  
  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <img 
          src={service.image} 
          alt="" 
          className="w-full h-full object-cover filter blur-sm"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className={`relative p-6 md:p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Icon */}
        <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
          <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
          {/* Icon Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
          {t(service.titleKey)}
        </h3>
        <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
          {t(service.taglineKey)}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
          {t(service.descKey)}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.featureKeys.slice(0, 4).map((featureKey, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
              <span>{t(featureKey)}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className={`flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-all group/btn ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span>{t('learnMore')}</span>
          <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
        </button>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      
      {/* Corner Accent */}
      <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
    </div>
  );
};

// Featured Service Card (larger)
const FeaturedServiceCard = ({ service, t, isRTL }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt="" 
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
      </div>

      {/* Content */}
      <div className={`relative p-8 md:p-12 flex flex-col h-full min-h-[400px] ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex-1">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {t(service.titleKey)}
          </h3>
          
          {/* Tagline */}
          <p className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
            {t(service.taglineKey)}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            {t(service.descKey)}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {service.featureKeys.map((featureKey, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
              <span>{t(featureKey)}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} rounded-full text-white font-semibold hover:shadow-lg transition-all group/btn ${isRTL ? 'flex-row-reverse self-end' : 'self-start'}`}>
          <span>{t('learnMore')}</span>
          <ArrowRight className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// Main Component
const ServicesSection = () => {
  const { t: globalT, currentLanguage, isRTL } = useLanguage();
  const [hoveredService, setHoveredService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const sectionRef = useRef(null);

  // Local translation function
  const t = (key) => {
    const localTranslations = servicesTranslations[currentLanguage] || servicesTranslations.en;
    return localTranslations[key] || globalT(key) || key;
  };

  const services = [
    {
      icon: Briefcase,
      titleKey: 'managementConsulting',
      taglineKey: 'strategyExecution',
      descKey: 'desc1',
      featureKeys: ['strategyDev', 'perfImprovement', 'orgDesign', 'changeMgmt'],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      icon: Cpu,
      titleKey: 'technologySolutions',
      taglineKey: 'innovationScale',
      descKey: 'desc2',
      featureKeys: ['customDev', 'aiAutomation', 'cloudArch', 'legacyMod'],
      color: 'from-violet-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    },
    {
      icon: TrendingUp,
      titleKey: 'financialAdvisory',
      taglineKey: 'capitalGrowth',
      descKey: 'desc3',
      featureKeys: ['maAdvisory', 'dueDiligence', 'valuationServices', 'riskAnalytics'],
      color: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      icon: Users,
      titleKey: 'talentHR',
      taglineKey: 'peopleStrategy',
      descKey: 'desc4',
      featureKeys: ['execSearch', 'talentStrategy', 'leadershipDev', 'cultureTransform'],
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
    },
    {
      icon: Globe2,
      titleKey: 'globalOperations',
      taglineKey: 'scaleWithoutBorders',
      descKey: 'desc5',
      featureKeys: ['supplyChain', 'globalExpansion', 'processExcellence', 'vendorMgmt'],
      color: 'from-orange-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
    },
    {
      icon: LineChart,
      titleKey: 'dataAnalytics',
      taglineKey: 'intelligenceDelivered',
      descKey: 'desc6',
      featureKeys: ['advAnalytics', 'biPlatforms', 'predictiveModels', 'dataStrategy'],
      color: 'from-fuchsia-500 to-violet-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      icon: Shield,
      titleKey: 'riskCompliance',
      taglineKey: 'secureByDesign',
      descKey: 'desc7',
      featureKeys: ['cybersecurity', 'compliance', 'riskAssessment', 'businessContinuity'],
      color: 'from-slate-500 to-gray-500',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      icon: Lightbulb,
      titleKey: 'innovationRD',
      taglineKey: 'futureForward',
      descKey: 'desc8',
      featureKeys: ['productDev', 'innovationLabs', 'ipStrategy', 'techScouting'],
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    },
    {
      icon: Building2,
      titleKey: 'industrySolutions',
      taglineKey: 'sectorSpecialists',
      descKey: 'desc9',
      featureKeys: ['healthcare', 'financialServices', 'manufacturing', 'energyUtilities'],
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    },
    {
      icon: Rocket,
      titleKey: 'digitalTransformation',
      taglineKey: 'reimagineEverything',
      descKey: 'desc10',
      featureKeys: ['digitalStrategy', 'customerExp', 'platformDesign', 'agileTransform'],
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      icon: Network,
      titleKey: 'ecosystemAlliances',
      taglineKey: 'connectedSuccess',
      descKey: 'desc11',
      featureKeys: ['partnerStrategy', 'vendorMgmt', 'allianceFormation', 'networkOptimization'],
      color: 'from-teal-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
    },
    {
      icon: Coins,
      titleKey: 'sustainabilityESG',
      taglineKey: 'profitPurpose',
      descKey: 'desc12',
      featureKeys: ['esgStrategy', 'carbonReduction', 'socialImpact', 'sustainabilityReporting'],
      color: 'from-lime-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    }
  ];

  const featuredServices = services.slice(0, 2);
  const regularServices = services.slice(2);
  const displayedServices = regularServices.slice(0, visibleCount);
  const hasMore = visibleCount < regularServices.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, regularServices.length));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 ${isRTL ? 'text-right md:text-center' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-xs md:text-sm font-medium tracking-wider text-violet-400 uppercase">
              {t('whatWeDo')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
            {t('enterprise')}{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t('solutions')}
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Featured Services (Top 2) */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {featuredServices.map((service, index) => (
            <FeaturedServiceCard
              key={index}
              service={service}
              t={t}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* Regular Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isHovered={hoveredService === index}
              onHover={setHoveredService}
              t={t}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900/50 border border-white/10 hover:border-violet-500/30 rounded-full text-white font-medium transition-all hover:bg-zinc-800/50"
            >
              <span>{t('viewAllServices')}</span>
              <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="max-w-xl mx-auto bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10 border border-white/5 rounded-3xl p-8 md:p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              {t('customSolutions')}
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105">
              <span>{t('discussNeeds')}</span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: '12+', label: 'Service Areas' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '150+', label: 'Expert Consultants' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center p-4 md:p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-violet-500/20 transition-colors"
            >
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;