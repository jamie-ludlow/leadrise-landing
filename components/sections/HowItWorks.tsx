'use client';

import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Connect your lead sources',
      description: 'Integrate with your website, CRM, or lead platform in minutes',
    },
    {
      number: 2,
      title: 'Set your qualification criteria',
      description: 'Define what makes a good lead for your business',
    },
    {
      number: 3,
      title: 'Watch meetings fill your calendar',
      description: 'Qualified leads automatically booked with zero effort',
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-[120px] md:py-[120px] px-6 border-t"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        borderColor: 'var(--color-border-default)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-heading)' }}
          >
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
            >
              {/* Step Number Circle */}
              <div 
                className="flex-shrink-0 w-16 h-16 md:w-16 md:h-16 rounded-full text-2xl md:text-[28px] font-bold flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-primary-teal)',
                  color: 'var(--color-bg-page)',
                }}
              >
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 
                  className="text-2xl font-semibold mb-2"
                  style={{ color: 'var(--color-text-heading)' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text-body)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
