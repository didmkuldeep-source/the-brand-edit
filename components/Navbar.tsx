
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenAI: () => void;
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
  currentPage: 'home' | 'about' | 'services' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAI, onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home') },
    { name: 'About Us', action: () => onNavigate('about') },
    { name: 'Services', action: () => onNavigate('services') },
    { name: 'Contact', action: () => onNavigate('contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div onClick={() => onNavigate('home')} className="cursor-pointer">
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={link.action}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                (link.name === 'About Us' && currentPage === 'about') || 
                (link.name === 'Home' && currentPage === 'home') ||
                (link.name === 'Services' && currentPage === 'services') ||
                (link.name === 'Contact' && currentPage === 'contact')
                  ? 'text-amber-500' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={onOpenAI}
            className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black rounded-full text-xs font-bold hover:bg-amber-400 transition-all active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <Sparkles size={14} />
            AI BRAND SURGEON
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                className={`text-lg font-bold uppercase tracking-widest text-left ${
                  (link.name === 'About Us' && currentPage === 'about') || 
                  (link.name === 'Home' && currentPage === 'home') ||
                  (link.name === 'Services' && currentPage === 'services') ||
                  (link.name === 'Contact' && currentPage === 'contact')
                    ? 'text-amber-500' 
                    : 'text-zinc-300'
                }`}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onOpenAI();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-4 bg-amber-500 text-black rounded-xl text-sm font-bold uppercase tracking-widest"
            >
              <Sparkles size={16} />
              AI BRAND SURGEON
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
