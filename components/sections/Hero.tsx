'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { ProductMockup } from '../ProductMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-[180px] pb-[120px] px-6 text-center overflow-hidden">
      {/* Hero gradient background */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      <div className="relative max-w-[960px] mx-auto">
        {/* Headline */}
        <h1 
          className="text-5xl md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6"
          style={{ color: 'var(--color-text-heading)' }}
        >
          Your leads go cold in{' '}
          <span style={{ color: 'var(--color-primary-teal)' }}>5 minutes</span>.{' '}
          <br className="hidden md:block" />
          We respond in{' '}
          <span style={{ color: 'var(--color-primary-teal)' }}>5 seconds</span>.
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto mb-10"
          style={{ color: 'var(--color-text-body)' }}
        >
          Lead Rise connects with your leads the moment they enquire — via SMS or AI voice call — asks the right questions, and books qualified meetings into your calendar. Automatically.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" href="#pricing">
            Start your free trial
          </Button>
          <Button variant="secondary" href="#how-it-works">
            Book a demo
          </Button>
        </div>

        {/* Hero Visual Element */}
        <div className="mt-16">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
};
