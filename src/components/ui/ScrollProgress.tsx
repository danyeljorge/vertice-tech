'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2.5px] pointer-events-none overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-primary-container origin-left shadow-[0_0_12px_rgba(187,245,39,0.9)]"
      />
    </div>
  );
};
