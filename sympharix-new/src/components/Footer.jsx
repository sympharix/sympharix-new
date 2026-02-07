import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Linkedin, Instagram, Youtube, 
  Mail, Phone, MapPin, ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press & Media', path: '/press' },
      { label: 'Blog', path: '/blog' },
      { label: 'Investors', path: '/investors' }
    ],
    products: [
      { label: 'Octa Track', path: '/products' },
      { label: 'Enterprise Solutions', path: '/enterprise' },
      { label: 'API Documentation', path: '/api' },
      { label: 'Integrations', path: '/integrations' },
      { label: 'Pricing', path: '/pricing' }
    ],
    resources: [
      { label: 'Help Center', path: '/help' },
      { label: 'Community', path: '/community' },
      { label: 'Tutorials', path: '/tutorials' },
      { label: 'Webinars', path: '/webinars' },
      { label: 'Partner Program', path: '/partners' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security', path: '/security' },
      { label: 'Compliance', path: '/compliance' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, url: '#', name: 'YouTube' }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: 'BKC, Bandra East, Mumbai 400051, India',
      phone: '+91 22 1234 5678'
    },
    {
      city: 'Bengaluru',
      address: 'Koramangala, Bengaluru 560095, India',
      phone: '+91 80 1234 5678'
    },
    {
      city: 'New York',
      address: 'Manhattan, NY 10001, USA',
      phone: '+1 212 123 4567'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black px-4 py-3 rounded-lg border border-violet-500/30">
                  <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    SYMPHARIX
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses worldwide with cutting-edge technology solutions, 
              strategic consulting, and innovative products that drive growth and transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 rounded-lg flex items-center justify-center transition-all group"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-violet-400 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-violet-400 group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-violet-400 group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-violet-400 group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-violet-400 group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/20 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest news, updates, and insights delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Global Offices</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-violet-500/30 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-violet-400" />
                <h4 className="font-bold text-lg mb-2">{office.city}</h4>
                <p className="text-sm text-gray-400 mb-3">{office.address}</p>
                <a href={`tel:${office.phone}`} className="text-violet-400 hover:text-violet-300 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Sympharix. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="text-gray-400 hover:text-violet-400 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/cookies" className="text-gray-400 hover:text-violet-400 transition-colors">
                Cookie Policy
              </Link>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Certifications/Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="text-xs text-gray-500">ISO 27001 Certified</div>
            <div className="text-xs text-gray-500">SOC 2 Type II</div>
            <div className="text-xs text-gray-500">GDPR Compliant</div>
            <div className="text-xs text-gray-500">PCI DSS Level 1</div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600"></div>
    </footer>
  );
};

export default Footer;