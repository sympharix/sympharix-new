import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({ name: 'India', code: 'IN' });
  const location = useLocation();

  const regions = [
    { name: 'India', code: 'IN' },
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
  ];

  const menuItems = [
    { label: 'Explore us', path: '/' },
    { label: 'Our Products', path: '/products' },
    { label: 'Who we are', path: '/about' },
    { label: 'Our Industry', path: '/industry' },
    { label: 'Careers', path: '/careers' },
    { label: 'Connect with us', path: '/contact' },
    
  ];

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="relative bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black px-3 py-2 rounded-lg border border-violet-500/30">
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    SYMPHARIX
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors"></div>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
              <Search className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <Globe className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium hidden sm:inline">{selectedRegion.name}</span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-1">
                    {regions.map((region, index) => (
                      <button
                        key={index}
                        onClick={() => handleRegionSelect(region)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${
                          selectedRegion.code === region.code ? 'text-violet-400 bg-white/5' : 'text-gray-300'
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {region.name}
                          {selectedRegion.code === region.code && <span className="text-violet-400">✓</span>}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-1 bg-zinc-900/50 backdrop-blur-sm">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;