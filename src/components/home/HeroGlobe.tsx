'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { Radio, Activity } from 'lucide-react';
import { CLOUD_REGIONS, REGION_ORDER, type RegionKey } from '@/data/regions';
import { useToast } from '@/components/ui/Toast';

interface HeroGlobeProps {
  selectedRegion: RegionKey;
  onSelectRegion: (region: RegionKey) => void;
  isSimulating?: boolean;
  pulseCount: number;
  onTriggerPulse: () => void;
}

interface DataArc {
  id: string;
  from: RegionKey;
  to: RegionKey;
  path: string;
  duration: number;
  delay: number;
}

export const HeroGlobe: React.FC<HeroGlobeProps> = ({
  selectedRegion,
  onSelectRegion,
  isSimulating = false,
  pulseCount,
  onTriggerPulse,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const toast = useToast();

  const [isHovered, setIsHovered] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: 38, y: 32 });
  const [localShockwaveKey, setLocalShockwaveKey] = useState(0);

  const activeRegion = CLOUD_REGIONS[selectedRegion];

  // Physical 3D tilt springs (motiondivision/motion spring physics)
  const rawRotateX = useMotionValue(activeRegion.tiltBias.rotateX);
  const rawRotateY = useMotionValue(activeRegion.tiltBias.rotateY);
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 20, mass: 0.5 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 20, mass: 0.5 });

  // Smoothly bias 3D orientation toward the focused cloud region
  useEffect(() => {
    if (!isHovered && !shouldReduceMotion) {
      rawRotateX.set(activeRegion.tiltBias.rotateX);
      rawRotateY.set(activeRegion.tiltBias.rotateY);
    }
  }, [activeRegion, isHovered, rawRotateX, rawRotateY, shouldReduceMotion]);

  // Trigger electromagnetic shockwave when pulse or simulation fires
  useEffect(() => {
    if (pulseCount > 0) {
      setLocalShockwaveKey((k) => k + 1);
    }
  }, [pulseCount]);

  // Deterministic aerospace compass bezel ticks (rounded to 2 decimals for zero hydration drift)
  const bezelTicks = useMemo(() => {
    const count = 72;
    const cx = 150;
    const cy = 150;
    const outerR = 148;
    return Array.from({ length: count }, (_, i) => {
      const angleRad = ((i * 360) / count - 90) * (Math.PI / 180);
      const isMajor = i % 18 === 0;
      const isMid = i % 6 === 0 && !isMajor;
      const innerR = isMajor ? 140 : isMid ? 143 : 145;
      return {
        key: i,
        isMajor,
        isMid,
        x1: (cx + innerR * Math.cos(angleRad)).toFixed(2),
        y1: (cy + innerR * Math.sin(angleRad)).toFixed(2),
        x2: (cx + outerR * Math.cos(angleRad)).toFixed(2),
        y2: (cy + outerR * Math.sin(angleRad)).toFixed(2),
      };
    });
  }, []);

  // Curved great-circle SVG data arcs connecting the 3 cloud nodes on the globe
  const dataArcs: DataArc[] = useMemo(() => {
    const sa = CLOUD_REGIONS.sa.globePos;
    const us = CLOUD_REGIONS.us.globePos;
    const eu = CLOUD_REGIONS.eu.globePos;
    return [
      {
        id: 'sa-us',
        from: 'sa',
        to: 'us',
        path: `M ${sa.x} ${sa.y} Q 42 52 ${us.x} ${us.y}`,
        duration: 2.8,
        delay: 0,
      },
      {
        id: 'us-eu',
        from: 'us',
        to: 'eu',
        path: `M ${us.x} ${us.y} Q 62 15 ${eu.x} ${eu.y}`,
        duration: 3.1,
        delay: 0.7,
      },
      {
        id: 'sa-eu',
        from: 'sa',
        to: 'eu',
        path: `M ${sa.x} ${sa.y} Q 85 47 ${eu.x} ${eu.y}`,
        duration: 3.4,
        delay: 1.3,
      },
    ];
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    rawRotateY.set(nx * 20);
    rawRotateX.set(-ny * 20);
    setSheenPos({
      x: 50 + nx * 62,
      y: 50 + ny * 62,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(activeRegion.tiltBias.rotateX);
    rawRotateY.set(activeRegion.tiltBias.rotateY);
    setSheenPos({ x: 38, y: 32 });
  };

  const handleRegionClick = (key: RegionKey, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const info = CLOUD_REGIONS[key];
    onSelectRegion(key);
    onTriggerPulse();
    toast.info(
      `Nó Global Sincronizado: ${info.city}`,
      `Roteamento edge calibrado em ${info.code} (${info.ping})`
    );
  };

  const handleManualPulse = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    onTriggerPulse();
    toast.success(
      `Pulso Global Disparado (${activeRegion.code})`,
      `3/3 regiões respondendo em ${activeRegion.ping} • 99.98% SLA`
    );
  };

  return (
    <motion.div
      // Emil Kowalski discipline: subtle scale entry (0.94 -> 1), never scale(0)
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center w-full select-none"
    >
      {/* Main Horizontal Assembly: Left HUD + Monumental 3D Globe + Right HUD */}
      <div className="relative flex items-center justify-center gap-6 xl:gap-10 w-full max-w-6xl mx-auto">
        {/* LEFT FLANKING HUD (Large Screens) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col items-end text-right w-52 xl:w-56 shrink-0 relative z-20"
        >
          {/* Delicate connecting trace line to globe */}
          <div className="absolute top-1/2 -right-6 xl:-right-10 w-6 xl:w-10 h-px bg-gradient-to-r from-white/15 via-primary-container/40 to-primary-container/75 pointer-events-none" />

          <div className="w-full p-4 rounded-2xl bg-[#111411]/85 backdrop-blur-xl border border-white/[0.09] shadow-2xl hover:border-primary-container/35 transition-colors duration-200">
            <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-primary-container mb-2">
              <span>Edge Mesh Ativo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-sm font-bold text-white flex items-center justify-end gap-1.5">
                  <span>{activeRegion.city}</span>
                  <span>{activeRegion.flag}</span>
                </div>
                <div className="text-[11px] text-secondary font-mono mt-0.5">
                  {activeRegion.coordsLabel}
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono">
                  <span className="text-secondary">{activeRegion.code}</span>
                  <span className="text-primary-container font-bold tabular-nums">
                    {activeRegion.ping}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CENTERPIECE: MONUMENTAL 3D INTERACTIVE DANTER EARTH GLOBE */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleManualPulse}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleManualPulse();
            }
          }}
          aria-label="Globo interativo da infraestrutura global Danter. Clique para disparar pulso na rede ou selecione uma região."
          className="relative w-[330px] h-[330px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] lg:w-[530px] lg:h-[530px] xl:w-[580px] xl:h-[580px] shrink-0 flex items-center justify-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-4 focus-visible:ring-offset-[#090c09] rounded-full"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Dual-Tone Atmospheric Aura (Lime Brand + Earth Cyan) */}
          <div
            className={`absolute -inset-6 rounded-full pointer-events-none transition-all duration-300 animate-globe-aura ${
              isSimulating ? 'scale-105 opacity-100' : ''
            }`}
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(187, 245, 39, 0.18) 0%, rgba(56, 189, 248, 0.14) 44%, transparent 72%)',
              filter: 'blur(32px)',
            }}
          />

          {/* Outer Aerospace Compass Bezel HUD (SVG) */}
          <svg
            viewBox="0 0 300 300"
            className="absolute -inset-2 sm:-inset-3 w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] sm:h-[calc(100%+1.5rem)] pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            <circle
              cx="150"
              cy="150"
              r="148"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.6"
            />
            {/* Slowly rotating precision degree ticks */}
            <g className="origin-center animate-globe-spin-slow">
              {bezelTicks.map((t) => (
                <line
                  key={t.key}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  stroke={
                    t.isMajor
                      ? '#bbf527'
                      : t.isMid
                      ? 'rgba(187, 245, 39, 0.45)'
                      : 'rgba(255, 255, 255, 0.12)'
                  }
                  strokeWidth={t.isMajor ? '1.3' : '0.65'}
                  strokeLinecap="round"
                />
              ))}
            </g>

            {/* Counter-rotating segmented telemetry arc */}
            <g className="origin-center animate-globe-spin-reverse">
              <circle
                cx="150"
                cy="150"
                r="141"
                fill="none"
                stroke="#bbf527"
                strokeOpacity={isSimulating || isHovered ? '0.6' : '0.28'}
                strokeWidth="0.9"
                strokeDasharray="22 72 8 72"
                strokeLinecap="round"
                className="transition-opacity duration-200"
              />
            </g>
          </svg>

          {/* Expanding Electromagnetic Shockwave on Pulse / Simulation */}
          <AnimatePresence>
            {localShockwaveKey > 0 && (
              <motion.div
                key={localShockwaveKey}
                initial={{ opacity: 0.85, scale: 0.78 }}
                animate={{ opacity: 0, scale: 1.24 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-4 rounded-full border border-primary-container/80 shadow-[0_0_28px_rgba(187,245,39,0.55)] pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* 3D Interactive Tilting & Floating Planetary Core */}
          <motion.div
            style={{
              rotateX: shouldReduceMotion ? 0 : rotateX,
              rotateY: shouldReduceMotion ? 0 : rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full flex items-center justify-center animate-globe-float"
          >
            {/* 3D Tilted Orbital Ring 1: Equatorial Danter Lime Satellite Track */}
            <div
              className="absolute -inset-2 pointer-events-none"
              style={{
                transform: 'rotateX(71deg) rotateZ(-15deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full rounded-full border border-primary-container/35 animate-globe-spin-medium relative">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_16px_rgba(187,245,39,1),0_0_32px_rgba(187,245,39,0.85)]" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/85 shadow-[0_0_12px_rgba(255,255,255,0.95)]" />
              </div>
            </div>

            {/* 3D Tilted Orbital Ring 2: Counter-Rotating Cyan Polar Track */}
            <div
              className="absolute -inset-1 pointer-events-none"
              style={{
                transform: 'rotateX(74deg) rotateZ(30deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full rounded-full border border-cyan-400/25 border-dashed animate-globe-spin-reverse relative">
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]" />
              </div>
            </div>

            {/* THE UPLOADED EARTH GLOBE (True RGBA Transparent WebP — Zero Black Background!) */}
            <div className="relative w-full h-full rounded-full flex items-center justify-center">
              <img
                src="/images/danter-globe-alpha.webp"
                alt="Globo terrestre conectado à rede neural e nuvem Danter"
                width={1024}
                height={1024}
                draggable={false}
                className={`w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.22)] transition-transform duration-300 ease-out ${
                  isHovered ? 'scale-[1.025]' : 'scale-100'
                }`}
              />

              {/* Subtle Atmospheric Rim & Specular Cursor Sheen (Clipped to Exact Planet Limb) */}
              <div
                className="absolute inset-[9%] rounded-full pointer-events-none overflow-hidden"
                style={{
                  boxShadow:
                    'inset 0 0 36px rgba(56, 189, 248, 0.2), inset 0 0 18px rgba(187, 245, 39, 0.14)',
                }}
              >
                {/* Dynamic specular highlight gliding across the curvature with mouse */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 0.5 : 0.18,
                    background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(187, 245, 39, 0.24) 0%, rgba(255, 255, 255, 0.08) 28%, transparent 62%)`,
                  }}
                />

                {/* Subtle Holographic Radar Sweep */}
                <div
                  className="absolute inset-0 animate-globe-radar opacity-25"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgba(187, 245, 39, 0.30) 0deg, rgba(187, 245, 39, 0.0) 48deg, transparent 360deg)',
                  }}
                />
              </div>

              {/* ON-GLOBE ANIMATED SVG DATA ARCS (Anime.js-inspired traveling light packets) */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                aria-hidden="true"
              >
                <defs>
                  <filter id="globeArcGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="0.95" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {dataArcs.map((arc) => {
                  const isHighlighted =
                    arc.from === selectedRegion || arc.to === selectedRegion;
                  return (
                    <g key={arc.id}>
                      <path
                        d={arc.path}
                        fill="none"
                        stroke="#bbf527"
                        strokeOpacity={isHighlighted ? 0.52 : 0.2}
                        strokeWidth={isHighlighted ? 0.45 : 0.28}
                        strokeDasharray="1.4 1.4"
                        className="transition-all duration-200"
                      />
                      {!shouldReduceMotion && (
                        <motion.path
                          d={arc.path}
                          fill="none"
                          stroke="#bbf527"
                          strokeWidth={isHighlighted || isSimulating ? 0.9 : 0.55}
                          strokeLinecap="round"
                          filter="url(#globeArcGlow)"
                          initial={{ pathLength: 0.22, pathOffset: 0, opacity: 0.9 }}
                          animate={{ pathOffset: [0, 1] }}
                          transition={{
                            duration: isSimulating ? arc.duration * 0.5 : arc.duration,
                            delay: arc.delay,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* INTERACTIVE CLICKABLE CLOUD NODES PINNED DIRECTLY ON THE CONTINENTS */}
              {REGION_ORDER.map((key) => {
                const region = CLOUD_REGIONS[key];
                const isSelected = selectedRegion === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={(e) => handleRegionClick(key, e)}
                    aria-label={`Selecionar região ${region.label} (${region.ping})`}
                    style={{
                      left: `${region.globePos.x}%`,
                      top: `${region.globePos.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center cursor-pointer z-20 group/node focus-visible:outline-none"
                  >
                    {/* Shared-layout Aerospace Targeting Reticle gliding across Earth */}
                    {isSelected && (
                      <motion.span
                        layoutId="globe-active-reticle"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-full border-2 border-primary-container shadow-[0_0_16px_rgba(187,245,39,0.9)] bg-primary-container/15"
                      />
                    )}

                    {/* Subtle continuous ping ring on selected node */}
                    {isSelected && !shouldReduceMotion && (
                      <span className="absolute inset-1 rounded-full bg-primary-container/40 animate-ping" />
                    )}

                    {/* Node Core Dot */}
                    <span
                      className={`relative rounded-full transition-all duration-150 group-hover/node:scale-125 group-active/node:scale-90 ${
                        isSelected
                          ? 'w-3 h-3 bg-primary-container ring-2 ring-white/95 shadow-[0_0_14px_#bbf527]'
                          : 'w-2.5 h-2.5 bg-white/95 ring-2 ring-cyan-300/70 group-hover/node:bg-primary-container'
                      }`}
                    />

                    {/* Crisp Hover / Active Label Tag */}
                    <span
                      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-all duration-150 ${
                        isSelected
                          ? 'opacity-100 translate-y-0 bg-[#090c09]/90 text-primary-container border-primary-container/45 shadow-lg'
                          : 'opacity-0 translate-y-1 group-hover/node:opacity-100 group-hover/node:translate-y-0 bg-[#090c09]/90 text-white border-white/15'
                      }`}
                    >
                      {region.city} • {region.ping}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* RIGHT FLANKING HUD (Large Screens) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col items-start text-left w-52 xl:w-56 shrink-0 relative z-20"
        >
          {/* Delicate connecting trace line to globe */}
          <div className="absolute top-1/2 -left-6 xl:-left-10 w-6 xl:w-10 h-px bg-gradient-to-l from-white/15 via-primary-container/40 to-primary-container/75 pointer-events-none" />

          <div className="w-full p-4 rounded-2xl bg-[#111411]/85 backdrop-blur-xl border border-white/[0.09] shadow-2xl hover:border-primary-container/35 transition-colors duration-200">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-secondary mb-2">
              <span className="flex items-center gap-1.5 text-white">
                <Activity className="w-3.5 h-3.5 text-primary-container" />
                Rede Global
              </span>
              <span className="text-primary-container">3/3 Nós</span>
            </div>

            <div className="text-[11px] text-secondary leading-snug mb-3">
              {isSimulating
                ? 'Transmitindo pacotes determinísticos...'
                : 'Clique nos nós do globo para alternar a região.'}
            </div>

            <button
              type="button"
              onClick={handleManualPulse}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary-container/[0.12] hover:bg-primary-container/[0.22] border border-primary-container/30 text-primary-container text-[11px] font-mono font-bold transition-all duration-150 cursor-pointer active:scale-[0.97]"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Pulsar Rede</span>
              {pulseCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.5 leading-none rounded-full bg-primary-container text-on-primary-container text-[9px] tabular-nums">
                  {pulseCount}
                </span>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Compact Interactive Region Selector for Tablet / Mobile (< lg) */}
      <div className="flex lg:hidden items-center gap-1.5 -mt-2 mb-3 p-1 rounded-full bg-[#111411]/90 border border-white/10 backdrop-blur-md relative z-20">
        {REGION_ORDER.map((key) => {
          const region = CLOUD_REGIONS[key];
          const isSelected = selectedRegion === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => handleRegionClick(key)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-150 active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-lime-glow'
                  : 'text-secondary hover:text-white'
              }`}
            >
              <span>{region.flag}</span>
              <span>{region.ping}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
