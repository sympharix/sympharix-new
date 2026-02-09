import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import your logo - adjust path as needed
import logo from '../assets/Sympharix_logo.png';
// For demo, we'll create a placeholder logo component

const LogoPlaceholder = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#D946EF" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
    <path
      d="M12 20 L18 26 L28 14"
      stroke="url(#logoGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const Navbar = () => {
  const { t, currentRegion, regions, changeRegion, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  // State management
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  // Refs
  const languageRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Menu items with translations
  const menuItems = [
    { labelKey: 'exploreUs', path: '/', icon: '🏠' },
    { labelKey: 'ourProducts', path: '/products', icon: '📦' },
    { labelKey: 'whoWeAre', path: '/about', icon: '👥' },
    { labelKey: 'ourIndustry', path: '/industry', icon: '🏭' },
    { labelKey: 'careers', path: '/careers', icon: '💼' },
    { labelKey: 'connectWithUs', path: '/contact', icon: '📧' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsLanguageOpen(false);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleRegionSelect = (region) => {
    changeRegion(region);
    setIsLanguageOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-violet-500/5'
            : 'bg-black'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  
                  {/* Logo container */}
                  <div className="relative bg-gradient-to-br from-zinc-900 to-black p-2 rounded-xl border border-violet-500/20 group-hover:border-violet-500/40 transition-colors duration-300">
                    {/* Replace with your actual logo */}
                    { <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" /> }
                    <LogoPlaceholder />
                  </div>
                </div>
                
                {/* Company name - hidden on smallest screens */}
                <div className="hidden sm:block">
                  <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    SYMPHARIX
                  </span>
                  <span className="block text-[10px] text-gray-500 tracking-widest uppercase">
                    Innovation Hub
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="group relative"
                  >
                    <div className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}>
                      <span className="relative z-10">{t(item.labelKey)}</span>
                    </div>
                    
                    {/* Hover background */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10'
                        : 'bg-transparent group-hover:bg-white/5'
                    }`}></div>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 rounded-full ${
                      location.pathname === item.path
                        ? 'w-3/4 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                    }`}></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                  aria-label={t('search')}
                >
                  <Search className={`h-5 w-5 transition-colors duration-300 ${
                    isSearchOpen ? 'text-violet-400' : 'text-gray-400 group-hover:text-white'
                  }`} />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-violet-500/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={t('searchPlaceholder')}
                          className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                        />
                        {searchQuery && (
                          <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <ArrowRight className="h-4 w-4 text-white" />
                          </button>
                        )}
                      </div>
                      
                      {/* Quick links */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-xs text-gray-500 mb-2">Quick Links</p>
                        <div className="flex flex-wrap gap-2">
                          {['Products', 'Careers', 'Contact'].map((link) => (
                            <button
                              key={link}
                              type="button"
                              onClick={() => {
                                navigate(`/${link.toLowerCase()}`);
                                setIsSearchOpen(false);
                              }}
                              className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Region/Language Selector */}
              <div ref={languageRef} className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-3 py-2 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                >
                  <span className="text-xl">{currentRegion.flag}</span>
                  <Globe className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors hidden sm:block" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors hidden md:inline max-w-[100px] truncate">
                    {currentRegion.name}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Region Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-violet-500/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-3 border-b border-white/10">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        {t('selectRegion')}
                      </p>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto custom-scrollbar">
                      <div className="py-2">
                        {regions.map((region, index) => (
                          <button
                            key={index}
                            onClick={() => handleRegionSelect(region)}
                            className={`w-full text-left px-4 py-3 transition-all duration-200 hover:bg-white/5 ${
                              currentRegion.code === region.code
                                ? 'bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10'
                                : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{region.flag}</span>
                                <div>
                                  <p className={`text-sm font-medium ${
                                    currentRegion.code === region.code
                                      ? 'text-violet-400'
                                      : 'text-gray-300'
                                  }`}>
                                    {region.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {region.nativeName} • {region.currency}
                                  </p>
                                </div>
                              </div>
                              {currentRegion.code === region.code && (
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                aria-label={isMobileMenuOpen ? t('close') : t('menu')}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 rotate-45 bg-violet-400' : 'top-1 bg-gray-400 group-hover:bg-white'
                  }`}></span>
                  <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-gray-400 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'group-hover:bg-white'
                  }`}></span>
                  <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 -rotate-45 bg-violet-400' : 'top-5 bg-gray-400 group-hover:bg-white'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            ref={mobileMenuRef}
            className={`h-full overflow-y-auto transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-lg font-medium block">{t(item.labelKey)}</span>
                    {location.pathname === item.path && (
                      <span className="text-xs text-violet-400">Current page</span>
                    )}
                  </div>
                  {location.pathname === item.path && (
                    <div className="ml-auto w-1.5 h-8 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-6 border-t border-white/10">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50"
                  />
                </form>
              </div>

              {/* Current Region Display */}
              <div className="pt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-4">
                  {t('selectRegion')}
                </p>
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl">
                  <span className="text-3xl">{currentRegion.flag}</span>
                  <div>
                    <p className="text-white font-medium">{currentRegion.name}</p>
                    <p className="text-xs text-gray-400">{currentRegion.nativeName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;