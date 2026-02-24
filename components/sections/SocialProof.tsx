'use client';

import React from 'react';

export const SocialProof: React.FC = () => {
  const industries = [
    'Estate agents',
    'Mortgage brokers',
    'Home improvement',
    'Professional services',
  ];

  return (
    <section className="py-[120px] md:py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Stat Highlight */}
        <div className="text-center mb-16">
          <div 
            className="font-mono text-5xl md:text-[56px] font-bold leading-tight mb-4"
            style={{ color: 'var(--color-primary-teal)' }}
          >
            21x
          </div>
          <p 
            className="text-base"
            style={{ color: 'var(--color-text-muted)' }}
          >
            more likely to qualify when you respond within 5 minutes
          </p>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-[800px] mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-150"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderColor: 'var(--color-border-default)',
                color: 'var(--color-text-body)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(42, 191, 171, 0.25)';
                e.currentTarget.style.backgroundColor = '#1A1A1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
              }}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
