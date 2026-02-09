import React, { useState } from 'react';
import { Heart, DollarSign, Factory, Zap, ShoppingBag, GraduationCap, Plane, Smartphone } from 'lucide-react';

const IndustriesSection = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const industries = [
    {
      icon: <Heart className="w-12 h-12" />,
      name: 'Healthcare & Life Sciences',
      description: 'Digital health platforms, clinical analytics, regulatory compliance, and patient experience optimization.',
      stats: { clients: '200+', value: '$15B+' },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      name: 'Financial Services',
      description: 'Fintech innovation, risk management, regulatory technology, and wealth management platforms.',
      stats: { clients: '150+', value: '$20B+' },
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Factory className="w-12 h-12" />,
      name: 'Manufacturing & Industrial',
      description: 'Smart factories, supply chain 4.0, IoT integration, and predictive maintenance systems.',
      stats: { clients: '180+', value: '$12B+' },
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: 'Energy & Utilities',
      description: 'Renewable energy systems, grid modernization, sustainability programs, and energy trading platforms.',
      stats: { clients: '120+', value: '$18B+' },
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      name: 'Retail & Consumer',
      description: 'Omnichannel commerce, personalization engines, demand forecasting, and customer data platforms.',
      stats: { clients: '250+', value: '$10B+' },
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      name: 'Education & Research',
      description: 'Learning platforms, research analytics, institutional management, and EdTech innovation.',
      stats: { clients: '100+', value: '$5B+' },
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Plane className="w-12 h-12" />,
      name: 'Travel & Hospitality',
      description: 'Booking platforms, guest experience systems, revenue optimization, and loyalty programs.',
      stats: { clients: '90+', value: '$8B+' },
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      name: 'Technology & Telecom',
      description: '5G infrastructure, cloud platforms, SaaS products, and digital transformation consulting.',
      stats: { clients: '160+', value: '$25B+' },
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow-delayed" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">
              Industry Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Sector <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mastery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Deep vertical knowledge built over decades. We don't just understand your industry—we help define it.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndustry(index)}
              onMouseLeave={() => setHoveredIndustry(null)}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-80 group-hover:opacity-90 transition-opacity`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Icon & Name */}
                <div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {industry.name}
                  </h3>
                </div>

                {/* Hover Content */}
                <div className={`transition-all duration-500 ${
                  hoveredIndustry === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="flex gap-6 text-xs">
                    <div>
                      <div className="font-bold text-lg">{industry.stats.clients}</div>
                      <div className="text-white/80">Clients</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{industry.stats.value}</div>
                      <div className="text-white/80">Impact</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className={`absolute bottom-6 right-6 transition-all duration-500 ${
                  hoveredIndustry === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-2'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Border Glow */}
              <div className={`absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-colors pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              1,200+
            </div>
            <div className="text-gray-400">Industry Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              $120B+
            </div>
            <div className="text-gray-400">Total Impact</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              45+
            </div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-400">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;