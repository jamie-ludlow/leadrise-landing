'use client';

import React from 'react';
import { Button } from '../ui/Button';

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
        <div className="mt-16 max-w-[840px] mx-auto">
          <div 
            className="relative border rounded-xl shadow-2xl overflow-hidden animate-float"
            style={{
              backgroundColor: 'var(--color-bg-elevated)',
              borderColor: 'var(--color-border-default)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 40px rgba(42,191,171,0.08)',
            }}
          >
            <div 
              className="aspect-video flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom right, var(--color-bg-elevated), var(--color-bg-card))',
              }}
            >
              <div className="w-full h-full p-8 flex flex-col gap-4">
                <div 
                  className="h-12 rounded-lg w-3/4"
                  style={{ backgroundColor: 'rgba(10, 10, 15, 0.5)' }}
                />
                <div className="grid grid-cols-3 gap-4">
                  <div 
                    className="h-24 rounded-lg"
                    style={{ backgroundColor: 'rgba(10, 10, 15, 0.3)' }}
                  />
                  <div 
                    className="h-24 rounded-lg"
                    style={{ backgroundColor: 'rgba(10, 10, 15, 0.3)' }}
                  />
                  <div 
                    className="h-24 rounded-lg"
                    style={{ backgroundColor: 'rgba(10, 10, 15, 0.3)' }}
                  />
                </div>
                <div 
                  className="h-32 rounded-lg"
                  style={{ backgroundColor: 'rgba(10, 10, 15, 0.4)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
