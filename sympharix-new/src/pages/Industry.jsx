import React, { useState } from 'react';
import { 
  Cloud, Lightbulb, Cpu, Network, Globe2, Building2, 
  Factory, Shield, Zap, Database, Server, Lock,
  TrendingUp, Award, CheckCircle2, ArrowRight, 
  Radio, Wifi, Boxes, Gauge, CircuitBoard, Binary,
  BarChart3, LineChart, PieChart, Target, Users,
  Sparkles, Rocket, GitBranch, Code2, Layers
} from 'lucide-react';

const IndustryPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [selectedCapability, setSelectedCapability] = useState(null);

  // Core Capabilities
  const capabilities = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      tagline: 'Architecting the Future of Infrastructure',
      description: 'Enterprise-grade cloud platforms built for scale, security, and performance. Multi-cloud architecture with 99.99% uptime SLA.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      color: 'from-blue-600 to-cyan-500',
      services: [
        'Multi-Cloud Architecture & Migration',
        'Kubernetes & Container Orchestration',
        'Serverless Computing Solutions',
        'Cloud-Native Application Development',
        'Infrastructure as Code (IaC)',
        'DevOps & CI/CD Pipeline Automation'
      ],
      stats: [
        { value: '500+', label: 'Cloud Deployments' },
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '10PB+', label: 'Data Managed' }
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation Labs',
      tagline: 'Where Tomorrow\'s Technology Meets Today',
      description: 'Dedicated R&D centers driving breakthrough innovations in AI, blockchain, quantum computing, and emerging technologies.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
      color: 'from-purple-600 to-pink-500',
      services: [
        'AI & Machine Learning Research',
        'Blockchain & Web3 Development',
        'Quantum Computing Experiments',
        'AR/VR Experience Design',
        'Edge Computing Solutions',
        'Advanced Robotics & Automation'
      ],
      stats: [
        { value: '50+', label: 'Patents Filed' },
        { value: '200+', label: 'R&D Projects' },
        { value: '$20M', label: 'Annual Investment' }
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Solidity', 'Unity', 'ROS', 'Qiskit']
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: 'IoT & Connected Systems',
      tagline: 'Connecting the Physical and Digital Worlds',
      description: 'Industrial IoT platforms managing millions of devices. Real-time data processing, predictive analytics, and intelligent automation.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80',
      color: 'from-green-600 to-emerald-500',
      services: [
        'Industrial IoT Platform Development',
        'Smart Sensor Networks',
        'Real-Time Analytics & Monitoring',
        'Predictive Maintenance Systems',
        'Asset Tracking & Management',
        'Edge-to-Cloud Integration'
      ],
      stats: [
        { value: '10M+', label: 'Connected Devices' },
        { value: '1B+', label: 'Events/Day' },
        { value: '150+', label: 'IoT Deployments' }
      ],
      technologies: ['MQTT', 'LoRaWAN', 'Zigbee', 'Azure IoT', 'AWS IoT', 'Node-RED']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      tagline: 'Fortifying Digital Frontiers',
      description: 'Zero-trust security architecture, threat intelligence, and compliance frameworks protecting enterprise assets globally.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
      color: 'from-red-600 to-orange-500',
      services: [
        'Zero Trust Architecture Implementation',
        'Security Operations Center (SOC)',
        'Penetration Testing & Vulnerability Assessment',
        'Compliance & Governance (SOC2, ISO 27001)',
        'Threat Intelligence & Monitoring',
        'Identity & Access Management (IAM)'
      ],
      stats: [
        { value: '24/7', label: 'Security Monitoring' },
        { value: '1M+', label: 'Threats Blocked Daily' },
        { value: '100%', label: 'Compliance Rate' }
      ],
      technologies: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Okta', 'HashiCorp Vault', 'Snyk']
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Big Data & Analytics',
      tagline: 'Transforming Data into Strategic Advantage',
      description: 'Enterprise data lakes, real-time analytics pipelines, and AI-powered business intelligence platforms at petabyte scale.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      color: 'from-indigo-600 to-purple-500',
      services: [
        'Data Lake & Warehouse Architecture',
        'Real-Time Streaming Analytics',
        'Advanced Business Intelligence',
        'Data Science & ML Operations',
        'ETL Pipeline Development',
        'Data Governance & Quality Management'
      ],
      stats: [
        { value: '50PB+', label: 'Data Processed' },
        { value: '<100ms', label: 'Query Latency' },
        { value: '1000+', label: 'Data Sources' }
      ],
      technologies: ['Snowflake', 'Databricks', 'Apache Spark', 'Kafka', 'dbt', 'Tableau']
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: 'Digital Transformation',
      tagline: 'Reimagining Business for the Digital Age',
      description: 'End-to-end transformation programs combining strategy, technology, and organizational change to drive measurable outcomes.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
      color: 'from-teal-600 to-cyan-500',
      services: [
        'Enterprise Architecture Design',
        'Legacy System Modernization',
        'API-First Platform Development',
        'Microservices Architecture',
        'Agile Transformation Consulting',
        'Change Management & Training'
      ],
      stats: [
        { value: '300+', label: 'Transformations' },
        { value: '40%', label: 'Avg Cost Reduction' },
        { value: '3x', label: 'Faster Time-to-Market' }
      ],
      technologies: ['Salesforce', 'SAP', 'Oracle', 'MuleSoft', 'Kong', 'Postman']
    }
  ];

  // Industries We Serve
  const industries = [
    {
      name: 'Financial Services',
      icon: <TrendingUp className="w-10 h-10" />,
      description: 'Banking, insurance, and fintech platforms with regulatory compliance',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      clients: '150+',
      projects: [
        'Real-time fraud detection system processing $50B+ annually',
        'Core banking modernization for Top 10 global bank',
        'AI-powered trading platform with microsecond latency'
      ]
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: <Building2 className="w-10 h-10" />,
      description: 'Patient care platforms, medical devices, and clinical research systems',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      clients: '200+',
      projects: [
        'Telemedicine platform serving 5M+ patients',
        'AI diagnostics system with 98% accuracy',
        'Hospital IoT network managing 100K+ devices'
      ]
    },
    {
      name: 'Manufacturing & Industrial',
      icon: <Factory className="w-10 h-10" />,
      description: 'Smart factories, supply chain optimization, and predictive maintenance',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
      clients: '180+',
      projects: [
        'Industry 4.0 transformation for Fortune 100 manufacturer',
        'Predictive maintenance reducing downtime by 60%',
        'Digital twin platform for global supply chain'
      ]
    },
    {
      name: 'Energy & Utilities',
      icon: <Zap className="w-10 h-10" />,
      description: 'Smart grids, renewable energy management, and sustainability solutions',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      clients: '120+',
      projects: [
        'Smart grid managing 50GW renewable energy',
        'IoT platform monitoring 10K+ solar installations',
        'Predictive analytics reducing energy waste by 35%'
      ]
    },
    {
      name: 'Retail & E-Commerce',
      icon: <Boxes className="w-10 h-10" />,
      description: 'Omnichannel platforms, inventory optimization, and personalization engines',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      clients: '250+',
      projects: [
        'E-commerce platform handling 1M+ daily transactions',
        'AI recommendation engine increasing sales by 45%',
        'Real-time inventory across 5000+ stores'
      ]
    },
    {
      name: 'Transportation & Logistics',
      icon: <Globe2 className="w-10 h-10" />,
      description: 'Fleet management, route optimization, and autonomous systems',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      clients: '90+',
      projects: [
        'Fleet tracking 50K+ vehicles globally',
        'AI route optimization saving $20M annually',
        'Warehouse automation with 99.9% accuracy'
      ]
    }
  ];

  // Global Presence
  const regions = [
    { name: 'North America', offices: '15', projects: '2,500+', revenue: '$450M' },
    { name: 'Europe', offices: '12', projects: '1,800+', revenue: '$320M' },
    { name: 'Asia Pacific', offices: '18', projects: '3,200+', revenue: '$580M' },
    { name: 'Middle East', offices: '8', projects: '900+', revenue: '$180M' },
    { name: 'Latin America', offices: '6', projects: '650+', revenue: '$120M' }
  ];

  // Key Metrics
  const metrics = [
    { value: '1,000+', label: 'Enterprise Clients', icon: <Building2 /> },
    { value: '8,000+', label: 'Projects Delivered', icon: <CheckCircle2 /> },
    { value: '$1.65B', label: 'Annual Revenue', icon: <TrendingUp /> },
    { value: '25,000+', label: 'Global Team', icon: <Users /> },
    { value: '59', label: 'Global Offices', icon: <Globe2 /> },
    { value: '98%', label: 'Client Retention', icon: <Award /> }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Enterprise Grade */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Animated Globe */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-10">
          <Globe2 className="w-full h-full animate-spin-slow" style={{ animationDuration: '60s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-blue-300">Enterprise Solutions • Global Scale • Innovation First</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Engineering the
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Digital Backbone
              </span>
              of Global Enterprises
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Cloud infrastructure, IoT ecosystems, and innovation labs serving 1,000+ enterprises 
              across 59 countries. $1.65B in annual revenue. 25,000+ professionals worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-bold text-lg transition-all">
                Contact Enterprise Team
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">1,000+</div>
                <div className="text-sm text-slate-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400">8,000+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-teal-400">59</div>
                <div className="text-sm text-slate-400">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400">98%</div>
                <div className="text-sm text-slate-400">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Interactive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-[0.3em] text-slate-600 uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Enterprise Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six core practices delivering transformative outcomes for the world's most demanding enterprises
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {capabilities.map((capability, index) => (
              <button
                key={index}
                onClick={() => setSelectedCapability(index)}
                className={`group text-left p-8 rounded-2xl border-2 transition-all hover:shadow-2xl ${
                  selectedCapability === index
                    ? `border-transparent bg-gradient-to-br ${capability.color} text-white shadow-2xl scale-105`
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  selectedCapability === index
                    ? 'bg-white/20'
                    : `bg-gradient-to-br ${capability.color} text-white`
                }`}>
                  {capability.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${
                  selectedCapability === index ? 'text-white' : 'text-slate-900'
                }`}>
                  {capability.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${
                  selectedCapability === index ? 'text-white/90' : 'text-slate-600'
                }`}>
                  {capability.tagline}
                </p>
                <p className={`text-sm leading-relaxed ${
                  selectedCapability === index ? 'text-white/80' : 'text-slate-600'
                }`}>
                  {capability.description}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Capability Details */}
          {selectedCapability !== null && (
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={capabilities[selectedCapability].image}
                    alt={capabilities[selectedCapability].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${capabilities[selectedCapability].color} opacity-60`} />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-black text-slate-900 mb-6">
                    {capabilities[selectedCapability].title}
                  </h3>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Key Services</h4>
                    <div className="grid gap-3">
                      {capabilities[selectedCapability].services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {capabilities[selectedCapability].stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 bg-white rounded-xl border border-slate-200">
                        <div className={`text-2xl font-black bg-gradient-to-r ${capabilities[selectedCapability].color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {capabilities[selectedCapability].technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Industries We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Transform
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain expertise across critical sectors driving global economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndustry(index)}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
                  <img src={industry.image} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-slate-400 mb-4">{industry.description}</p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-6">
                    <Building2 className="w-4 h-4" />
                    {industry.clients} Clients
                  </div>

                  {/* Projects on Hover */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeIndustry === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-slate-700">
                      <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Key Projects</h4>
                      <ul className="space-y-2">
                        {industry.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Global
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Footprint
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              59 offices across 5 continents delivering 24/7 enterprise support
            </p>
          </div>

          {/* World Map Visualization */}
          <div className="mb-16 relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden relative border border-slate-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
                alt="World Map"
                className="w-full h-full object-cover opacity-20"
              />
              
              {/* Office Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-5xl mx-auto">
                  {[
                    { top: '35%', left: '22%', label: 'North America' },
                    { top: '30%', left: '48%', label: 'Europe' },
                    { top: '40%', left: '75%', label: 'Asia Pacific' },
                    { top: '50%', left: '55%', label: 'Middle East' },
                    { top: '60%', left: '25%', label: 'Latin America' }
                  ].map((marker, idx) => (
                    <div key={idx} className="absolute group" style={{ top: marker.top, left: marker.left }}>
                      <div className="relative">
                        <div className="w-6 h-6 bg-blue-600 rounded-full animate-ping absolute opacity-75" />
                        <div className="w-6 h-6 bg-blue-600 rounded-full relative border-4 border-white shadow-lg" />
                      </div>
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {marker.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Regional Stats */}
          <div className="grid md:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{region.name}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-black text-blue-600">{region.offices}</div>
                    <div className="text-xs text-slate-600">Offices</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{region.projects}</div>
                    <div className="text-xs text-slate-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{region.revenue}</div>
                    <div className="text-xs text-slate-600">Revenue</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Metrics */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Proven at Scale
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that demonstrate our enterprise capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                  {React.cloneElement(metric.icon, { className: 'w-6 h-6' })}
                </div>
                <div className="text-4xl font-black mb-2">{metric.value}</div>
                <div className="text-sm text-blue-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join 1,000+ global enterprises trusting Sympharix for their digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 rounded-xl font-bold text-lg transition-all">
              Download Capabilities Deck
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;