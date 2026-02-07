import React, { useState } from 'react';
import { 
  Rocket, Heart, Users, TrendingUp, Sparkles, MapPin, 
  Clock, DollarSign, Briefcase, Code, Palette, LineChart,
  Database, Shield, Radio, Cpu, Globe2, Award,
  ArrowRight, Search, Filter, CheckCircle2, Star,
  Coffee, Dumbbell, Book, Plane, Home, Laptop
} from 'lucide-react';

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹25L - ₹45L',
      skills: ['React', 'Node.js', 'AWS', 'Kubernetes'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Product Designer (UI/UX)',
      department: 'Design',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹18L - ₹32L',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      icon: <Palette className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '4-7 years',
      salary: '₹30L - ₹50L',
      skills: ['Product Strategy', 'Analytics', 'Agile', 'Stakeholder Management'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹20L - ₹35L',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      icon: <Database className="w-6 h-6" />,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹22L - ₹38L',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'AWS/GCP'],
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 6,
      title: 'Security Engineer',
      department: 'Security',
      location: 'Mumbai / Bengaluru',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹28L - ₹48L',
      skills: ['Penetration Testing', 'Security Audits', 'SIEM', 'Incident Response'],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 7,
      title: 'IoT Solutions Architect',
      department: 'Engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '6-10 years',
      salary: '₹32L - ₹55L',
      skills: ['IoT Protocols', 'Edge Computing', 'System Design', 'MQTT'],
      icon: <Radio className="w-6 h-6" />,
      color: 'from-teal-600 to-cyan-600'
    },
    {
      id: 8,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Mumbai / Delhi',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹25L - ₹40L + Commission',
      skills: ['Enterprise Sales', 'Relationship Building', 'Negotiation', 'Strategy'],
      icon: <LineChart className="w-6 h-6" />,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 9,
      title: 'Engineering Intern',
      department: 'Engineering',
      location: 'Bengaluru / Remote',
      type: 'Internship',
      experience: 'Students',
      salary: '₹50K - ₹80K / month',
      skills: ['Any Programming Language', 'Problem Solving', 'Eagerness to Learn'],
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const perks = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Top-of-market compensation with equity options',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Premium health insurance for you and family',
      color: 'from-red-600 to-pink-600'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Learning Budget',
      description: '₹1L annual budget for courses & conferences',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Unlimited PTO',
      description: 'Take time off when you need it',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Office Perks',
      description: 'Free meals, snacks, gym membership',
      color: 'from-amber-600 to-orange-600'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'WFH Setup',
      description: '₹50K one-time home office allowance',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Events',
      description: 'Quarterly offsites and team building',
      color: 'from-teal-600 to-cyan-600'
    }
  ];

  const values = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Move Fast',
      description: 'Ship quickly, iterate constantly, learn from failures'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Collaborate',
      description: 'Best ideas win, regardless of hierarchy'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Own It',
      description: 'Take ownership, be accountable, deliver results'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Innovate',
      description: 'Challenge status quo, think differently'
    }
  ];

  const stats = [
    { value: '500+', label: 'Team Members' },
    { value: '15+', label: 'Countries' },
    { value: '4.8/5', label: 'Glassdoor Rating' },
    { value: '50+', label: 'Open Positions' }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Sales', 'Security'];
  const locations = ['all', 'Mumbai', 'Bengaluru', 'Remote', 'Delhi'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-bold">We're Hiring!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Build the Future <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto font-light">
            Join 500+ talented individuals across 15 countries building technology 
            that powers the world's most ambitious businesses.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="#openings" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Culture</span>
            </h2>
            <p className="text-xl text-slate-600">The values that define how we work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl transition-all text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Perks & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Benefits</span>
            </h2>
            <p className="text-xl text-slate-600">We invest in our people</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${perk.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Positions</span>
            </h2>
            <p className="text-xl text-slate-600">Find your perfect role</p>
          </div>

          {/* Filters */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  <Search className="w-4 h-4 inline mr-2" />
                  Search
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Job title or skills..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  <Filter className="w-4 h-4 inline mr-2" />
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-slate-600">
            Showing <strong className="text-slate-900">{filteredJobs.length}</strong> positions
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {job.icon}
                  </div>

                  {/* Job Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-green-600">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No positions found</h3>
              <p className="text-slate-600">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
            </h2>
            <p className="text-xl text-slate-600">What to expect when you apply</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block" />

            <div className="space-y-8">
              {[
                { step: 1, title: 'Application Review', desc: '2-3 days: We review your application and resume', icon: <CheckCircle2 /> },
                { step: 2, title: 'Initial Screening', desc: '30 mins: Quick chat with our recruiter', icon: <Users /> },
                { step: 3, title: 'Technical/Skills Assessment', desc: '1-2 hours: Coding challenge or case study', icon: <Code /> },
                { step: 4, title: 'Team Interview', desc: '45-60 mins: Meet your potential team members', icon: <Users /> },
                { step: 5, title: 'Offer & Onboarding', desc: '1-2 days: Offer letter and welcome package', icon: <Star /> }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-start gap-6 md:pl-20">
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-black text-xl hidden md:flex">
                    {phase.step}
                  </div>
                  <div className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        {React.cloneElement(phase.icon, { className: 'w-5 h-5' })}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    </div>
                    <p className="text-slate-600">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We're always looking for exceptional talent. Send us your resume and tell us what you're passionate about.
          </p>
          <a
            href="mailto:careers@sympharix.com"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Send Open Application
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;