import React from 'react';
import { TrendingUp, BookOpen, Video, Podcast, ArrowRight } from 'lucide-react';

const InsightsSection = () => {
  const featuredInsight = {
    category: 'Research Report',
    title: 'The Future of Enterprise AI: 2026 and Beyond',
    excerpt: 'Our comprehensive analysis of how artificial intelligence is reshaping business models, workforce dynamics, and competitive landscapes across industries.',
    author: 'Dr. Sarah Chen',
    role: 'Chief Research Officer',
    authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    tags: ['AI', 'Digital Transformation', 'Strategy']
  };

  const insights = [
    {
      type: 'article',
      icon: <BookOpen className="w-5 h-5" />,
      category: 'Industry Analysis',
      title: 'Healthcare Digital Transformation: Lessons from Leading Systems',
      author: 'Michael Rodriguez',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      color: 'from-red-500 to-pink-500'
    },
    {
      type: 'video',
      icon: <Video className="w-5 h-5" />,
      category: 'Executive Interview',
      title: 'Navigating Market Volatility: A CFO Roundtable',
      author: 'Leadership Series',
      readTime: '28 min',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'podcast',
      icon: <Podcast className="w-5 h-5" />,
      category: 'Podcast Episode',
      title: 'The Talent Revolution: Rethinking Work in a Hybrid World',
      author: 'Transform Podcast',
      readTime: '45 min',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      type: 'article',
      icon: <TrendingUp className="w-5 h-5" />,
      category: 'Market Outlook',
      title: 'Emerging Markets: The Next Decade of Growth Opportunities',
      author: 'Global Economics Team',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=600&q=80',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      type: 'article',
      icon: <BookOpen className="w-5 h-5" />,
      category: 'Technology Report',
      title: 'Quantum Computing: From Lab to Business Application',
      author: 'Innovation Lab',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
      color: 'from-violet-500 to-purple-500'
    },
    {
      type: 'video',
      icon: <Video className="w-5 h-5" />,
      category: 'Masterclass',
      title: 'Strategic M&A: Building Value Through Integration',
      author: 'Expert Workshop',
      readTime: '52 min',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
              Thought Leadership
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Insights That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Matter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Research, analysis, and perspectives from our global team of experts. 
            Shaping the conversation on business and technology.
          </p>
        </div>

        {/* Featured Insight */}
        <div className="mb-16 group cursor-pointer">
          <div className="relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={featuredInsight.image}
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white text-black text-sm font-bold">
                    {featuredInsight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredInsight.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={featuredInsight.authorImage}
                      alt={featuredInsight.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{featuredInsight.author}</div>
                      <div className="text-sm text-gray-600">{featuredInsight.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                    Read Report
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${insight.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded">
                    {insight.icon}
                  </div>
                  <span className="text-sm font-semibold">{insight.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {insight.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{insight.author}</span>
                  <span>{insight.readTime}</span>
                </div>
              </div>

              {/* Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${insight.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-indigo-600 to-purple-600 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
              Get our latest insights, research, and analysis delivered to your inbox. 
              Join 50,000+ executives who trust our perspective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-10 py-4 bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              Weekly insights • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;