'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { siteContent } from '@/data/content';

interface MethodologyListProps {
  onOpenModal: () => void;
}

export const MethodologyList: React.FC<MethodologyListProps> = ({ onOpenModal }) => {
  const [activeStep, setActiveStep] = useState<string | null>('01');

  const toggleStep = (step: string) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="metodologia">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
        <MotionWrapper delay={0.1} className="md:col-span-7">
          <span className="text-xs sm:text-sm text-primary-container uppercase tracking-widest font-bold mb-2 block">
            Processo Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Do Diagnóstico à <span className="text-primary-container">Escala em Produção</span>
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="md:col-span-5 flex flex-col items-start md:items-end">
          <p className="text-xs sm:text-sm text-secondary text-left md:text-right mb-3">
            Sem caixas-pretas ou relatórios vazios. Cada etapa possui entregáveis tangíveis e validação em tempo real com seu time.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary-container font-bold hover:underline cursor-pointer"
          >
            <span>Iniciar pelo Passo 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MotionWrapper>
      </div>

      {/* 5 Steps List */}
      <div className="flex flex-col gap-3">
        {siteContent.methodology.map((item, index) => {
          const isOpen = activeStep === item.step;
          return (
            <MotionWrapper key={item.step} delay={0.08 * (index + 1)}>
              <div
                onClick={() => toggleStep(item.step)}
                className={`rounded-2xl transition-all duration-200 border cursor-pointer p-6 ${
                  isOpen
                    ? 'bg-surface-container-high border-primary-container/40 shadow-lime-glow'
                    : 'bg-surface-container border-white/5 hover:border-white/15 hover:bg-surface-container-high/60'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold font-mono transition-colors ${
                        isOpen ? 'text-primary-container' : 'text-primary-container/70'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center gap-2">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-secondary max-w-2xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t border-white/5 md:border-0">
                    <span className="text-xs font-mono text-primary-container/90 px-3 py-1 rounded-full bg-surface-container-low border border-white/5 uppercase tracking-wider font-semibold">
                      {item.period}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-secondary transition-transform ${
                        isOpen ? 'rotate-180 text-primary-container' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expandable Deliverables */}
                {isOpen && (
                  <div className="mt-5 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      Entregáveis Tangíveis desta Etapa:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {item.deliverables.map((del) => (
                        <div
                          key={del}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-surface-container-low border border-white/5 text-xs text-secondary"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
};
