import React, { useState } from 'react';
import { 
  Shield, Lock, Eye, Database, Globe, Smartphone, 
  FileText, CheckCircle2, AlertCircle, Mail, Phone,
  MapPin, Calendar, Download, ExternalLink, ChevronDown,
  Server, Cloud, Users, Bell, Cookie, Settings
} from 'lucide-react';

const PrivacyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const lastUpdated = 'February 8, 2026';

  const quickLinks = [
    { id: 'collection', label: 'Information We Collect', icon: <Database className="w-4 h-4" /> },
    { id: 'usage', label: 'How We Use Your Data', icon: <Settings className="w-4 h-4" /> },
    { id: 'sharing', label: 'Information Sharing', icon: <Users className="w-4 h-4" /> },
    { id: 'security', label: 'Data Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'rights', label: 'Your Rights', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookies & Tracking', icon: <Cookie className="w-4 h-4" /> },
    { id: 'octatrack', label: 'Octa Track App', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4 h-4" /> }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold">Your Privacy is Our Priority</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We are committed to protecting your personal information and your right to privacy. 
            This policy applies to all information collected through our website and Octa Track mobile application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-300">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Last Updated: {lastUpdated}</span>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Introduction */}
          <div className="prose prose-slate max-w-none mb-16">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important Notice</h3>
                  <p className="text-slate-700 mb-0">
                    By using Sympharix services, including our website and Octa Track mobile application, 
                    you agree to the collection and use of information in accordance with this policy. 
                    If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-4">Overview</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Sympharix Technologies Private Limited ("we," "us," or "our") operates the sympharix.com website 
              and the Octa Track mobile application (collectively, the "Services"). This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our Services.
            </p>
          </div>

          {/* Information We Collect */}
          <div id="collection" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Personal Information You Provide</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Account Information:</strong> Name, email address, phone number, company name, job title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Payment Information:</strong> Billing address, payment card details (processed securely through third-party payment processors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Communication Data:</strong> Information you provide when contacting customer support or communicating with us</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Octa Track Specific Data</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Financial Data:</strong> Transaction records, account balances, expense categories (stored encrypted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bank Account Information:</strong> Account numbers, routing numbers (encrypted with AES-256)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Investment Data:</strong> Portfolio holdings, transaction history, performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Biometric Data:</strong> Fingerprint, Face ID (stored locally on device only, never transmitted)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Automatically Collected Information</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Location Data:</strong> Approximate location based on IP address (optional precise location for Octa Track)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div id="usage" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">How We Use Your Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Service Delivery', items: ['Process transactions', 'Manage your account', 'Provide customer support', 'Send service notifications'] },
                { title: 'Product Improvement', items: ['Analyze usage patterns', 'Develop new features', 'Enhance user experience', 'Fix bugs and issues'] },
                { title: 'Security & Fraud Prevention', items: ['Detect fraudulent activity', 'Prevent unauthorized access', 'Ensure platform security', 'Comply with legal obligations'] },
                { title: 'Marketing & Communication', items: ['Send promotional emails', 'Personalize content', 'Conduct surveys', 'Provide updates (with consent)'] }
              ].map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Information Sharing */}
          <div id="sharing" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Information Sharing and Disclosure</h2>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">We Never Sell Your Data</h3>
                  <p className="text-slate-700 mb-0">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">We may share your information with:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Server className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Service Providers:</strong> Cloud hosting (AWS, Google Cloud), payment processors (Stripe, Razorpay), 
                      analytics providers (Google Analytics), email services (SendGrid)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Business Transfers:</strong> In connection with merger, acquisition, or sale of assets (with notice)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>With Your Consent:</strong> When you explicitly authorize us to share information
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div id="security" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Data Security</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bank-Level Security Measures</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Lock />, title: 'AES-256 Encryption', desc: 'All sensitive data encrypted at rest and in transit' },
                  { icon: <Server />, title: 'Secure Infrastructure', desc: 'ISO 27001 certified data centers with 24/7 monitoring' },
                  { icon: <Eye />, title: 'Access Controls', desc: 'Role-based access with multi-factor authentication' },
                  { icon: <Shield />, title: 'Regular Audits', desc: 'Annual security audits and penetration testing' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Compliance & Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'PCI DSS Level 1', 'CCPA Compliant'].map((cert, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-slate-300 rounded-lg font-semibold text-sm text-slate-700">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div id="rights" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Your Privacy Rights</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '👁️', title: 'Access', desc: 'Request a copy of your personal data' },
                { icon: '✏️', title: 'Correction', desc: 'Update or correct inaccurate information' },
                { icon: '🗑️', title: 'Deletion', desc: 'Request deletion of your data (subject to legal requirements)' },
                { icon: '📥', title: 'Data Portability', desc: 'Receive your data in a portable format' },
                { icon: '🚫', title: 'Opt-Out', desc: 'Unsubscribe from marketing communications' },
                { icon: '⚙️', title: 'Restriction', desc: 'Limit how we process your information' }
              ].map((right, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="text-3xl mb-3">{right.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{right.title}</h3>
                  <p className="text-slate-700">{right.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-slate-700">
                <strong>To exercise your rights,</strong> please contact us at{' '}
                <a href="mailto:privacy@sympharix.com" className="text-blue-600 hover:underline font-semibold">
                  privacy@sympharix.com
                </a>
                {' '}or through the in-app settings in Octa Track. We will respond within 30 days.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Cookies and Tracking Technologies</h2>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700">
                We use cookies and similar tracking technologies to collect and track information about your 
                browsing activities. You can control cookies through your browser settings.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Types of Cookies We Use:</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-slate-900">Essential Cookies:</strong>
                    <span className="text-slate-700"> Required for website functionality (cannot be disabled)</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Analytics Cookies:</strong>
                    <span className="text-slate-700"> Help us understand how visitors use our website</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Marketing Cookies:</strong>
                    <span className="text-slate-700"> Used to deliver relevant advertisements (with consent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Octa Track Specific */}
          <div id="octatrack" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Octa Track Mobile App - Specific Privacy Information</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Your Financial Data is Sacred</h3>
                  <p className="text-slate-700">
                    Octa Track employs military-grade encryption and never stores your banking credentials. 
                    All financial data is encrypted with AES-256 encryption and stored in SOC 2 Type II certified data centers.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Permissions Required:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Camera:</strong> To scan receipts and bills (optional)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Notifications:</strong> For bill reminders and transaction alerts</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Biometric (Fingerprint/Face ID):</strong> For secure app access (stored locally only)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Storage:</strong> To export reports and backup data</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Network:</strong> To sync data across devices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-slate-900 mb-2">Banking Credentials:</h4>
                  <p className="text-slate-700">
                    Octa Track uses Plaid and Finicity for bank connections. We never see or store your 
                    banking passwords. All connections are read-only and can be revoked anytime from the app settings.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-slate-900 mb-2">Data Deletion:</h4>
                  <p className="text-slate-700">
                    You can delete your Octa Track account and all associated data at any time through 
                    Settings → Account → Delete Account. This action is permanent and cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
              <a 
                href="#" 
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Contact Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Privacy Officer</h3>
                <div className="space-y-3">
                  <a href="mailto:privacy@sympharix.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    privacy@sympharix.com
                  </a>
                  <a href="tel:+912212345678" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Phone className="w-5 h-5" />
                    +91 22 1234 5678
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Mailing Address</h3>
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Sympharix Technologies Pvt. Ltd.</p>
                    <p>BKC, Bandra East</p>
                    <p>Mumbai, Maharashtra 400051</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-slate-300">
              For material changes, we will provide prominent notice (including, for certain services, 
              email notification of privacy policy changes) or obtain consent as required by law.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
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

export default PrivacyPage;