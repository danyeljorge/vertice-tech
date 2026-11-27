'use client';

import React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.4,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Emil Kowalski rule: subtle displacement (12-16px) instead of heavy floaty jumps
  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 16 };
      case 'down':
        return { opacity: 0, y: -16 };
      case 'left':
        return { opacity: 0, x: 16 };
      case 'right':
        return { opacity: 0, x: -16 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      // Emil's signature fluid ease-out curve [0.16, 1, 0.3, 1]
      transition={{
        duration: shouldReduceMotion ? 0.15 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
