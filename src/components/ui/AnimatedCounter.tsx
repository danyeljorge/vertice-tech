'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prevValueRef = useRef(0);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const from = prevValueRef.current;
    // Anime.js / Motion-inspired exponential deceleration curve for numbers
    const controls = animate(from, value, {
      duration: from === 0 ? duration : Math.min(duration, 0.75),
      ease: [0.16, 1, 0.3, 1], // easeOutExpo equivalent
      onUpdate: (latest) => {
        prevValueRef.current = latest;
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString('pt-BR');

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
