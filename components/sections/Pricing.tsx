'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, TrendingUp } from 'lucide-react';

const features = [
  'Unlimited lead responses',
  'Phone + SMS, every lead',
  'AI-powered qualification',
  'Direct calendar booking',
  '24/7 coverage, no breaks',
  'Dedicated support team',
  'Custom setup for your business',
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-4xl bg-navy-charcoal">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            One price. Unlimited value.
          </h2>
          <p className="text-xl text-text-secondary">
            No hidden fees. No per-lead charges. No surprises.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto"
        >
          <div className="bg-gradient-to-b from-teal/[0.08] to-transparent border-2 border-teal rounded-3xl p-12 md:p-16 shadow-2xl shadow-teal/15">
            {/* Price */}
            <div className="text-center mb-12">
              <div className="flex items-baseline justify-center">
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold">£199</span>
                <span className="text-2xl md:text-3xl text-text-secondary ml-3">/month</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <Check className="w-6 h-6 text-teal flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* ROI Comparison */}
            <div className="bg-white/[0.05] rounded-xl p-6 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-xl font-semibold text-success">
                    £199/month → Average £4,800 additional revenue
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  That&apos;s a 24x return. Every single month.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#demo"
              className="block w-full px-8 py-5 bg-gradient-to-r from-teal to-teal-hover text-white text-lg font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-teal-glow hover:shadow-xl hover:shadow-teal-glow hover:-translate-y-1 transition-all duration-200 text-center"
            >
              Start Converting More Leads
            </a>
          </div>

          {/* Guarantee */}
          <p className="text-sm text-text-muted text-center mt-8">
            Cancel anytime. No contracts. No commitments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
