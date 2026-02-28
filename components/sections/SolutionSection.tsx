'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bell, Zap, MessageSquare, CalendarCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Bell,
    title: 'Lead comes in',
    description: 'From your website, Facebook, Rightmove—anywhere you get leads.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'We respond instantly',
    description: 'SMS and phone call within 60 seconds. Every single time.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'AI qualifies the lead',
    description: 'Natural conversation. We ask the right questions. No scripts, no robotic responses.',
  },
  {
    number: '04',
    icon: CalendarCheck,
    title: 'Appointment booked',
    description: 'Straight into your calendar. Qualified, confirmed, ready for you to close.',
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="relative py-4xl bg-navy">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-3xl"
        >
          We handle everything. You close deals.
        </motion.h2>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2xl">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-navy-elevated border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-teal/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300"
              >
                {/* Icon with glow */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-teal/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-teal" />
                  </div>
                </div>

                {/* Step Number */}
                <div className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Emphasis */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl font-semibold text-teal text-center max-w-[800px] mx-auto leading-relaxed"
        >
          You don&apos;t manage anything. You don&apos;t learn software. We&apos;re your team, not your tool.
        </motion.p>
      </div>
    </section>
  );
}
