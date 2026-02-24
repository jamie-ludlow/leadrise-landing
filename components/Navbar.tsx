'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.8)',
        borderColor: 'var(--color-border-default)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold tracking-tight focus-ring rounded"
            style={{ color: 'var(--color-text-heading)' }}
          >
            Lead Rise
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium transition-colors duration-150 focus-ring rounded px-2 py-1"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-heading)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="secondary" href="#pricing">
              Start free trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus-ring rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-heading)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t"
            style={{ borderColor: 'var(--color-border-default)' }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium transition-colors duration-150 py-2"
                  style={{ color: 'var(--color-text-muted)' }}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-heading)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" href="#pricing" className="w-full">
                Start free trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
