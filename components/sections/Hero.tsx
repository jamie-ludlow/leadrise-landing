'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.08] via-transparent to-transparent" />
      
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 py-32 md:py-40">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 max-w-[700px]">
              Never miss a lead again.
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-[600px]">
              We respond to every lead in under 60 seconds—by phone and SMS—qualify them using AI, and book appointments straight into your diary. You focus on closing deals. We handle the rest.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="group px-10 py-5 bg-gradient-to-r from-teal to-teal-hover text-white text-lg font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-teal-glow hover:shadow-xl hover:shadow-teal-glow hover:-translate-y-1 transition-all duration-200 text-center"
              >
                See It In Action
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a
                href="#roi-calculator"
                className="px-10 py-5 bg-transparent border-2 border-white/20 text-white text-lg font-semibold uppercase tracking-wider rounded-lg hover:border-teal hover:text-teal transition-all duration-200 text-center"
              >
                <Calculator className="inline-block mr-2" size={20} />
                Calculate Your ROI
              </a>
            </div>
          </motion.div>

          {/* Visual - 40% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:col-span-2"
          >
            <div className="relative">
              {/* Animated mockup placeholder */}
              <div className="relative bg-navy-elevated border border-white/[0.06] rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {/* Lead notification */}
                  <div className="bg-navy-charcoal border border-teal/30 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal rounded-full animate-ping" />
                      <div className="flex-1">
                        <div className="h-2 bg-teal/30 rounded w-32 mb-2" />
                        <div className="h-2 bg-white/10 rounded w-24" />
                      </div>
                    </div>
                  </div>

                  {/* Response indicator */}
                  <div className="bg-navy-charcoal rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center">
                        <span className="text-teal text-xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-28 mb-2" />
                        <div className="h-2 bg-white/10 rounded w-20" />
                      </div>
                    </div>
                    <div className="text-teal text-2xl font-bold text-center">
                      &lt; 60s
                    </div>
                  </div>

                  {/* Appointment booked */}
                  <div className="bg-navy-charcoal border border-success/30 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success/20 rounded flex items-center justify-center">
                        <span className="text-success text-lg">✓</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-36 mb-2" />
                        <div className="h-2 bg-white/10 rounded w-28" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal/20 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
