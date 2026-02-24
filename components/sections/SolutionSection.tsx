'use client';

import React from 'react';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      number: '1',
      title: 'Instant Contact',
      description: 'SMS/AI voice within seconds',
    },
    {
      number: '2',
      title: 'Smart Qualification',
      description: 'AI asks prequalifying questions',
    },
    {
      number: '3',
      title: 'Auto-Booking',
      description: 'Qualified leads booked into calendar',
    },
  ];

  return (
    <section id="features" className="py-[120px] md:py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-heading)' }}
          >
            How Lead Rise solves this
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Three pillars of instant lead response
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative overflow-hidden border rounded-2xl p-10 transition-all duration-250"
              style={{
                background: 'linear-gradient(to bottom, var(--color-bg-elevated), var(--color-bg-card))',
                borderColor: 'var(--color-border-default)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
                e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(42,191,171,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, var(--color-bg-elevated), var(--color-bg-card))';
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon/Number Circle */}
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 text-2xl font-bold mb-6"
                style={{
                  backgroundColor: 'rgba(42, 191, 171, 0.08)',
                  borderColor: 'rgba(42, 191, 171, 0.25)',
                  color: 'var(--color-primary-teal)',
                }}
              >
                {pillar.number}
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-semibold mb-3"
                style={{ color: 'var(--color-text-heading)' }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-body)' }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
