'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Bot, Terminal } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

interface BentoFeaturesProps {
  onOpenModal: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenModal }) => {
  const pills = [
    { label: 'Sistemas Web', active: false },
    { label: 'Agentes de IA', active: true },
    { label: 'Cloud & DevOps', active: false },
    { label: 'APIs & Microserviços', active: false },
    { label: 'Data Pipelines', active: false },
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Authority */}
        <MotionWrapper delay={0.2} direction="left" className="lg:col-span-6 flex flex-col items-start">
          <span className="text-xs sm:text-sm text-primary-container uppercase tracking-widest font-bold mb-3">
            Visão Arquitetural
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Clareza e Controle em Cada Camada do Seu Negócio.
          </h2>
          <p className="text-sm sm:text-base text-secondary mb-4 leading-relaxed">
            Nossa metodologia une a precisão e o rigor da computação científica à agilidade demandada pelo mercado competitivo. Não terceirizamos inteligência: desenhamos sistemas limpos, previsíveis e construídos para sustentar o crescimento contínuo de operações com alto volume.
          </p>
          <p className="text-sm sm:text-base text-secondary/80 mb-8 leading-relaxed">
            Tenha controle completo de código-fonte, dados segregados e dashboards executivos que mostram o real impacto financeiro da tecnologia.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all cursor-pointer active:scale-95"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MotionWrapper>

        {/* Right Column: Interactive Tech Board */}
        <MotionWrapper delay={0.3} direction="right" className="lg:col-span-6">
          <div className="rounded-2xl bg-surface-container border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
            {/* Tech Stack Pill Group */}
            <div className="flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    pill.active
                      ? 'bg-primary-container/20 text-primary-container border border-primary-container/30 shadow-[0_0_12px_rgba(187,245,39,0.2)]'
                      : 'bg-surface-container-high text-white/90 border border-white/5'
                  }`}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* 2 Structured Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-surface-container-low border border-white/5 p-5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Segurança & Escalabilidade</h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    Arquitetura resiliente preparada para suportar picos de carga com isolamento criptográfico e sem degradação de performance.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-container-low border border-white/5 p-5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Automação Inteligente</h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    Agentes autônomos integrados aos sistemas legados, executando triagem, cotações e reconciliação sem intervenção humana manual.
                  </p>
                </div>
              </div>
            </div>

            {/* System Architecture Visual Terminal */}
            <div className="rounded-xl bg-[#0c0f0c] border border-white/10 p-4 flex items-center justify-between font-mono text-xs text-secondary">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-primary-container" />
                <span className="text-gray-300">vertice --deploy --mode=production --zero-downtime</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(187,245,39,0.8)] animate-pulse" />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};
