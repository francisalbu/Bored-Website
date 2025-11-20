import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-offblack/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon rounded-full flex items-center justify-center">
            <span className="text-offblack font-black text-xl">B</span>
          </div>
          <span className="font-black text-xl tracking-tighter text-white">BORED TOURIST</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">
            How it Works
          </button>
          <button onClick={() => scrollToSection('vibe-check')} className="text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">
            Vibe Check
          </button>
          <button 
            onClick={() => scrollToSection('early-access')}
            className="bg-white text-offblack hover:bg-neon transition-colors px-6 py-2 font-black uppercase text-sm -skew-x-12"
          >
            <span className="block skew-x-12">Get Early Access</span>
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-offblack border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
          <button onClick={() => scrollToSection('features')} className="text-left text-xl font-bold uppercase hover:text-neon">
            How it Works
          </button>
          <button onClick={() => scrollToSection('vibe-check')} className="text-left text-xl font-bold uppercase hover:text-neon">
            Vibe Check
          </button>
           <button 
            onClick={() => scrollToSection('early-access')}
            className="bg-neon text-offblack px-6 py-3 font-black uppercase text-lg text-center"
          >
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
};