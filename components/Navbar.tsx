'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#solution' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-semibold text-white">Lead Rise</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-text-secondary hover:text-white transition-colors duration-200 hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#demo"
                className="px-6 py-3 bg-gradient-to-r from-teal to-teal-hover text-white text-sm font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-teal-glow hover:shadow-xl hover:shadow-teal-glow hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-4 bg-gradient-to-r from-teal to-teal-hover text-white text-base font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-teal-glow"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
