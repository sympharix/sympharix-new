import React, { useState } from 'react';
import { MapPin, Users, Building, Award } from 'lucide-react';

const GlobalPresenceSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      name: 'North America',
      offices: ['New York', 'San Francisco', 'Toronto', 'Chicago', 'Austin'],
      employees: '8,500+',
      clients: '450+',
      revenue: '$18B',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80'
    },
    {
      name: 'Europe',
      offices: ['London', 'Paris', 'Frankfurt', 'Amsterdam', 'Zurich'],
      employees: '6,200+',
      clients: '380+',
      revenue: '$14B',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80'
    },
    {
      name: 'Asia Pacific',
      offices: ['Singapore', 'Tokyo', 'Hong Kong', 'Sydney', 'Mumbai'],
      employees: '7,800+',
      clients: '520+',
      revenue: '$16B',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
    },
    {
      name: 'Middle East & Africa',
      offices: ['Dubai', 'Riyadh', 'Johannesburg', 'Cairo', 'Lagos'],
      employees: '2,800+',
      clients: '180+',
      revenue: '$6B',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
    },
    {
      name: 'Latin America',
      offices: ['São Paulo', 'Mexico City', 'Buenos Aires', 'Santiago', 'Bogotá'],
      employees: '3,200+',
      clients: '210+',
      revenue: '$7B',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80'
    }
  ];

  const milestones = [
    { year: '1995', event: 'Founded in New York' },
    { year: '2000', event: 'Expanded to Europe & Asia' },
    { year: '2010', event: 'Reached 50 countries' },
    { year: '2015', event: 'Launched innovation labs globally' },
    { year: '2020', event: 'Digital transformation leadership' },
    { year: '2025', event: '150+ countries, 25,000+ professionals' }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
              Global Reach
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Worldwide <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Operating across six continents with local expertise and global standards. 
            Wherever you are, we're there.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-20 relative">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden relative">
            {/* World Map SVG placeholder */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
              alt="World Map"
              className="w-full h-full object-cover opacity-20"
            />
            
            {/* Office Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-5xl mx-auto">
                {/* Animated pulse markers */}
                {[
                  { top: '35%', left: '22%' }, // North America
                  { top: '30%', left: '48%' }, // Europe
                  { top: '40%', left: '75%' }, // Asia
                  { top: '70%', left: '50%' }, // Africa
                  { top: '60%', left: '25%' }  // South America
                ].map((pos, idx) => (
                  <div key={idx} className="absolute" style={pos}>
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-blue-600 rounded-full relative" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-6">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-black text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-black text-gray-900">85+</div>
                <div className="text-sm text-gray-600">Offices</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-black text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {regions.map((region, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedRegion(index)}
              onMouseLeave={() => setSelectedRegion(null)}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div>
                  <MapPin className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                </div>

                {/* Hover Stats */}
                <div className={`transition-all duration-500 ${
                  selectedRegion === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-white/80">Employees</span>
                      <span className="font-bold">{region.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Clients</span>
                      <span className="font-bold">{region.clients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Revenue</span>
                      <span className="font-bold">{region.revenue}</span>
                    </div>
                  </div>
                  <div className="text-xs space-y-1">
                    {region.offices.map((office, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        {office}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-black text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            
            {/* Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                    {milestone.year.slice(2)}
                  </div>
                  <div className="text-sm font-bold text-gray-900 mb-1">{milestone.year}</div>
                  <div className="text-xs text-gray-600">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-black mb-12">Global Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { award: 'Best Consulting Firm', org: 'Fortune 500', year: '2025' },
              { award: 'Innovation Leader', org: 'Fast Company', year: '2024' },
              { award: 'Top Employer', org: 'Great Place to Work', year: '2025' },
              { award: 'Tech Pioneer', org: 'World Economic Forum', year: '2023' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="font-bold text-gray-900 mb-1">{item.award}</div>
                <div className="text-sm text-gray-600">{item.org}</div>
                <div className="text-xs text-gray-500 mt-1">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;