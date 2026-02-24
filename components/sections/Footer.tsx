'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer 
      className="py-10 md:py-16 px-6 border-t"
      style={{
        backgroundColor: 'var(--color-bg-page)',
        borderColor: 'var(--color-border-default)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Copyright */}
          <div>
            <div 
              className="text-xl font-semibold mb-3"
              style={{ color: 'var(--color-text-heading)' }}
            >
              Lead Rise
            </div>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-text-subtle)' }}
            >
              © 2026 Lead Rise. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150 focus-ring rounded px-1"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-heading)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
