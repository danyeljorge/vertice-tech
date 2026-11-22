'use client';

import React, { useRef } from 'react';
import { ArrowRight, CheckCircle, Cpu, Zap, RefreshCw } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { LaserFlow } from '@/components/ui/LaserFlow';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden">
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

      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col items-center text-center">
        {/* Top Pill Badge */}
        <MotionWrapper delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/90 border border-white/10 shadow-md mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="text-xs sm:text-sm text-primary-container tracking-wide font-semibold">
              ✦ Engenharia de Software, Cloud & IA Aplicada
            </span>
          </div>
        </MotionWrapper>

        {/* Main H1 Headline */}
        <MotionWrapper delay={0.2}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl text-white mb-6 leading-[1.12]">
            Sistemas Inteligentes,{' '}
            <span className="text-primary-container drop-shadow-[0_0_25px_rgba(187,245,39,0.45)]">
              Infraestrutura Sólida
            </span>
            , Resultados Reais.
          </h1>
        </MotionWrapper>

        {/* Subtitle */}
        <MotionWrapper delay={0.3}>
          <p className="text-base sm:text-lg text-secondary max-w-3xl mb-8 leading-relaxed">
            Transformamos desafios operacionais em software sob medida, automações com Inteligência Artificial e arquitetura em nuvem de alta disponibilidade para empresas em fase de expansão.
          </p>
        </MotionWrapper>

        {/* CTAs */}
        <MotionWrapper delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container text-sm font-bold hover:brightness-110 shadow-lime-glow hover:shadow-[0_0_28px_rgba(187,245,39,0.5)] transition-all cursor-pointer active:scale-95"
            >
              <span>Solicitar Proposta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-surface-container text-white text-sm font-semibold hover:text-primary-container hover:bg-surface-container-high border border-white/10 shadow-sm transition-all"
            >
              <span>Conhecer Soluções</span>
            </a>
          </div>
        </MotionWrapper>

        {/* Proof Indicator */}
        <MotionWrapper delay={0.45}>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-white/5 shadow-sm mb-12">
            <CheckCircle className="w-4 h-4 text-primary-container shrink-0" />
            <span className="text-xs text-secondary tracking-wider uppercase font-semibold">
              +120k requisições diárias processadas <span className="text-primary-container mx-1.5">•</span> 99.98% SLA garantido
            </span>
          </div>
        </MotionWrapper>

        {/* Tech Telemetry Bento Dashboard - Anchored with cardRef for the LaserFlow surface */}
        <MotionWrapper delay={0.5} className="w-full">
          <div
            ref={cardRef}
            className="w-full relative rounded-2xl bg-surface-container-low/95 backdrop-blur-xl border border-white/10 p-5 sm:p-7 shadow-2xl overflow-hidden mt-2"
          >
            {/* Ambient Glow Crown */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary-container/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-left relative z-10">
              {/* Panel 1: Multi-Region Telemetry */}
              <div className="md:col-span-4 rounded-xl bg-surface-container border border-white/5 p-5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                      Infraestrutura Ativa
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      <span className="text-[11px] text-primary-container font-mono font-semibold">99.98% Online</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-1 font-mono tracking-tight">14ms</div>
                  <div className="text-xs text-secondary">Latência média global AWS us-east & sa-east-1</div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <div className="flex justify-between text-xs text-secondary mb-1.5 font-mono">
                    <span>Carga de Cluster</span>
                    <span className="text-white font-bold">42% (Nominal)</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="h-full bg-primary-container w-[42%] rounded-full shadow-[0_0_8px_rgba(187,245,39,0.8)]" />
                  </div>
                </div>
              </div>

              {/* Panel 2: Live AI Dispatcher */}
              <div className="md:col-span-4 rounded-xl bg-surface-container border border-white/5 p-5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary-container" />
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                      Agente de IA
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-[11px] font-bold">
                    Active Agent
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
                      <RefreshCw className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="text-xs text-secondary">Sincronização RAG Base Conhecimento</span>
                    </div>
                    <span className="text-xs text-secondary font-mono">Ok</span>
                  </div>
                </div>

                <div className="text-[11px] text-secondary pt-2">
                  Status:{' '}
                  <span className="text-white font-semibold">
                    9.840 execuções autônomas nas últimas 24h
                  </span>
                </div>
              </div>

              {/* Panel 3: Performance Metric Chart */}
              <div className="md:col-span-4 rounded-xl bg-surface-container border border-white/5 p-5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    Eficiência Operacional
                  </span>
                  <span className="text-xl font-extrabold text-primary-container font-mono">
                    +48.6%
                  </span>
                </div>
                <div className="text-xs text-secondary mb-2">Redução de tempo em rotinas com IA</div>

                {/* Clean Neon Chart SVG */}
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

                <div className="flex items-center justify-between text-[11px] text-secondary mt-1">
                  <span>Jan 2025</span>
                  <span className="text-primary-container font-semibold">Ciclo Atual Otimizado</span>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  );
};
