import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      title: 'Global Innovation Leaders',
      subtitle: 'Transforming industries through technology, strategy, and excellence',
      gradient: 'from-slate-900/90 via-blue-900/85 to-slate-900/90',
      accent: 'from-cyan-400 to-blue-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      title: 'Strategic Consulting',
      subtitle: 'Expert guidance for digital transformation and business optimization',
      gradient: 'from-gray-900/90 via-indigo-900/85 to-gray-900/90',
      accent: 'from-indigo-400 to-purple-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      title: 'Enterprise Solutions',
      subtitle: 'Scalable technology platforms for multinational corporations',
      gradient: 'from-neutral-900/90 via-violet-900/85 to-neutral-900/90',
      accent: 'from-violet-400 to-fuchsia-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80',
      title: 'Talent & Advisory',
      subtitle: 'Building exceptional teams and cultivating organizational excellence',
      gradient: 'from-zinc-900/90 via-rose-900/85 to-zinc-900/90',
      accent: 'from-rose-400 to-pink-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80',
      title: 'Research & Analytics',
      subtitle: 'Data-driven insights powering strategic decision making',
      gradient: 'from-black/90 via-emerald-900/85 to-black/90',
      accent: 'from-emerald-400 to-teal-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} backdrop-blur-[1px]`}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
            </div>
          </div>

          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }} />
          </div>
          
          <div className="relative h-full flex items-center px-4 md:px-12 lg:px-24">
            <div className="max-w-5xl">
              <div className={`inline-block mb-6 overflow-hidden ${
                index === currentSlide ? 'animate-slide-in-left' : ''
              }`}>
                <div className={`h-px w-16 bg-gradient-to-r ${slide.accent} mb-4`} />
                <span className="text-sm font-bold tracking-[0.3em] text-white/80 uppercase">
                  Excellence Redefined
                </span>
              </div>

              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight ${
                index === currentSlide ? 'animate-slide-in-up-stagger' : ''
              }`}>
                <span className="inline-block" style={{ animationDelay: '0.1s' }}>
                  {slide.title.split(' ')[0]}
                </span>{' '}
                <span className="inline-block" style={{ animationDelay: '0.2s' }}>
                  {slide.title.split(' ').slice(1, -1).join(' ')}
                </span>{' '}
                <span className={`inline-block bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`} 
                      style={{ animationDelay: '0.3s' }}>
                  {slide.title.split(' ').slice(-1)}
                </span>
              </h1>

              <p className={`text-xl md:text-3xl text-gray-200 mb-10 font-light max-w-3xl ${
                index === currentSlide ? 'animate-fade-in-delayed' : ''
              }`}>
                {slide.subtitle}
              </p>

              <div className={`flex flex-wrap gap-4 ${
                index === currentSlide ? 'animate-fade-in-up-delayed' : ''
              }`}>
                <button className="group/btn relative px-10 py-5 bg-white text-black font-bold overflow-hidden transition-all hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Solutions
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} translate-y-full group-hover/btn:translate-y-0 transition-transform`} />
                </button>
                
                <button className="group/btn relative px-10 py-5 border-2 border-white/50 text-white font-bold backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Story
                  </span>
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 max-w-2xl ${
                index === currentSlide ? 'animate-fade-in-delayed' : ''
              }`}>
                <div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>150+</div>
                  <div className="text-sm text-gray-300 mt-1">Countries Served</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>$50B+</div>
                  <div className="text-sm text-gray-300 mt-1">Client Value</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>25K+</div>
                  <div className="text-sm text-gray-300 mt-1">Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all z-20 group/arrow opacity-0 group-hover:opacity-100">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all z-20 group/arrow opacity-0 group-hover:opacity-100">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }} className="group/indicator relative">
            <div className={`h-1 transition-all ${index === currentSlide ? 'w-16 bg-white' : 'w-8 bg-white/40 group-hover/indicator:bg-white/60'}`} />
            {index === currentSlide && <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-50 blur-sm`} />}
          </button>
        ))}
      </div>

      <div className="absolute bottom-12 right-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium tracking-wider rotate-90 origin-center translate-x-4">SCROLL</span>
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/80 animate-scroll-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;