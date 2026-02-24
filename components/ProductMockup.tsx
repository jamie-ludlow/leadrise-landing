'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ProductMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[900px] mx-auto perspective-1000">
      {/* Ambient glow effect */}
      <div 
        className="absolute inset-0 blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, var(--color-primary-teal), transparent 70%)',
        }}
      />

      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          {/* Phone frame */}
          <div 
            className="relative w-[280px] rounded-[36px] p-3"
            style={{
              backgroundColor: '#1c1c1e',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.1),
                0 20px 60px rgba(0,0,0,0.5),
                0 0 40px rgba(42,191,171,0.15)
              `,
            }}
          >
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#1c1c1e] rounded-b-[16px] z-10" />
            
            {/* Screen */}
            <div 
              className="relative rounded-[28px] overflow-hidden"
              style={{
                backgroundColor: 'var(--color-bg-page)',
                height: '580px',
              }}
            >
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-6 text-[11px] font-medium z-20">
                <span style={{ color: 'var(--color-text-heading)' }}>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-3 border border-white rounded-sm opacity-75" />
                  <div className="w-2 h-2 bg-white rounded-full opacity-75" />
                </div>
              </div>

              {/* App header */}
              <div className="absolute top-[44px] left-0 right-0 px-5 py-4 border-b" style={{ borderColor: 'var(--color-border-default)' }}>
                <h2 className="text-lg font-semibold" style={{ color: 'var(--color-text-heading)' }}>Lead Rise</h2>
              </div>

              {/* Content area */}
              <div className="absolute top-[100px] left-0 right-0 bottom-0 px-4 py-3 overflow-hidden">
                
                {/* Incoming Lead Notification */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-4 p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                    borderColor: 'var(--color-primary-teal)',
                    boxShadow: '0 0 20px rgba(42,191,171,0.2)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary-teal)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-heading)' }}>New Lead</span>
                        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Just now</span>
                      </div>
                      <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-body)' }}>Sarah Johnson</p>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>3 bed semi, Guildford</p>
                    </div>
                  </div>
                </motion.div>

                {/* SMS Conversation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-3"
                >
                  <div className="flex justify-start">
                    <div 
                      className="max-w-[75%] px-4 py-2.5 rounded-[18px] rounded-tl-sm"
                      style={{
                        backgroundColor: 'var(--color-bg-card)',
                      }}
                    >
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                        Hi! I'm interested in 3 bed properties in Guildford
                      </p>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex justify-end"
                  >
                    <div 
                      className="max-w-[85%] px-4 py-2.5 rounded-[18px] rounded-tr-sm"
                      style={{
                        backgroundColor: 'var(--color-primary-teal)',
                      }}
                    >
                      <p className="text-xs leading-relaxed text-white">
                        Hi Sarah, thanks for your enquiry about 3 bed properties in Guildford. I'm available for a quick call — when works best?
                      </p>
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    className="flex justify-start"
                  >
                    <div 
                      className="px-4 py-3 rounded-[18px] rounded-tl-sm flex items-center gap-1"
                      style={{ backgroundColor: 'var(--color-bg-card)' }}
                    >
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-text-muted)' }}
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, delay: 0.2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-text-muted)' }}
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, delay: 0.4, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-text-muted)' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calendar confirmation card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div 
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: 'var(--color-bg-elevated)',
              borderColor: 'var(--color-border-default)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Success indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 200 }}
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: 'rgba(42, 191, 171, 0.15)',
                border: '2px solid var(--color-primary-teal)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="3" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>

            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Meeting Booked</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Automatically added to your calendar
            </p>

            {/* Calendar event details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(42, 191, 171, 0.1)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-heading)' }}>Tomorrow, 2:00 PM</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>30 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(42, 191, 171, 0.1)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-heading)' }}>Sarah Johnson</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>+44 7700 900123</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(42, 191, 171, 0.1)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-heading)' }}>3 bed semi</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Guildford area</p>
                </div>
              </div>
            </div>

            {/* Stats pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-6 pt-4 border-t flex items-center justify-between"
              style={{ borderColor: 'var(--color-border-default)' }}
            >
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Response time</div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-primary-teal)' }}
                />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-primary-teal)' }}>4.8 seconds</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
