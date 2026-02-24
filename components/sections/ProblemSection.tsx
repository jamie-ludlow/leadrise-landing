'use client';

import React from 'react';
import { Card } from '../ui/Card';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    { stat: '47hr', description: 'Average response time' },
    { stat: '80%', description: 'Conversion drop after 5 minutes' },
    { stat: 'Lost', description: 'Competitors winning on speed' },
  ];

  return (
    <section 
      className="py-[120px] md:py-[120px] px-6 border-t"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        borderColor: 'var(--color-border-default)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Leading Stat */}
        <h2 
          className="text-3xl md:text-[40px] font-bold leading-tight text-center mb-16"
          style={{ color: 'var(--color-text-heading)' }}
        >
          <span 
            className="font-mono"
            style={{ color: 'var(--color-primary-teal)' }}
          >
            78%
          </span>{' '}
          of customers buy from whoever responds first.
        </h2>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="text-center transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div 
                className="font-mono text-4xl md:text-5xl font-bold leading-tight mb-4"
                style={{ color: 'var(--color-primary-teal)' }}
              >
                {point.stat}
              </div>
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-body)' }}
              >
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
