import React, { useState } from 'react';
import { Briefcase, TrendingUp, Cpu, Users, Globe2, Building2, LineChart, Lightbulb, Shield, Rocket, Network, Coins } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Management Consulting',
      tagline: 'Strategy Meets Execution',
      description: 'End-to-end strategic advisory from market entry to operational excellence. We partner with C-suite executives to drive transformational change.',
      features: ['Strategy Development', 'Performance Improvement', 'Organizational Design', 'Change Management'],
      color: 'from-blue-600 to-cyan-600',
      bgAccent: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Technology Solutions',
      tagline: 'Innovation at Scale',
      description: 'Custom software development, AI/ML integration, and enterprise technology platforms. Building the digital infrastructure of tomorrow.',
      features: ['Custom Development', 'AI & Automation', 'Cloud Architecture', 'Legacy Modernization'],
      color: 'from-purple-600 to-indigo-600',
      bgAccent: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Financial Advisory',
      tagline: 'Capital. Strategy. Growth.',
      description: 'M&A advisory, investment strategy, risk management, and financial restructuring. Navigating complexity with precision.',
      features: ['M&A Advisory', 'Due Diligence', 'Valuation Services', 'Risk Analytics'],
      color: 'from-emerald-600 to-teal-600',
      bgAccent: 'bg-emerald-50',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Talent & HR Services',
      tagline: 'People Are Strategy',
      description: 'Executive search, organizational development, and HR transformation. Building high-performance cultures that win.',
      features: ['Executive Search', 'Talent Strategy', 'Leadership Development', 'Culture Transformation'],
      color: 'from-rose-600 to-pink-600',
      bgAccent: 'bg-rose-50',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
    },
    {
      icon: <Globe2 className="w-10 h-10" />,
      title: 'Global Operations',
      tagline: 'Scale Without Borders',
      description: 'Supply chain optimization, international expansion, and operational excellence across continents. Local expertise, global reach.',
      features: ['Supply Chain', 'Global Expansion', 'Process Excellence', 'Vendor Management'],
      color: 'from-orange-600 to-amber-600',
      bgAccent: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'Data & Analytics',
      tagline: 'Intelligence Delivered',
      description: 'Advanced analytics, predictive modeling, and business intelligence platforms. Turning data into competitive advantage.',
      features: ['Advanced Analytics', 'BI Platforms', 'Predictive Models', 'Data Strategy'],
      color: 'from-violet-600 to-purple-600',
      bgAccent: 'bg-violet-50',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Risk & Compliance',
      tagline: 'Secure by Design',
      description: 'Cybersecurity, regulatory compliance, and enterprise risk management. Protecting value in an uncertain world.',
      features: ['Cybersecurity', 'Compliance', 'Risk Assessment', 'Business Continuity'],
      color: 'from-slate-600 to-gray-600',
      bgAccent: 'bg-slate-50',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Innovation & R&D',
      tagline: 'Future Forward',
      description: 'Product development, emerging tech labs, and innovation frameworks. Building what comes next.',
      features: ['Product Development', 'Innovation Labs', 'IP Strategy', 'Technology Scouting'],
      color: 'from-yellow-600 to-orange-600',
      bgAccent: 'bg-yellow-50',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Industry Solutions',
      tagline: 'Sector Specialists',
      description: 'Deep vertical expertise across healthcare, finance, manufacturing, energy, and retail. Domain knowledge that drives results.',
      features: ['Healthcare', 'Financial Services', 'Manufacturing', 'Energy & Utilities'],
      color: 'from-cyan-600 to-blue-600',
      bgAccent: 'bg-cyan-50',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Digital Transformation',
      tagline: 'Reimagine Everything',
      description: 'Complete digital overhauls that reshape business models, customer experiences, and operational capabilities.',
      features: ['Digital Strategy', 'Customer Experience', 'Platform Design', 'Agile Transformation'],
      color: 'from-fuchsia-600 to-pink-600',
      bgAccent: 'bg-fuchsia-50',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Ecosystem & Alliances',
      tagline: 'Connected Success',
      description: 'Strategic partnerships, vendor ecosystems, and collaborative networks. Building value through connection.',
      features: ['Partnership Strategy', 'Vendor Management', 'Alliance Formation', 'Network Optimization'],
      color: 'from-teal-600 to-emerald-600',
      bgAccent: 'bg-teal-50',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
    },
    {
      icon: <Coins className="w-10 h-10" />,
      title: 'Sustainability & ESG',
      tagline: 'Profit Meets Purpose',
      description: 'Environmental strategy, social impact programs, and governance frameworks. Creating sustainable value for all stakeholders.',
      features: ['ESG Strategy', 'Carbon Reduction', 'Social Impact', 'Sustainability Reporting'],
      color: 'from-green-600 to-lime-600',
      bgAccent: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Enterprise <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive services spanning strategy, technology, operations, and beyond. 
            Everything a modern enterprise needs to compete and win.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={service.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`group/btn relative font-semibold text-sm flex items-center gap-2 text-gray-900 hover:gap-3 transition-all`}>
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Need something specific? We customize solutions for unique challenges.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-2xl hover:scale-105 transition-all">
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;