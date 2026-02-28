'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone } from 'lucide-react';

export function LiveDemoCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Countdown simulation (in real app, would trigger API call)
    let count = 30;
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(timer);
        setIsSubmitting(false);
        setCountdown(30);
      }
    }, 1000);
  };

  return (
    <section id="demo" className="relative py-4xl bg-gradient-to-b from-navy to-navy-elevated">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-2xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hear it for yourself
          </h2>
          <p className="text-xl text-text-secondary max-w-[700px] mx-auto leading-relaxed">
            Enter your number. Our AI will call you in 30 seconds and show you exactly how we handle leads.
          </p>
        </motion.div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto"
        >
          <div className="bg-navy-elevated border-2 border-teal rounded-3xl p-8 md:p-12 shadow-2xl shadow-teal/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Input Group */}
              <div className="flex gap-3">
                <select
                  disabled={isSubmitting}
                  className="px-4 py-4 bg-navy border border-white/10 rounded-xl text-white text-lg focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all disabled:opacity-50"
                >
                  <option value="+44">+44</option>
                  <option value="+1">+1</option>
                  <option value="+61">+61</option>
                </select>

                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 bg-navy border border-white/10 rounded-xl text-white text-lg placeholder:text-text-muted focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all disabled:opacity-50"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !phoneNumber}
                className="w-full px-8 py-5 bg-gradient-to-r from-teal to-teal-hover text-white text-xl font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-teal-glow hover:shadow-xl hover:shadow-teal-glow hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>
                  {isSubmitting ? `Calling you in ${countdown} seconds...` : 'Call Me Now'}
                </span>
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-sm text-text-muted text-center mt-6">
              No sales pitch. Just a demonstration of how fast and natural our AI responds.
            </p>
          </div>

          {/* Visual Element */}
          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-teal/10 border border-teal/30 rounded-full">
                <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                <span className="text-teal font-semibold">Preparing your demo call...</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
