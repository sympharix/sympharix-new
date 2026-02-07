import React, { useState } from 'react';
import {
  Smartphone, Download, Star, Shield, TrendingUp, PieChart,
  CreditCard, Bell, Lock, Zap, Users, Award, ChevronRight,
  Play, Apple, CheckCircle2, ArrowRight
} from 'lucide-react';

import logo from '../assets/OctaTrack.png'; // Fixed typo: 'aasets' → 'assets'

const ProductsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Smart Budget Tracking',
      description: 'AI-powered categorization of expenses with real-time insights into your spending patterns.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investment Analytics',
      description: 'Track your portfolio performance with advanced charts and predictive insights.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Multi-Account Management',
      description: 'Seamlessly manage all your bank accounts, cards, and wallets in one place.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Bill Reminders',
      description: 'Never miss a payment with smart notifications and automated bill tracking.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption with biometric authentication to keep your data safe.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Sync',
      description: 'Real-time synchronization across all your devices with cloud backup.',
      color: 'from-yellow-500 to-orange-500',
    }
  ];

  const stats = [
    { number: '2M+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '4.8', label: 'App Rating', icon: <Star className="w-6 h-6" /> },
    { number: '$15B+', label: 'Money Managed', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '50+', label: 'Countries', icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Entrepreneur',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'Octa Track transformed how I manage my business finances. The AI insights helped me cut expenses by 30%.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      text: 'Best finance app I\'ve used. The investment tracking feature is incredibly powerful and easy to use.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'Financial Advisor',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'I recommend Octa Track to all my clients. It\'s comprehensive, secure, and genuinely helpful.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Is Octa Track free to use?',
      answer: 'Yes! Octa Track offers a robust free tier with essential features. Premium features are available through our Pro subscription at ₹299/month or ₹2,499/year.'
    },
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-level AES-256 encryption, biometric authentication, and never store your banking credentials. Your data is encrypted both in transit and at rest.'
    },
    {
      question: 'Can I sync across multiple devices?',
      answer: 'Absolutely! Octa Track seamlessly syncs across all your devices - Android, iOS, and web - in real-time with automatic cloud backup.'
    },
    {
      question: 'Does it work with Indian banks?',
      answer: 'Yes! Octa Track supports all major Indian banks, UPI, digital wallets, and international accounts with automatic transaction import.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div
          className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-pink-500/30 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/30 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  🏆 Rated #1 Finance App in India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
                Take Control of Your
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 font-light max-w-xl">
                Octa Track - The smartest way to manage money, track investments, and achieve your financial goals with AI-powered insights.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-black text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30">
                  <Play className="w-6 h-6 fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-lg leading-tight">Google Play</div>
                  </div>
                </button>

                <button className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/30">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Download on the</div>
                    <div className="text-lg leading-tight">App Store</div>
                  </div>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Free to Start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>Bank-Level Security</span>
                </div>
              </div>
            </div>

            {/* Right - App Preview with Logo */}
            <div className="relative order-1 md:order-2 flex justify-center">
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto w-64 sm:w-72 md:w-80">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[3rem] blur-2xl opacity-50"
                  style={{ animation: 'pulse 3s ease-in-out infinite' }}
                />

                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-[2.5rem] overflow-hidden aspect-[9/19] flex items-center justify-center">
                    {/* App Logo - Using imported logo */}
                    <div className="flex flex-col items-center gap-4 p-8">
                      <img
                        src={logo}
                        alt="Octa Track Logo"
                        className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-2xl"
                        onError={(e) => {
                          // Fallback if logo doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon */}
                      <div
                        className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl items-center justify-center hidden"
                      >
                        <PieChart className="w-16 h-16 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-black text-gray-900">Octa Track</h3>
                        <p className="text-sm text-gray-500 mt-1">Smart Finance Manager</p>
                      </div>
                      {/* Mini UI Elements */}
                      <div className="w-full space-y-3 mt-4">
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900">Portfolio</div>
                                <div className="text-xs text-green-600">+12.5%</div>
                              </div>
                            </div>
                            <div className="text-sm font-bold text-gray-900">₹2.4L</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <PieChart className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900">Savings</div>
                                <div className="text-xs text-blue-600">On Track</div>
                              </div>
                            </div>
                            <div className="text-sm font-bold text-gray-900">₹85K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-full shadow-lg z-20"
                  style={{ animation: 'bounce 3s ease-in-out infinite' }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-sm">4.8 Rating</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-full shadow-lg z-20"
                  style={{ animation: 'bounce 3s ease-in-out infinite 1.5s' }}
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-sm">2M+ Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 group-hover:shadow-xl group-hover:shadow-indigo-500/30 transition-shadow duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-gray-500 uppercase">
                Powerful Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Master Your Money
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl hover:border-transparent hover:shadow-2xl transition-all duration-500 p-6 md:p-8 overflow-hidden cursor-pointer"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Designed for
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Simplicity & Power
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our intuitive interface makes complex financial management feel effortless. Track, analyze, and optimize your finances with just a few taps.
              </p>
              <div className="space-y-4">
                {[
                  'Smart AI-powered expense categorization',
                  'Real-time portfolio tracking & alerts',
                  'Automated savings goals & budgets',
                  'Multi-currency & UPI support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
                <img
                  src={logo}
                  alt="Octa Track App"
                  className="relative w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80';
                    e.target.className = 'relative w-full max-w-sm h-auto rounded-3xl shadow-2xl object-cover';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Loved by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Millions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">See what our users have to say</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 hover:-translate-y-2 transition-transform"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-indigo-200 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-5 md:p-6 text-left font-bold text-base md:text-lg text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Logo in CTA */}
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="Octa Track"
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join 2 million+ users who trust Octa Track for their financial management
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/30">
              <Download className="w-6 h-6" />
              Download Now
            </button>
            <button className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Watch Demo
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;