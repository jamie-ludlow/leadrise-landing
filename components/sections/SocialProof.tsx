'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We used to lose half our leads because we couldn't keep up. Now every single one gets a call within a minute. Game-changer.",
    name: "Sarah Mitchell",
    title: "Director, Mitchell & Co Estate Agents",
    avatar: "SM",
  },
  {
    quote: "I was sceptical about AI, but this doesn't feel robotic at all. Our leads think they're talking to one of our team. Conversion is up 40%.",
    name: "James Patterson",
    title: "Founder, Patterson Properties",
    avatar: "JP",
  },
  {
    quote: "£199 a month? I make that back from one extra booking. Best investment we've made.",
    name: "Rachel Simmons",
    title: "Director, Simmons Estate Agency",
    avatar: "RS",
  },
];

const stats = [
  { number: "60s", label: "Average response time" },
  { number: "40%+", label: "Increase in conversions" },
  { number: "24/7", label: "Coverage, no breaks" },
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-4xl bg-navy">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-3xl"
        >
          Trusted by estate agents who close more deals
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-3xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-elevated border border-white/[0.06] rounded-2xl p-10 shadow-xl shadow-black/20"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-teal mb-6" />

              {/* Quote Text */}
              <p className="text-lg italic leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-6" />

              {/* Attribution */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-teal font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-12 md:gap-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
