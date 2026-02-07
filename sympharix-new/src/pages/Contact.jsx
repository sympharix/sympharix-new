import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  MessageSquare, Headphones, Building2, Globe2,
  Linkedin, Twitter, Facebook, Instagram, Youtube,
  ArrowRight, Briefcase, Code, Users, Sparkles
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      city: 'Mumbai (Headquarters)',
      country: 'India',
      address: 'BKC, Bandra East, Mumbai, Maharashtra 400051',
      phone: '+91 22 1234 5678',
      email: 'mumbai@sympharix.com',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
      timezone: 'IST (UTC+5:30)',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      city: 'Bengaluru',
      country: 'India',
      address: 'Koramangala, Bengaluru, Karnataka 560095',
      phone: '+91 80 1234 5678',
      email: 'bengaluru@sympharix.com',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
      timezone: 'IST (UTC+5:30)',
      color: 'from-purple-600 to-pink-600'
    },
    {
      city: 'New York',
      country: 'USA',
      address: 'Manhattan, NY 10001, United States',
      phone: '+1 212 123 4567',
      email: 'newyork@sympharix.com',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      timezone: 'EST (UTC-5)',
      color: 'from-orange-600 to-red-600'
    },
    {
      city: 'London',
      country: 'UK',
      address: 'Canary Wharf, London E14 5AB',
      phone: '+44 20 1234 5678',
      email: 'london@sympharix.com',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      timezone: 'GMT (UTC+0)',
      color: 'from-green-600 to-emerald-600'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: 'Marina Bay, Singapore 018956',
      phone: '+65 1234 5678',
      email: 'singapore@sympharix.com',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      timezone: 'SGT (UTC+8)',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'DIFC, Dubai, United Arab Emirates',
      phone: '+971 4 123 4567',
      email: 'dubai@sympharix.com',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      timezone: 'GST (UTC+4)',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      description: 'Our team typically responds within 24 hours',
      primary: 'hello@sympharix.com',
      secondary: 'support@sympharix.com',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      description: 'Mon-Fri, 9 AM - 6 PM IST',
      primary: '+91 22 1234 5678',
      secondary: '+1 212 123 4567',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      primary: 'Available 24/7',
      secondary: 'Average response: 2 mins',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Enterprise Support',
      description: 'Dedicated account manager',
      primary: 'enterprise@sympharix.com',
      secondary: '99.9% SLA guarantee',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const departments = [
    { name: 'Sales Inquiries', email: 'sales@sympharix.com', icon: <Briefcase /> },
    { name: 'Technical Support', email: 'support@sympharix.com', icon: <Code /> },
    { name: 'Media & Press', email: 'press@sympharix.com', icon: <MessageSquare /> },
    { name: 'Partnerships', email: 'partners@sympharix.com', icon: <Users /> },
    { name: 'Careers', email: 'careers@sympharix.com', icon: <Sparkles /> },
    { name: 'Legal', email: 'legal@sympharix.com', icon: <Building2 /> }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, url: '#', color: 'hover:bg-sky-500' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, url: '#', color: 'hover:bg-blue-700' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#', color: 'hover:bg-pink-600' },
    { name: 'Youtube', icon: <Youtube className="w-6 h-6" />, url: '#', color: 'hover:bg-red-600' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold">We're Here to Help</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Have a question? Want to partner with us? Our global team is ready to assist you 24/7
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Send a Message
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#offices" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl font-bold text-lg transition-all">
              Find an Office
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Preferred Channel</span>
            </h2>
            <p className="text-xl text-slate-600">Multiple ways to reach us - pick what works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{method.description}</p>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900">{method.primary}</p>
                  <p className="text-sm text-slate-600">{method.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Direct Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <a
                      key={index}
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group"
                    >
                      <div className="w-10 h-10 bg-slate-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-colors">
                        {React.cloneElement(dept.icon, { className: 'w-5 h-5' })}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">{dept.name}</div>
                        <div className="text-sm text-slate-600">{dept.email}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-blue-200 mt-3">
                    <p className="text-sm text-slate-600">
                      <strong>Emergency Support:</strong> 24/7 for enterprise customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-white border-2 border-slate-200 ${social.color} rounded-xl flex items-center justify-center text-slate-600 hover:text-white hover:border-transparent transition-all hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section id="offices" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Presence</span>
            </h2>
            <p className="text-xl text-slate-600">Visit us at any of our offices worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${office.color} opacity-60`} />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                    {office.timezone}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{office.city}</h3>
                  <p className="text-sm text-slate-600 mb-4">{office.country}</p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-blue-600 hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <a href={`mailto:${office.email}`} className="text-sm text-blue-600 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-xl text-slate-600">Common questions about getting in touch</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical response time?',
                a: 'We aim to respond to all inquiries within 24 hours on business days. Enterprise customers receive priority support with guaranteed response times.'
              },
              {
                q: 'Do you offer phone support?',
                a: 'Yes! Phone support is available Monday-Friday, 9 AM - 6 PM IST. Enterprise customers have access to 24/7 emergency support.'
              },
              {
                q: 'Can I schedule a demo or consultation?',
                a: 'Absolutely! Email sales@sympharix.com or fill out the contact form above with "Demo Request" as the subject.'
              },
              {
                q: 'How do I report a security issue?',
                a: 'Please email security@sympharix.com immediately. We take security very seriously and will respond within 4 hours.'
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-slate-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;