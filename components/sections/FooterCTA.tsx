'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-[120px] md:py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div 
          className="max-w-[800px] mx-auto text-center border rounded-2xl px-8 md:px-12 py-12 md:py-16"
          style={{
            background: 'linear-gradient(to bottom, var(--color-bg-elevated), var(--color-bg-card))',
            borderColor: 'var(--color-border-default)',
          }}
        >
          {/* Headline */}
          <h2 
            className="text-3xl md:text-[40px] font-bold leading-tight mb-4"
            style={{ color: 'var(--color-text-heading)' }}
          >
            Start converting more leads today
          </h2>

          {/* Subheadline */}
          <p 
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'var(--color-text-body)' }}
          >
            No credit card required. 14-day free trial.
          </p>

          {/* CTA */}
          <Button variant="primary" href="#pricing">
            Start your free trial
          </Button>
        </div>
      </div>
    </section>
  );
};
