'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

type ResponseTime = 'under-5min' | 'under-1hour' | '1-24hours' | '1-7days' | 'never-some';

const responseTimeMultipliers: Record<ResponseTime, number> = {
  'under-5min': 1.0,
  'under-1hour': 1.3,
  '1-24hours': 1.8,
  '1-7days': 2.2,
  'never-some': 2.5,
};

const responseTimeLabels: Record<ResponseTime, string> = {
  'under-5min': 'Under 5 minutes',
  'under-1hour': 'Under 1 hour',
  '1-24hours': '1-24 hours',
  '1-7days': '1-7 days',
  'never-some': 'Never respond to some',
};

export function ROICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [monthlyLeads, setMonthlyLeads] = useState(50);
  const [responseTime, setResponseTime] = useState<ResponseTime>('1-24hours');
  const [avgDealValue, setAvgDealValue] = useState(3000);
  const [closeRate, setCloseRate] = useState(15);
  const [showAnnual, setShowAnnual] = useState(false);

  const [results, setResults] = useState({
    current: 0,
    improved: 0,
    additional: 0,
    percentage: 0,
  });

  useEffect(() => {
    const multiplier = responseTimeMultipliers[responseTime];
    const currentRevenue = monthlyLeads * (closeRate / 100) * avgDealValue;
    const improvedCloseRate = closeRate * multiplier;
    const improvedRevenue = monthlyLeads * (improvedCloseRate / 100) * avgDealValue;
    const additionalRevenue = improvedRevenue - currentRevenue;
    const percentage = currentRevenue > 0 ? ((additionalRevenue / currentRevenue) * 100) : 0;

    setResults({
      current: Math.round(currentRevenue),
      improved: Math.round(improvedRevenue),
      additional: Math.round(additionalRevenue),
      percentage: Math.round(percentage),
    });
  }, [monthlyLeads, responseTime, avgDealValue, closeRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="relative py-4xl bg-navy-charcoal">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Calculate what you&apos;re losing every month
          </h2>
          <p className="text-xl text-text-secondary">
            Be honest. See the real cost of slow follow-up.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy-elevated border border-teal/15 rounded-3xl p-8 md:p-16 shadow-2xl shadow-teal/10"
        >
          {/* Input Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Monthly Leads */}
            <div>
              <label className="block text-sm font-medium text-text-secondary uppercase tracking-widest mb-3">
                How many leads do you get per month?
              </label>
              <input
                type="number"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full px-4 py-4 bg-navy-charcoal border border-white/[0.08] rounded-lg text-white text-lg focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                placeholder="e.g., 50"
                min="1"
              />
            </div>

            {/* Response Time */}
            <div>
              <label className="block text-sm font-medium text-text-secondary uppercase tracking-widest mb-3">
                How long until you respond?
              </label>
              <select
                value={responseTime}
                onChange={(e) => setResponseTime(e.target.value as ResponseTime)}
                className="w-full px-4 py-4 bg-navy-charcoal border border-white/[0.08] rounded-lg text-white text-lg focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all cursor-pointer"
              >
                {Object.entries(responseTimeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Average Deal Value */}
            <div>
              <label className="block text-sm font-medium text-text-secondary uppercase tracking-widest mb-3">
                What&apos;s your average deal worth?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg">£</span>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-4 bg-navy-charcoal border border-white/[0.08] rounded-lg text-white text-lg focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="e.g., 3000"
                  min="0"
                />
              </div>
            </div>

            {/* Close Rate */}
            <div>
              <label className="block text-sm font-medium text-text-secondary uppercase tracking-widest mb-3">
                What % of leads do you close?
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full px-4 py-4 bg-navy-charcoal border border-white/[0.08] rounded-lg text-white text-lg focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="e.g., 15"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg">%</span>
              </div>
            </div>
          </div>

          {/* Calculation Display */}
          <div className="bg-white/[0.03] rounded-xl p-6 mb-8 font-mono text-sm text-text-muted">
            <div className="space-y-1">
              <div>Current monthly revenue: {formatCurrency(results.current)}</div>
              <div>With Lead Rise (60s response): {formatCurrency(results.improved)}</div>
              <div className="text-teal">
                Improvement: {formatCurrency(results.additional)} (+{results.percentage}%)
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="text-center mb-8">
            <p className="text-base text-text-secondary mb-4">
              You could be earning an additional
            </p>
            
            <motion.div
              key={results.additional}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-success my-4"
            >
              {showAnnual 
                ? formatCurrency(results.additional * 12)
                : formatCurrency(results.additional)
              }
            </motion.div>
            
            <p className="text-base text-text-secondary mb-4">
              {showAnnual ? 'per year' : 'per month'} with Lead Rise
            </p>

            {/* Annual Toggle */}
            <button
              onClick={() => setShowAnnual(!showAnnual)}
              className="text-sm text-teal hover:text-teal-hover underline transition-colors"
            >
              {showAnnual ? 'Show monthly projection' : 'Show annual projection'}
            </button>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#demo"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal to-teal-hover text-white text-lg font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-teal-glow hover:shadow-xl hover:shadow-teal-glow hover:-translate-y-1 transition-all duration-200"
            >
              <TrendingUp className="mr-2" size={20} />
              Book a Demo to Unlock This Revenue
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-text-muted text-center mt-6 max-w-[600px] mx-auto leading-relaxed">
            Calculation based on Harvard Business Review and InsideSales.com research showing faster 
            response times increase conversion by 30-250%. Your actual results may vary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
