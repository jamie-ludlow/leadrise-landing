'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does Lead Rise respond so fast?',
    answer: "We integrate directly with your lead sources. The moment a lead comes in, our system triggers an instant SMS and phone call. No delays, no manual steps.",
  },
  {
    question: 'Does it sound like a robot?',
    answer: "No. Our AI uses natural language and conversational flow. Most leads assume they're talking to a real person on your team.",
  },
  {
    question: "What if the lead has questions I need to answer?",
    answer: "We qualify them and book the appointment. You handle the close. If they have technical questions, we'll note them and you can address them on the call.",
  },
  {
    question: 'Can I customise what the AI says?',
    answer: "Absolutely. During setup, we work with you to define your tone, key questions, and booking criteria. It's bespoke to your business.",
  },
  {
    question: 'What happens if the lead wants to speak to a human right away?',
    answer: "We can transfer them to you live, or we can book an immediate callback. Fully configurable based on your availability.",
  },
  {
    question: 'How do you integrate with my calendar?',
    answer: "We support Google Calendar, Outlook, and most major platforms. We'll set it up during onboarding—zero hassle for you.",
  },
  {
    question: 'What if I get 500 leads a month? Is it still £199?',
    answer: "Yes. Unlimited leads, one price. No surprises.",
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Yes. No contracts, no lock-in. If it's not working for you, cancel anytime.",
  },
  {
    question: 'How long does setup take?',
    answer: "Usually 24-48 hours. We handle all the integrations and testing. You just provide access to your lead sources and calendar.",
  },
  {
    question: 'What industries do you work with?',
    answer: "We started with estate agents, but we work with any appointment-based business—mortgage brokers, recruitment, legal, coaching, B2B sales, etc.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-4xl bg-navy">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-3xl"
        >
          Questions? We&apos;ve got answers.
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-navy-elevated border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-teal' : 'border-white/[0.06] hover:border-teal/50'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-teal transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-text-secondary group-hover:text-teal transition-colors" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 border-t border-white/[0.06] pt-4">
                      <p className="text-base text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
