'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Cpu, Zap, RefreshCw } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { LaserFlow } from '@/components/ui/LaserFlow';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Magnetic } from '@/components/ui/Magnetic';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { TechCircuit } from '@/components/ui/TechCircuit';
import { HeroGlobe } from '@/components/home/HeroGlobe';
import { HeroInteractiveConsole } from '@/components/home/HeroInteractiveConsole';
import { CLOUD_REGIONS, type RegionKey } from '@/data/regions';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('sa');
  const [isSimulating, setIsSimulating] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  const activeRegion = CLOUD_REGIONS[selectedRegion];

  const handleTriggerPulse = () => {
    setPulseCount((prev) => prev + 1);
  };

  const handleSelectRegion = (region: RegionKey) => {
    setSelectedRegion(region);
    setPulseCount((prev) => prev + 1);
  };

  const handleSimulationChange = (running: boolean) => {
    setIsSimulating(running);
    if (running) {
      setPulseCount((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden -mt-20">
      {/* Animated SVG Technical Circuit from Anime.js inspiration */}
      <TechCircuit className="absolute inset-0 w-full h-full z-0" />

      {/* ReactBits LaserFlow - Volumetric Laser Beam in Brand Lime */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <LaserFlow
          surfaceRef={cardRef}
          beamPosition={0.55}
          color="#bbf527"
          intensity={1.8}
          flare={1.5}
          spread={1.5}
          spill={1}
          fog={0.25}
          dust={1.6}
          beamWidth={1.5}
          streaks={1.5}
          dots={1}
          pulse={1.5}
          speed={1.5}
          seed={3}
          mouseInteraction
          intro
        />
      </div>

      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] sm:pt-[90px] md:pt-[87px] lg:pt-[85px] xl:pt-[82px] pb-16 flex flex-col items-center text-center">
        {/* 24px below the 89px header, minus the globe image's transparent limb */}
        <HeroGlobe
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
          isSimulating={isSimulating}
          pulseCount={pulseCount}
          onTriggerPulse={handleTriggerPulse}
        />

        {/* Top Pill Badge — Nestled Directly Beneath the Globe */}
        <MotionWrapper delay={0.08} className="relative z-20 -mt-3 sm:-mt-5 lg:-mt-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/90 border border-white/10 shadow-md mb-5 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="text-xs sm:text-sm text-primary-container tracking-wide font-semibold font-mono">
              ✦ Engenharia de Software, Cloud & IA Aplicada
            </span>
          </div>
        </MotionWrapper>

        {/* Main H1 Headline */}
        <MotionWrapper delay={0.14}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl text-white mb-5 leading-[1.12]">
            Sistemas Inteligentes,{' '}
            <span className="text-primary-container drop-shadow-[0_0_25px_rgba(187,245,39,0.45)]">
              Infraestrutura Sólida
            </span>
            , Resultados Reais.
          </h1>
        </MotionWrapper>

        {/* Subtitle */}
        <MotionWrapper delay={0.2}>
          <p className="text-base sm:text-lg text-secondary max-w-3xl mb-7 leading-relaxed">
            A Danter transforma desafios operacionais em software de alta performance sob medida, automações determinísticas com Inteligência Artificial e arquitetura em nuvem escalável.
          </p>
        </MotionWrapper>

        {/* CTAs with Magnetic Physics */}
        <MotionWrapper delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-7 w-full sm:w-auto">
            <Magnetic strength={0.3}>
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container text-sm font-bold hover:brightness-110 shadow-lime-glow hover:shadow-[0_0_28px_rgba(187,245,39,0.5)] transition-all duration-150 cursor-pointer active:scale-[0.97]"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#solucoes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-surface-container text-white text-sm font-semibold hover:text-primary-container hover:bg-surface-container-high border border-white/10 shadow-sm transition-all duration-150 active:scale-[0.97]"
              >
                <span>Conhecer Soluções</span>
              </a>
            </Magnetic>
          </div>
        </MotionWrapper>

        {/* Proof Indicator with Animated Counter */}
        <MotionWrapper delay={0.28}>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-white/5 shadow-sm mb-10">
            <CheckCircle className="w-4 h-4 text-primary-container shrink-0" />
            <span className="text-xs text-secondary tracking-wider uppercase font-semibold font-mono">
              +<AnimatedCounter value={120} duration={1.6} />k requisições diárias processadas <span className="text-primary-container mx-1.5">•</span> 99.98% SLA garantido
            </span>
          </div>
        </MotionWrapper>

        {/* Tech Telemetry Bento Dashboard - Anchored with cardRef for the LaserFlow surface */}
        <MotionWrapper delay={0.32} className="w-full">
          <div
            ref={cardRef}
            className="w-full relative rounded-2xl bg-surface-container-low/95 backdrop-blur-xl border border-white/10 p-5 sm:p-7 shadow-2xl overflow-hidden mt-2"
          >
            {/* Ambient Glow Crown */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary-container/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-left relative z-10">
              {/* Panel 1: Multi-Region Telemetry (Synced Live with the Hero Globe!) */}
              <SpotlightCard className="md:col-span-4 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold font-mono">
                      Infraestrutura Ativa
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      <span className="text-[11px] text-primary-container font-mono font-semibold">99.98% Online</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-1 font-mono tracking-tight tabular-nums">
                    <AnimatedCounter value={activeRegion.pingMs} suffix="ms" duration={1.4} />
                  </div>
                  <div className="text-xs text-secondary">
                    Latência ativa em <span className="text-white font-semibold">{activeRegion.flag} {activeRegion.label}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <div className="flex justify-between text-xs text-secondary mb-1.5 font-mono">
                    <span>Carga de Cluster</span>
                    <span className="text-white font-bold">
                      <AnimatedCounter value={activeRegion.clusterLoad} suffix="%" duration={1.6} /> ({activeRegion.status})
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-primary-container rounded-full shadow-[0_0_8px_rgba(187,245,39,0.8)] transition-all duration-500 ease-out"
                      style={{ width: `${activeRegion.clusterLoad}%` }}
                    />
                  </div>
                </div>
              </SpotlightCard>

              {/* Panel 2: Live AI Dispatcher */}
              <SpotlightCard className="md:col-span-4 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary-container" />
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold font-mono">
                      Agente de IA
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-[11px] font-bold font-mono">
                    {isSimulating ? 'Running Flow...' : 'Active Agent'}
                  </span>
                </div>

                <div className="space-y-2.5 my-1">
                  <div className="p-2.5 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-primary-container shrink-0" />
                      <span className="text-xs text-white">Processando leads WhatsApp & ERP</span>
                    </div>
                    <span className="text-xs text-primary-container font-mono font-bold">1.2s</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RefreshCw className={`w-3.5 h-3.5 text-secondary shrink-0 ${isSimulating ? 'animate-spin text-primary-container' : ''}`} />
                      <span className="text-xs text-secondary">Sincronização RAG Base Conhecimento</span>
                    </div>
                    <span className="text-xs text-secondary font-mono">Ok</span>
                  </div>
                </div>

                <div className="text-[11px] text-secondary pt-2">
                  Status:{' '}
                  <span className="text-white font-semibold font-mono">
                    <AnimatedCounter value={9840 + pulseCount} duration={2} /> execuções autônomas nas últimas 24h
                  </span>
                </div>
              </SpotlightCard>

              {/* Panel 3: Performance Metric Chart */}
              <SpotlightCard className="md:col-span-4 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-secondary uppercase tracking-wider font-semibold font-mono">
                    Eficiência Operacional
                  </span>
                  <span className="text-xl font-extrabold text-primary-container font-mono tabular-nums">
                    <AnimatedCounter value={48.6} prefix="+" suffix="%" decimals={1} duration={1.8} />
                  </span>
                </div>
                <div className="text-xs text-secondary mb-2">Redução de tempo em rotinas com IA</div>

                {/* Clean Neon Chart SVG with animated dash-path */}
                <div className="w-full h-20 pt-1">
                  <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 300 90">
                    <defs>
                      <linearGradient id="glowGradHero" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#bbf527" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#bbf527" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 75 Q 40 70, 75 55 T 150 48 T 225 22 T 300 8 L 300 90 L 0 90 Z"
                      fill="url(#glowGradHero)"
                    />
                    <path
                      d="M 0 75 Q 40 70, 75 55 T 150 48 T 225 22 T 300 8"
                      fill="none"
                      stroke="#bbf527"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                    <circle cx="300" cy="8" r="4" fill="#ffffff" className="animate-ping" />
                    <circle cx="300" cy="8" r="4" fill="#bbf527" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] text-secondary mt-1 font-mono">
                  <span>Jan 2025</span>
                  <span className="text-primary-container font-semibold">Ciclo Otimizado</span>
                </div>
              </SpotlightCard>
            </div>

            {/* Interactive Engineering Console & Playground (Synced Live with Globe!) */}
            <HeroInteractiveConsole
              selectedRegion={selectedRegion}
              onSelectRegion={handleSelectRegion}
              onSimulationChange={handleSimulationChange}
            />
          </div>
        </MotionWrapper>
      </section>
    </div>
  );
};
