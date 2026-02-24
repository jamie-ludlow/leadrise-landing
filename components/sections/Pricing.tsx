'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 149,
      description: 'Perfect for getting started',
      features: [
        '100 leads/month',
        'SMS + AI voice',
        'Basic qualification',
        'Calendar integration',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: 299,
      description: 'For growing businesses',
      features: [
        '500 leads/month',
        'SMS + AI voice',
        'Advanced qualification',
        'CRM integration',
        'Priority support',
        'Custom workflows',
      ],
      popular: true,
    },
    {
      name: 'Scale',
      price: 499,
      description: 'For high-volume teams',
      features: [
        'Unlimited leads',
        'SMS + AI voice',
        'Custom AI training',
        'Multi-team support',
        'Dedicated account manager',
        'API access',
      ],
      popular: false,
    },
  ];

  return (
    <section 
      id="pricing" 
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
            Simple, transparent pricing
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Start free, scale as you grow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-10 transition-all duration-200 hover:-translate-y-1 ${
                tier.popular ? 'border-2 md:scale-105' : 'border'
              }`}
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderColor: tier.popular ? 'var(--color-primary-teal)' : 'var(--color-border-default)',
                boxShadow: tier.popular ? '0 20px 60px rgba(42,191,171,0.06)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                if (!tier.popular) {
                  e.currentTarget.style.boxShadow = 'none';
                } else {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(42,191,171,0.06)';
                }
              }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1.5 rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-primary-teal)',
                    color: 'var(--color-bg-page)',
                  }}
                >
                  Most popular
                </div>
              )}

              {/* Tier Name */}
              <div 
                className="text-sm font-semibold mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {tier.name}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span 
                  className="font-mono text-3xl font-bold align-super"
                  style={{ color: 'var(--color-text-heading)' }}
                >
                  £
                </span>
                <span 
                  className="font-mono text-5xl font-bold"
                  style={{ color: 'var(--color-text-heading)' }}
                >
                  {tier.price}
                </span>
                <span 
                  className="text-base font-normal"
                  style={{ color: 'var(--color-text-subtle)' }}
                >
                  /mo
                </span>
              </div>

              {/* Description */}
              <p 
                className="text-sm mb-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--color-primary-teal)' }}
                    />
                    <span 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-body)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
