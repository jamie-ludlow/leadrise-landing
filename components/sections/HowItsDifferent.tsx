'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Setup',
    others: 'You configure, integrate, test',
    leadrise: 'We handle everything',
  },
  {
    feature: 'Response',
    others: 'Text-only chatbot',
    leadrise: 'Real phone call + SMS',
  },
  {
    feature: 'Voice',
    others: 'Robotic, scripted',
    leadrise: 'Natural, conversational AI',
  },
  {
    feature: 'Qualification',
    others: 'Basic form logic',
    leadrise: 'Intelligent questioning',
  },
  {
    feature: 'Booking',
    others: 'Manual calendar link',
    leadrise: 'Direct calendar integration',
  },
  {
    feature: 'Ongoing',
    others: 'You manage, update, fix',
    leadrise: 'We monitor, improve, adapt',
  },
  {
    feature: 'Support',
    others: 'Ticket system, slow',
    leadrise: 'Dedicated team, instant',
  },
  {
    feature: 'Feel',
    others: 'Tool you operate',
    leadrise: 'Team you hired',
  },
];

export function HowItsDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-4xl bg-navy-charcoal">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-2xl"
        >
          We&apos;re not software. We&apos;re your team.
        </motion.h2>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy-elevated border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 bg-navy border-b border-white/[0.06]">
            <div className="hidden md:block" />
            <div className="text-center">
              <span className="text-sm font-semibold text-text-muted uppercase tracking-widest">
                DIY Tools & Chatbots
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-teal uppercase tracking-widest">
                Lead Rise
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="grid md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="font-semibold md:col-span-1">
                  {comparison.feature}
                </div>

                {/* Others */}
                <div className="flex items-center space-x-2 text-text-muted md:col-span-1">
                  <X className="w-4 h-4 text-text-muted flex-shrink-0" />
                  <span>{comparison.others}</span>
                </div>

                {/* Lead Rise */}
                <div className="flex items-center space-x-2 md:col-span-1">
                  <Check className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="font-semibold">{comparison.leadrise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-semibold text-center mt-2xl"
        >
          Stop managing tools. Start closing deals.
        </motion.p>
      </div>
    </section>
  );
}
