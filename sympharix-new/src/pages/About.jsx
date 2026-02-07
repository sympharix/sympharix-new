import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Rocket, Trophy, Users, Globe, Zap, 
  TrendingUp, Award, Star, Heart, Code, Brain,
  ChevronDown, Play, ArrowRight, Check, Linkedin,
  Twitter, Github, Mail, Target, Lightbulb, Shield
} from 'lucide-react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFounder, setActiveFounder] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Co-Founders with detailed info
  const founders = [
    {
      name: 'Nilanjan Chakraborty',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      quote: 'Building technology that empowers billions',
      background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      bio: 'Visionary technologist with 15+ years in enterprise software. Previously led engineering teams at Fortune 500 companies. IIT Kharagpur alumni with expertise in AI/ML and distributed systems.',
      expertise: ['Product Strategy', 'AI/ML', 'Enterprise Architecture'],
      linkedin: '#',
      twitter: '#',
      github: '#',
      achievements: [
        'Built 3 products used by 10M+ users',
        'Led $50M+ in successful exits',
        'Published 12 research papers in AI',
        'Speaker at Google I/O, AWS re:Invent'
      ],
      funFact: '☕ Drinks 8 cups of chai daily while coding'
    },
    {
      name: 'Bunny Saha',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
      quote: 'Code is poetry, scale is art',
      background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
      bio: 'Full-stack architect and open-source contributor. Previously built infrastructure serving 100M+ requests/day. Passionate about developer experience and building systems that scale effortlessly.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'Developer Tools'],
      linkedin: '#',
      twitter: '#',
      github: '#',
      achievements: [
        'Architected systems handling 1B+ events/day',
        'Core contributor to 5 open-source projects',
        'Built platforms generating $100M+ revenue',
        'Mentored 100+ engineers globally'
      ],
      funFact: '🎮 Hardcore gamer - uses game theory in product design'
    }
  ];

  const journeySteps = [
    {
      year: '2021',
      quarter: 'Q1',
      title: 'The Spark',
      description: 'Two friends, one vision. Nilanjan and Bunny quit their jobs to build something extraordinary.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2021',
      quarter: 'Q2',
      title: 'Y Combinator',
      description: 'Accepted into YC W21. Raised $2.5M seed round. Built MVP in a garage.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2022',
      quarter: 'Q1',
      title: 'First Product Launch',
      description: 'Octa Track goes live. 10K users in the first week. Product-market fit achieved.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022',
      quarter: 'Q4',
      title: 'Series A',
      description: '$30M raised from Accel Partners. Team grows to 50. Offices in 3 cities.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      quarter: 'Q3',
      title: '1M Users',
      description: 'Crossed 1 million active users. Featured in TechCrunch, Forbes, Economic Times.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Series B & Unicorn',
      description: '$95M Series B from Sequoia. $750M valuation. Officially a unicorn 🦄',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { value: '$127.5M', label: 'Total Funding', icon: <TrendingUp /> },
    { value: '$750M', label: 'Valuation', icon: <Trophy /> },
    { value: '2M+', label: 'Users Worldwide', icon: <Users /> },
    { value: '500+', label: 'Team Members', icon: <Heart /> },
    { value: '15', label: 'Countries', icon: <Globe /> },
    { value: '98%', label: 'Customer Love', icon: <Star /> }
  ];

  const investors = [
    { name: 'Sequoia Capital', amount: '$45M', logo: 'SC' },
    { name: 'Accel Partners', amount: '$18M', logo: 'AP' },
    { name: 'Tiger Global', amount: '$30M', logo: 'TG' },
    { name: 'Y Combinator', amount: '$2.5M', logo: 'YC' },
    { name: 'Matrix Partners', amount: '$12M', logo: 'MP' },
    { name: 'Lightspeed', amount: '$20M', logo: 'LS' }
  ];

  const values = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Move Fast, Break Barriers',
      description: 'Speed is our superpower. We ship, learn, and iterate at lightning pace.',
      gradient: 'from-red-500 via-orange-500 to-yellow-500'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Innovation Obsessed',
      description: 'We don\'t follow trends, we create them. Every product pushes boundaries.',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'People First, Always',
      description: 'Our team is our greatest asset. We invest in growth, wellness, and happiness.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Customer Obsession',
      description: 'Every line of code, every design pixel, every decision starts with our users.',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Trust & Transparency',
      description: 'We operate with radical transparency and unwavering ethical standards.',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Bold & Fearless',
      description: 'We take big swings, embrace failure, and turn setbacks into comebacks.',
      gradient: 'from-yellow-500 via-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video-like Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
              transform: `scale(${1 + scrollY * 0.0005})`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold">Unicorn Status Achieved • $750M Valuation</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block text-white" style={{ animationDelay: '0.1s' }}>We're Not</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.3s' }}>
              Building a Company
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-300 mb-12 font-light max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            We're engineering the <span className="text-cyan-400 font-bold">operating system</span> for 
            the world's most ambitious businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center gap-3">
              Watch Our Story
              <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Join the Mission
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50" />
          </div>
        </div>
      </section>

      {/* Stats Marquee */}
      <section className="py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="flex items-center gap-4 px-6">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section - Cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Meet the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Two engineers who dared to dream bigger
            </p>
          </div>

          {/* Founders Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {founders.map((founder, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFounder(index)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
                style={{ minHeight: '600px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={founder.background}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="mb-4">
                    <h3 className="text-4xl font-black mb-2">{founder.name}</h3>
                    <div className="text-xl text-cyan-400 font-semibold mb-4">{founder.role}</div>
                    <p className="text-lg italic text-gray-300 mb-4">"{founder.quote}"</p>
                  </div>

                  {/* Expandable Bio */}
                  <div className={`overflow-hidden transition-all duration-500 ${activeFounder === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-300 mb-4 leading-relaxed">{founder.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {founder.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-500/30 border border-purple-500/50 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Fun Fact */}
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4 mb-4">
                      <div className="text-sm font-bold text-purple-300 mb-1">Fun Fact</div>
                      <div className="text-sm">{founder.funFact}</div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a href={founder.linkedin} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={founder.twitter} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={founder.github} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${founder.name.toLowerCase().replace(' ', '.')}@sympharix.com`} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500/50 transition-colors rounded-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Horizontal Scroll */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              The <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-2xl text-gray-400">From garage to unicorn in 1,460 days</p>
          </div>
        </div>

        <div className="overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex gap-6 px-4 md:px-8" style={{ width: 'max-content' }}>
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="group relative w-96 h-[500px] rounded-3xl overflow-hidden cursor-pointer flex-shrink-0"
              >
                {/* Background */}
                <img 
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-80 group-hover:opacity-90 transition-opacity`} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="inline-block px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-sm font-bold mb-4">
                      {step.year} • {step.quarter}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-black mb-4">{step.title}</h3>
                    <p className="text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <span className="text-2xl font-black">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 to-pink-950/30" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Backed by <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Legends</span>
            </h2>
            <p className="text-2xl text-gray-400">$127.5M from the VCs who funded Google, Stripe, Airbnb</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
              >
                <div className="text-6xl font-black text-white/10 group-hover:text-white/20 mb-4 transition-colors">
                  {investor.logo}
                </div>
                <h3 className="text-2xl font-bold mb-2">{investor.name}</h3>
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {investor.amount}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
              <Trophy className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold">Total Raised: $127.5M • Valuation: $750M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Creative Cards */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">DNA</span>
            </h2>
            <p className="text-2xl text-gray-400">The principles that drive every decision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Join the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Revolution</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            We're hiring exceptional talent across engineering, product, design, and business. 
            Be part of the team building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3">
              View Open Positions
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/20 transition-all">
              Meet the Team
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;