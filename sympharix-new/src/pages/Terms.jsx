import React, { useState } from 'react';
import { 
  FileText, Shield, AlertCircle, CheckCircle2, XCircle, 
  Scale, Clock, Globe, Smartphone, CreditCard, Users,
  Mail, Phone, MapPin, Download, ExternalLink, Ban,
  RefreshCw, Award, Lock, AlertTriangle, Info
} from 'lucide-react';

const TermsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const lastUpdated = 'February 8, 2026';
  const effectiveDate = 'February 8, 2026';

  const quickLinks = [
    { id: 'acceptance', label: 'Acceptance of Terms', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'services', label: 'Description of Services', icon: <Globe className="w-4 h-4" /> },
    { id: 'accounts', label: 'User Accounts', icon: <Users className="w-4 h-4" /> },
    { id: 'octatrack', label: 'Octa Track App Terms', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'payments', label: 'Payment & Subscriptions', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'prohibited', label: 'Prohibited Uses', icon: <Ban className="w-4 h-4" /> },
    { id: 'liability', label: 'Limitation of Liability', icon: <Shield className="w-4 h-4" /> },
    { id: 'termination', label: 'Termination', icon: <XCircle className="w-4 h-4" /> }
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
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full mb-6">
            <Scale className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-bold">Legal Agreement</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Terms and Conditions
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By accessing or using Sympharix 
            services, including the Octa Track app, you agree to be bound by these terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center gap-2 text-purple-300">
              <Clock className="w-5 h-5" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <Clock className="w-5 h-5" />
              <span>Effective Date: {effectiveDate}</span>
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
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
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
          {/* Important Notice */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Important Legal Notice</h3>
                <p className="text-slate-700 mb-2">
                  These Terms and Conditions constitute a legally binding agreement between you and 
                  Sympharix Technologies Private Limited. By using our services, you acknowledge that 
                  you have read, understood, and agree to be bound by these terms.
                </p>
                <p className="text-slate-700 font-semibold">
                  If you do not agree to these terms, you must not access or use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Acceptance of Terms */}
          <div id="acceptance" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">1. Acceptance of Terms</h2>
            </div>

            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your access to and use of the websites, 
                mobile applications, and other online products and services (collectively, the "Services") 
                provided by Sympharix Technologies Private Limited ("Sympharix," "we," "us," or "our").
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">By using our Services, you represent that:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">You are at least 18 years old (or the age of majority in your jurisdiction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">You have the legal capacity to enter into a binding contract</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">You will comply with these Terms and all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">All information you provide is accurate, current, and complete</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Description of Services */}
          <div id="services" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">2. Description of Services</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700">
                Sympharix provides enterprise technology solutions, cloud services, IoT platforms, 
                and the Octa Track personal finance management application. Our Services include but are not limited to:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Cloud Infrastructure', items: ['Multi-cloud deployment', 'Infrastructure management', 'DevOps services'] },
                  { title: 'IoT Solutions', items: ['Device connectivity', 'Data analytics', 'Real-time monitoring'] },
                  { title: 'Innovation Labs', items: ['AI/ML services', 'R&D projects', 'Custom development'] },
                  { title: 'Octa Track App', items: ['Personal finance tracking', 'Investment monitoring', 'Bill management'] }
                ].map((service, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                    <ul className="space-y-1">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    <strong>Service Availability:</strong> We strive to provide 99.9% uptime but do not guarantee 
                    uninterrupted service. Scheduled maintenance and unforeseen technical issues may cause temporary disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Accounts */}
          <div id="accounts" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">3. User Accounts and Registration</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Account Security - Your Responsibilities:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Password Security:</strong>
                      <p className="text-slate-700 text-sm mt-1">
                        Maintain the confidentiality of your password. Use strong, unique passwords and enable 
                        two-factor authentication where available.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Unauthorized Access:</strong>
                      <p className="text-slate-700 text-sm mt-1">
                        You are responsible for all activities under your account. Notify us immediately at{' '}
                        <a href="mailto:security@sympharix.com" className="text-blue-600 hover:underline">
                          security@sympharix.com
                        </a>{' '}
                        if you suspect unauthorized access.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Account Sharing:</strong>
                      <p className="text-slate-700 text-sm mt-1">
                        You may not share your account credentials or allow others to access your account. 
                        Business accounts require separate enterprise licenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Account Termination</h3>
                <p className="text-slate-700">
                  We reserve the right to suspend or terminate accounts that violate these Terms, 
                  engage in fraudulent activity, or pose security risks. You may delete your account 
                  at any time through account settings or by contacting support.
                </p>
              </div>
            </div>
          </div>

          {/* Octa Track Specific Terms */}
          <div id="octatrack" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">4. Octa Track Mobile Application - Specific Terms</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4.1 Financial Data Accuracy</h3>
                <p className="text-slate-700">
                  Octa Track aggregates financial data from third-party sources. While we strive for accuracy, 
                  we do not guarantee that all data is error-free, complete, or current. You should verify 
                  important financial information through your financial institutions' official channels.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">4.2 Not Financial Advice</h3>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-amber-900">IMPORTANT:</strong> Octa Track is a financial management 
                    tool, not a financial advisor. Insights, recommendations, and analytics provided are for 
                    informational purposes only and should not be construed as financial, investment, tax, or 
                    legal advice. Always consult qualified professionals for financial decisions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4.3 Third-Party Banking Services</h3>
                <p className="text-slate-700 mb-3">
                  Octa Track uses third-party aggregators (Plaid, Finicity) to connect to financial institutions. 
                  By using these services, you agree to their respective terms:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <a href="https://plaid.com/legal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Plaid Terms of Service
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <a href="https://www.finicity.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Finicity Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4.4 App Store Terms</h3>
                <p className="text-slate-700">
                  When you download Octa Track from Apple App Store or Google Play Store, you also agree 
                  to their respective terms of service and their policies govern in-app purchases and subscriptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4.5 Subscription & Free Trial</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Free tier includes basic features with limitations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Pro subscription: ₹299/month or ₹2,499/year
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    14-day free trial (credit card required, cancel anytime)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Auto-renewal unless cancelled 24 hours before period end
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div id="payments" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">5. Payments, Billing, and Refunds</h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Accepted Payment Methods</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Credit/Debit Cards (Visa, Mastercard, Amex)</li>
                    <li>• UPI (India only)</li>
                    <li>• Net Banking (India only)</li>
                    <li>• Apple Pay / Google Pay</li>
                    <li>• PayPal (select regions)</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Billing Cycle</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Monthly: Billed on subscription date each month</li>
                    <li>• Annual: Billed once per year (save 30%)</li>
                    <li>• Enterprise: Custom billing terms</li>
                    <li>• All prices in INR or USD</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Refund Policy</h3>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Octa Track:</strong> 30-day money-back guarantee for first-time subscribers (within 30 days of initial purchase)</p>
                  <p><strong>Enterprise Services:</strong> Refunds handled per contract terms</p>
                  <p><strong>No refunds:</strong> For renewal periods, partial months, or violations of Terms</p>
                  <p className="text-sm italic mt-3">To request a refund: support@sympharix.com</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Price Changes</h3>
                <p className="text-slate-700">
                  We reserve the right to modify pricing. Existing subscribers will be notified 30 days 
                  before price changes take effect and may cancel before the new price applies.
                </p>
              </div>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div id="prohibited" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Ban className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">6. Prohibited Uses</h2>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <p className="text-lg text-slate-900 font-semibold mb-6">
                You agree NOT to use our Services for any unlawful purpose or in any way that violates these Terms. 
                Prohibited activities include:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Violating laws or regulations',
                  'Infringing intellectual property rights',
                  'Transmitting malware or viruses',
                  'Attempting unauthorized access',
                  'Reverse engineering our software',
                  'Scraping or data mining',
                  'Creating fake accounts',
                  'Harassing other users',
                  'Sharing account credentials',
                  'Commercial use without license',
                  'Money laundering or fraud',
                  'Terrorist financing activities'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">7. Intellectual Property Rights</h2>
            </div>

            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-lg text-slate-700">
                All content, features, and functionality of our Services, including but not limited to text, 
                graphics, logos, icons, images, audio clips, video clips, data compilations, and software, 
                are the exclusive property of Sympharix or its licensors.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Your License</h3>
                <p className="text-slate-700 mb-3">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, 
                  revocable license to access and use our Services for personal or internal business purposes.
                </p>
                <p className="text-slate-700 font-semibold">
                  This license does not include the right to resell, redistribute, or create derivative works.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div id="liability" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">8. Disclaimer of Warranties and Limitation of Liability</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4 uppercase">Important Legal Disclaimer</h3>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>AS-IS BASIS:</strong> Our Services are provided "as is" and "as available" 
                    without warranties of any kind, either express or implied.
                  </p>
                  <p>
                    <strong>NO LIABILITY FOR FINANCIAL DECISIONS:</strong> We are not responsible for 
                    financial losses resulting from use of Octa Track or other Services.
                  </p>
                  <p>
                    <strong>MAXIMUM LIABILITY:</strong> Our total liability to you for all claims arising 
                    from your use of the Services shall not exceed the amount you paid us in the 12 months 
                    preceding the claim, or $100 USD, whichever is greater.
                  </p>
                  <p>
                    <strong>NO LIABILITY FOR:</strong> Indirect, incidental, consequential, special, or 
                    punitive damages, including lost profits, data loss, or business interruption.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-sm text-slate-700">
                  Some jurisdictions do not allow the exclusion of certain warranties or limitation of 
                  liability, so these limitations may not apply to you. In such cases, our liability will 
                  be limited to the maximum extent permitted by law.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div id="termination" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">9. Termination</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">By You</h3>
                <p className="text-slate-700">
                  You may terminate your account at any time through account settings or by contacting 
                  support@sympharix.com. Upon termination, you will lose access to paid features, and 
                  data may be deleted per our data retention policy (90 days).
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">By Us</h3>
                <p className="text-slate-700 mb-3">
                  We may suspend or terminate your access immediately, without notice, for:
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>• Violation of these Terms</li>
                  <li>• Fraudulent, illegal, or harmful activity</li>
                  <li>• Non-payment of fees</li>
                  <li>• Request by law enforcement</li>
                  <li>• Extended inactivity (12+ months)</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Effect of Termination</h3>
                <p className="text-slate-700">
                  Upon termination, all licenses granted to you will immediately cease. Sections of these 
                  Terms that by their nature should survive termination (including liability limitations, 
                  indemnification, and dispute resolution) will continue to apply.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">10. Governing Law and Dispute Resolution</h2>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-300">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Governing Law</h3>
                  <p className="text-slate-700">
                    These Terms shall be governed by and construed in accordance with the laws of India, 
                    without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Jurisdiction</h3>
                  <p className="text-slate-700">
                    Any legal action or proceeding arising under these Terms will be brought exclusively 
                    in the courts located in Mumbai, Maharashtra, India, and you irrevocably consent to 
                    the jurisdiction of such courts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Arbitration (Optional)</h3>
                  <p className="text-slate-700">
                    We prefer to resolve disputes amicably. You may opt for binding arbitration under 
                    the Indian Arbitration and Conciliation Act, 1996, conducted in Mumbai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Questions About These Terms?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Legal Team</h3>
                <div className="space-y-3">
                  <a href="mailto:legal@sympharix.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    legal@sympharix.com
                  </a>
                  <a href="tel:+912212345678" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Phone className="w-5 h-5" />
                    +91 22 1234 5678
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Registered Office</h3>
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Sympharix Technologies Pvt. Ltd.</p>
                    <p>BKC, Bandra East</p>
                    <p>Mumbai, Maharashtra 400051</p>
                    <p>India</p>
                    <p className="mt-2 text-sm">CIN: U72900MH2021PTC123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <RefreshCw className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
                <p className="text-slate-300 mb-4">
                  We may revise these Terms at any time. Material changes will be notified via email or 
                  prominent notice in our Services at least 30 days before taking effect.
                </p>
                <p className="text-slate-300">
                  Continued use of our Services after changes constitutes acceptance of the revised Terms. 
                  If you do not agree to the new terms, you must stop using our Services.
                </p>
              </div>
            </div>
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

export default TermsPage;