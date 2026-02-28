'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    number: '78%',
    label: 'of customers buy from the first business that responds',
    context: 'Speed is everything. Respond fast or lose.',
    color: 'text-warning',
  },
  {
    number: '57%',
    label: 'of businesses take over a week to respond',
    context: 'By then, your lead is long gone.',
    color: 'text-warning',
  },
  {
    number: '51%',
    label: 'of leads are never contacted at all',
    context: "That's money left on the table.",
    color: 'text-error',
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-4xl bg-navy-charcoal">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-2xl max-w-[800px] mx-auto"
        >
          Every minute you wait, your competitors are closing deals.
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-2xl">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-teal/5 to-transparent border border-teal/15 rounded-xl p-6 md:p-8"
            >
              <div className={`text-6xl md:text-7xl lg:text-8xl font-bold ${stat.color} mb-4`}>
                {stat.number}
              </div>
              <p className="text-base text-text-secondary mb-3 leading-relaxed">
                {stat.label}
              </p>
              <p className="text-sm text-text-muted">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-text-secondary text-center max-w-[700px] mx-auto leading-relaxed"
        >
          You&apos;re not slow. You&apos;re busy. But your leads don&apos;t care—they&apos;re calling someone else.
        </motion.p>
      </div>
    </section>
  );
}
