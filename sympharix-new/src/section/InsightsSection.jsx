import React, { useState, useRef } from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  Video, 
  Podcast, 
  ArrowRight, 
  Sparkles,
  Clock,
  User,
  Mail,
  ChevronRight,
  Play,
  Headphones,
  FileText,
  Send,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Insights translations
const insightsTranslations = {
  en: {
    thoughtLeadership: 'Thought Leadership',
    insightsThat: 'Insights That',
    matter: 'Matter',
    sectionDescription: 'Research, analysis, and perspectives from our global team of experts. Shaping the conversation on business and technology.',
    readReport: 'Read Report',
    readArticle: 'Read Article',
    watchVideo: 'Watch Video',
    listenNow: 'Listen Now',
    minRead: 'min read',
    min: 'min',
    stayAhead: 'Stay Ahead of the Curve',
    newsletterDesc: 'Get our latest insights, research, and analysis delivered to your inbox. Join 50,000+ executives who trust our perspective.',
    enterEmail: 'Enter your email',
    subscribeNow: 'Subscribe Now',
    weeklyInsights: 'Weekly insights • No spam • Unsubscribe anytime',
    subscribed: 'Successfully subscribed!',
    viewAllInsights: 'View All Insights',
    featured: 'Featured',
    latest: 'Latest',
    trending: 'Trending',
    // Categories
    researchReport: 'Research Report',
    industryAnalysis: 'Industry Analysis',
    executiveInterview: 'Executive Interview',
    podcastEpisode: 'Podcast Episode',
    marketOutlook: 'Market Outlook',
    technologyReport: 'Technology Report',
    masterclass: 'Masterclass',
    // Titles
    featuredTitle: 'The Future of Enterprise AI: 2026 and Beyond',
    featuredExcerpt: 'Our comprehensive analysis of how artificial intelligence is reshaping business models, workforce dynamics, and competitive landscapes across industries.',
    insight1Title: 'Healthcare Digital Transformation: Lessons from Leading Systems',
    insight2Title: 'Navigating Market Volatility: A CFO Roundtable',
    insight3Title: 'The Talent Revolution: Rethinking Work in a Hybrid World',
    insight4Title: 'Emerging Markets: The Next Decade of Growth Opportunities',
    insight5Title: 'Quantum Computing: From Lab to Business Application',
    insight6Title: 'Strategic M&A: Building Value Through Integration',
    // Authors/Roles
    chiefResearchOfficer: 'Chief Research Officer',
    leadershipSeries: 'Leadership Series',
    transformPodcast: 'Transform Podcast',
    globalEconomicsTeam: 'Global Economics Team',
    innovationLab: 'Innovation Lab',
    expertWorkshop: 'Expert Workshop',
    // Tags
    ai: 'AI',
    digitalTransformation: 'Digital Transformation',
    strategy: 'Strategy',
  },
  zh: {
    thoughtLeadership: '思想领导力',
    insightsThat: '重要的',
    matter: '洞察',
    sectionDescription: '来自我们全球专家团队的研究、分析和观点。引领商业和技术话语。',
    readReport: '阅读报告',
    readArticle: '阅读文章',
    watchVideo: '观看视频',
    listenNow: '立即收听',
    minRead: '分钟阅读',
    min: '分钟',
    stayAhead: '保持领先',
    newsletterDesc: '将我们最新的见解、研究和分析发送到您的收件箱。加入50,000+信任我们观点的高管。',
    enterEmail: '输入您的邮箱',
    subscribeNow: '立即订阅',
    weeklyInsights: '每周洞察 • 无垃圾邮件 • 随时取消订阅',
    subscribed: '订阅成功！',
    viewAllInsights: '查看所有洞察',
    featured: '精选',
    latest: '最新',
    trending: '热门',
    researchReport: '研究报告',
    industryAnalysis: '行业分析',
    executiveInterview: '高管访谈',
    podcastEpisode: '播客节目',
    marketOutlook: '市场展望',
    technologyReport: '技术报告',
    masterclass: '大师课',
    featuredTitle: '企业AI的未来：2026年及以后',
    featuredExcerpt: '我们对人工智能如何重塑商业模式、劳动力动态和各行业竞争格局的全面分析。',
    insight1Title: '医疗数字化转型：领先系统的经验',
    insight2Title: '应对市场波动：CFO圆桌会议',
    insight3Title: '人才革命：重新思考混合工作世界',
    insight4Title: '新兴市场：未来十年的增长机遇',
    insight5Title: '量子计算：从实验室到商业应用',
    insight6Title: '战略并购：通过整合创造价值',
    chiefResearchOfficer: '首席研究官',
    leadershipSeries: '领导力系列',
    transformPodcast: '转型播客',
    globalEconomicsTeam: '全球经济团队',
    innovationLab: '创新实验室',
    expertWorkshop: '专家工作坊',
    ai: '人工智能',
    digitalTransformation: '数字化转型',
    strategy: '战略',
  },
  ja: {
    thoughtLeadership: 'ソートリーダーシップ',
    insightsThat: '重要な',
    matter: 'インサイト',
    sectionDescription: 'グローバル専門家チームによるリサーチ、分析、視点。ビジネスとテクノロジーの議論をリードします。',
    readReport: 'レポートを読む',
    readArticle: '記事を読む',
    watchVideo: '動画を見る',
    listenNow: '今すぐ聴く',
    minRead: '分で読める',
    min: '分',
    stayAhead: '一歩先を行く',
    newsletterDesc: '最新のインサイト、リサーチ、分析をお届けします。5万人以上のエグゼクティブが信頼しています。',
    enterEmail: 'メールアドレスを入力',
    subscribeNow: '今すぐ登録',
    weeklyInsights: '週刊インサイト • スパムなし • いつでも解除可能',
    subscribed: '登録完了！',
    viewAllInsights: 'すべてのインサイトを見る',
    featured: '注目',
    latest: '最新',
    trending: 'トレンド',
    researchReport: 'リサーチレポート',
    industryAnalysis: '業界分析',
    executiveInterview: 'エグゼクティブインタビュー',
    podcastEpisode: 'ポッドキャストエピソード',
    marketOutlook: '市場展望',
    technologyReport: 'テクノロジーレポート',
    masterclass: 'マスタークラス',
    featuredTitle: 'エンタープライズAIの未来：2026年以降',
    featuredExcerpt: 'AIがビジネスモデル、ワークフォースダイナミクス、業界全体の競争環境をどのように再構築しているかの包括的分析。',
    chiefResearchOfficer: '最高リサーチ責任者',
  },
  ko: {
    thoughtLeadership: '사고 리더십',
    insightsThat: '중요한',
    matter: '인사이트',
    sectionDescription: '글로벌 전문가 팀의 연구, 분석 및 관점. 비즈니스와 기술에 대한 대화를 이끕니다.',
    readReport: '보고서 읽기',
    readArticle: '기사 읽기',
    watchVideo: '비디오 보기',
    listenNow: '지금 듣기',
    minRead: '분 읽기',
    min: '분',
    stayAhead: '앞서 나가세요',
    newsletterDesc: '최신 인사이트, 연구 및 분석을 받아보세요. 5만 명 이상의 임원이 신뢰합니다.',
    enterEmail: '이메일 입력',
    subscribeNow: '지금 구독',
    weeklyInsights: '주간 인사이트 • 스팸 없음 • 언제든 구독 취소',
    subscribed: '구독 완료!',
    viewAllInsights: '모든 인사이트 보기',
  },
  hi: {
    thoughtLeadership: 'विचार नेतृत्व',
    insightsThat: 'महत्वपूर्ण',
    matter: 'अंतर्दृष्टि',
    sectionDescription: 'हमारी वैश्विक विशेषज्ञ टीम से अनुसंधान, विश्लेषण और दृष्टिकोण।',
    readReport: 'रिपोर्ट पढ़ें',
    readArticle: 'लेख पढ़ें',
    watchVideo: 'वीडियो देखें',
    listenNow: 'अभी सुनें',
    minRead: 'मिनट पढ़ें',
    min: 'मिनट',
    stayAhead: 'आगे रहें',
    newsletterDesc: 'हमारी नवीनतम जानकारी, अनुसंधान और विश्लेषण प्राप्त करें।',
    enterEmail: 'अपना ईमेल दर्ज करें',
    subscribeNow: 'अभी सदस्यता लें',
  },
  ar: {
    thoughtLeadership: 'قيادة الفكر',
    insightsThat: 'رؤى',
    matter: 'مهمة',
    sectionDescription: 'البحث والتحليل ووجهات النظر من فريق خبرائنا العالمي.',
    readReport: 'قراءة التقرير',
    readArticle: 'قراءة المقال',
    watchVideo: 'مشاهدة الفيديو',
    listenNow: 'استمع الآن',
    minRead: 'دقيقة قراءة',
    min: 'دقيقة',
    stayAhead: 'ابق في المقدمة',
    newsletterDesc: 'احصل على أحدث رؤانا وأبحاثنا وتحليلاتنا.',
    enterEmail: 'أدخل بريدك الإلكتروني',
    subscribeNow: 'اشترك الآن',
  },
  de: {
    thoughtLeadership: 'Thought Leadership',
    insightsThat: 'Insights die',
    matter: 'zählen',
    sectionDescription: 'Forschung, Analysen und Perspektiven von unserem globalen Expertenteam.',
    readReport: 'Bericht lesen',
    readArticle: 'Artikel lesen',
    watchVideo: 'Video ansehen',
    listenNow: 'Jetzt anhören',
    minRead: 'Min. Lesezeit',
    min: 'Min.',
    stayAhead: 'Bleiben Sie voraus',
    newsletterDesc: 'Erhalten Sie unsere neuesten Erkenntnisse, Forschungen und Analysen.',
    enterEmail: 'E-Mail eingeben',
    subscribeNow: 'Jetzt abonnieren',
  },
  fr: {
    thoughtLeadership: 'Leadership Éclairé',
    insightsThat: 'Des insights qui',
    matter: 'comptent',
    sectionDescription: 'Recherche, analyse et perspectives de notre équipe mondiale d\'experts.',
    readReport: 'Lire le rapport',
    readArticle: 'Lire l\'article',
    watchVideo: 'Voir la vidéo',
    listenNow: 'Écouter maintenant',
    minRead: 'min de lecture',
    min: 'min',
    stayAhead: 'Gardez une longueur d\'avance',
    newsletterDesc: 'Recevez nos dernières analyses et recherches.',
    enterEmail: 'Entrez votre email',
    subscribeNow: 'S\'abonner',
  },
  es: {
    thoughtLeadership: 'Liderazgo de Pensamiento',
    insightsThat: 'Insights que',
    matter: 'importan',
    sectionDescription: 'Investigación, análisis y perspectivas de nuestro equipo global de expertos.',
    readReport: 'Leer informe',
    readArticle: 'Leer artículo',
    watchVideo: 'Ver video',
    listenNow: 'Escuchar ahora',
    minRead: 'min de lectura',
    min: 'min',
    stayAhead: 'Mantente adelante',
    newsletterDesc: 'Recibe nuestros últimos insights, investigaciones y análisis.',
    enterEmail: 'Ingresa tu email',
    subscribeNow: 'Suscribirse',
  },
  pt: {
    thoughtLeadership: 'Liderança de Pensamento',
    insightsThat: 'Insights que',
    matter: 'importam',
    sectionDescription: 'Pesquisa, análise e perspectivas de nossa equipe global de especialistas.',
    readReport: 'Ler relatório',
    readArticle: 'Ler artigo',
    watchVideo: 'Assistir vídeo',
    listenNow: 'Ouvir agora',
    minRead: 'min de leitura',
    min: 'min',
    stayAhead: 'Fique à frente',
    newsletterDesc: 'Receba nossos insights, pesquisas e análises mais recentes.',
    enterEmail: 'Digite seu email',
    subscribeNow: 'Inscrever-se',
  },
  ru: {
    thoughtLeadership: 'Лидерство мысли',
    insightsThat: 'Инсайты которые',
    matter: 'важны',
    sectionDescription: 'Исследования, анализ и перспективы от нашей глобальной команды экспертов.',
    readReport: 'Читать отчёт',
    readArticle: 'Читать статью',
    watchVideo: 'Смотреть видео',
    listenNow: 'Слушать сейчас',
    minRead: 'мин чтения',
    min: 'мин',
    stayAhead: 'Будьте впереди',
    newsletterDesc: 'Получайте наши последние инсайты, исследования и аналитику.',
    enterEmail: 'Введите email',
    subscribeNow: 'Подписаться',
  },
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-violet-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
};

// Content Type Icon Component
const ContentTypeIcon = ({ type }) => {
  const icons = {
    article: FileText,
    video: Play,
    podcast: Headphones,
    report: BookOpen,
  };
  const Icon = icons[type] || FileText;
  return <Icon className="w-4 h-4" />;
};

// Featured Insight Card Component
const FeaturedInsightCard = ({ insight, t, isRTL }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
            <img 
              src={insight.image}
              alt={t(insight.titleKey)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-r" />
            
            {/* Category Badge */}
            <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold rounded-full">
                <Sparkles className="w-4 h-4" />
                {t('featured')}
              </span>
            </div>

            {/* Play Button for Video */}
            {insight.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={`p-8 lg:p-12 flex flex-col justify-between ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              {/* Category */}
              <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-sm font-medium text-violet-400">
                  {t(insight.categoryKey)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors leading-tight">
                {t(insight.titleKey)}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-base lg:text-lg mb-6 leading-relaxed">
                {t(insight.excerptKey)}
              </p>

              {/* Tags */}
              <div className={`flex flex-wrap gap-2 mb-8 ${isRTL ? 'justify-end' : ''}`}>
                {insight.tagKeys.map((tagKey, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium rounded-full hover:border-violet-500/30 transition-colors"
                  >
                    {t(tagKey)}
                  </span>
                ))}
              </div>
            </div>

            {/* Author & CTA */}
            <div className={`flex items-center justify-between flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src={insight.authorImage}
                  alt={insight.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/20"
                />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold text-white">{insight.author}</div>
                  <div className="text-sm text-gray-500">{t(insight.roleKey)}</div>
                </div>
              </div>
              
              <button className={`inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-all group/btn ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t('readReport')}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Regular Insight Card Component
const InsightCard = ({ insight, t, isRTL }) => {
  const getActionText = (type) => {
    switch (type) {
      case 'video': return t('watchVideo');
      case 'podcast': return t('listenNow');
      default: return t('readArticle');
    }
  };

  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={insight.image}
          alt={t(insight.titleKey)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
        
        {/* Type & Category Badge */}
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex items-center gap-2`}>
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
            <ContentTypeIcon type={insight.type} />
          </div>
          <span className="text-sm font-medium text-white/90">
            {t(insight.categoryKey)}
          </span>
        </div>

        {/* Play Button for Video */}
        {insight.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </div>
          </div>
        )}

        {/* Podcast Icon */}
        {insight.type === 'podcast' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {/* Duration Badge */}
        <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'}`}>
          <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80">
            <Clock className="w-3 h-3" />
            <span>{insight.readTime} {t('min')}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-violet-400 transition-colors leading-snug">
          {t(insight.titleKey)}
        </h3>
        
        <div className={`flex items-center justify-between text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <User className="w-4 h-4" />
            <span>{t(insight.authorKey)}</span>
          </div>
          <span className={`text-violet-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {getActionText(insight.type)}
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </span>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className={`h-1 bg-gradient-to-r ${insight.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

// Newsletter Component
const NewsletterSection = ({ t, isRTL }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-violet-600/20 border border-white/10 rounded-3xl p-8 md:p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletter-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletter-pattern)" />
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-600/30 rounded-full blur-3xl" />

      <div className={`relative z-10 text-center max-w-2xl mx-auto ${isRTL ? 'text-right md:text-center' : ''}`}>
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
          {t('stayAhead')}
        </h3>
        <p className="text-gray-300 mb-8 text-base md:text-lg">
          {t('newsletterDesc')}
        </p>

        {isSubscribed ? (
          <div className="flex items-center justify-center gap-3 text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-4 max-w-md mx-auto">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">{t('subscribed')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500`} />
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enterEmail')}
                className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-zinc-900/80 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all`}
                dir={isRTL ? 'rtl' : 'ltr'}
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{t('subscribeNow')}</span>
                  <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-4">
          {t('weeklyInsights')}
        </p>
      </div>
    </div>
  );
};

// Main Component
const InsightsSection = () => {
  const { t: globalT, currentLanguage, isRTL } = useLanguage();
  const sectionRef = useRef(null);

  // Local translation function
  const t = (key) => {
    const localTranslations = insightsTranslations[currentLanguage] || insightsTranslations.en;
    return localTranslations[key] || globalT(key) || key;
  };

  const featuredInsight = {
    type: 'report',
    categoryKey: 'researchReport',
    titleKey: 'featuredTitle',
    excerptKey: 'featuredExcerpt',
    author: 'Dr. Sarah Chen',
    roleKey: 'chiefResearchOfficer',
    authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
    readTime: '15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    tagKeys: ['ai', 'digitalTransformation', 'strategy']
  };

  const insights = [
    {
      type: 'article',
      categoryKey: 'industryAnalysis',
      titleKey: 'insight1Title',
      authorKey: 'innovationLab',
      readTime: '8',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      color: 'from-rose-500 to-pink-500'
    },
    {
      type: 'video',
      categoryKey: 'executiveInterview',
      titleKey: 'insight2Title',
      authorKey: 'leadershipSeries',
      readTime: '28',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'podcast',
      categoryKey: 'podcastEpisode',
      titleKey: 'insight3Title',
      authorKey: 'transformPodcast',
      readTime: '45',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
      color: 'from-violet-500 to-purple-500'
    },
    {
      type: 'article',
      categoryKey: 'marketOutlook',
      titleKey: 'insight4Title',
      authorKey: 'globalEconomicsTeam',
      readTime: '12',
      image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=600&q=80',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      type: 'article',
      categoryKey: 'technologyReport',
      titleKey: 'insight5Title',
      authorKey: 'innovationLab',
      readTime: '10',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
      color: 'from-fuchsia-500 to-violet-500'
    },
    {
      type: 'video',
      categoryKey: 'masterclass',
      titleKey: 'insight6Title',
      authorKey: 'expertWorkshop',
      readTime: '52',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="insights-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#insights-grid)" />
        </svg>
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 ${isRTL ? 'text-right md:text-center' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-xs md:text-sm font-medium tracking-wider text-violet-400 uppercase">
              {t('thoughtLeadership')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
            {t('insightsThat')}{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t('matter')}
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Featured Insight */}
        <div className="mb-12 md:mb-16">
          <FeaturedInsightCard insight={featuredInsight} t={t} isRTL={isRTL} />
        </div>

        {/* Insights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              insight={insight}
              t={t}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-16 md:mb-24">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-zinc-900/50 border border-white/10 hover:border-violet-500/30 rounded-full text-white font-medium transition-all hover:bg-zinc-800/50">
            <span>{t('viewAllInsights')}</span>
            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection t={t} isRTL={isRTL} />
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
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

export default InsightsSection;