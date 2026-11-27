'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TechCircuit: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden pointer-events-none select-none opacity-40 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bbf527" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#bbf527" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bbf527" stopOpacity="0.0" />
          </linearGradient>
          <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Static faint circuit traces */}
        <path
          d="M 50 100 L 250 100 L 320 180 L 580 180 L 650 100 L 950 100"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 100 300 L 350 300 L 420 220 L 700 220 L 760 300 L 900 300"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 200 50 L 200 350"
          stroke="rgba(255,255,255,0.04)"
          strokeDasharray="4 6"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 800 50 L 800 350"
          stroke="rgba(255,255,255,0.04)"
          strokeDasharray="4 6"
          strokeWidth="1"
          fill="none"
        />

        {/* Anime.js-style traveling pulses (stroke-dashoffset and moving particles) */}
        <motion.path
          d="M 50 100 L 250 100 L 320 180 L 580 180 L 650 100 L 950 100"
          stroke="url(#circuitGrad)"
          strokeWidth="2"
          fill="none"
          filter="url(#circuitGlow)"
          initial={{ pathLength: 0.2, pathOffset: 0 }}
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.path
          d="M 100 300 L 350 300 L 420 220 L 700 220 L 760 300 L 900 300"
          stroke="url(#circuitGrad)"
          strokeWidth="2"
          fill="none"
          filter="url(#circuitGlow)"
          initial={{ pathLength: 0.25, pathOffset: 1 }}
          animate={{ pathOffset: [1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Junction Nodes */}
        <circle cx="320" cy="180" r="3" fill="#bbf527" className="animate-pulse" />
        <circle cx="580" cy="180" r="3" fill="#bbf527" />
        <circle cx="420" cy="220" r="3" fill="#bbf527" />
        <circle cx="700" cy="220" r="3" fill="#bbf527" className="animate-pulse" />
      </svg>
    </div>
  );
};
