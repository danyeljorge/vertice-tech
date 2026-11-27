'use client';

import React, { useState } from 'react';
import {
  Brain,
  Code2,
  Sparkles,
  Cloud,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { siteContent } from '@/data/content';
import { LeadModal } from '@/components/ui/LeadModal';

export default function SolucoesPage() {
  const [activeTab, setActiveTab] = useState(siteContent.solutions[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);

  const currentSolution =
    siteContent.solutions.find((s) => s.id === activeTab) || siteContent.solutions[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Cloud':
      default:
        return <Cloud className="w-5 h-5" />;
    }
  };

  const handleOpenLead = (topic: string) => {
    setModalTopic(topic);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <MotionWrapper delay={0.08}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-bold mb-4 font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>✦ 4 Pilares de Engenharia de Software</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Soluções Tecnológicas de{' '}
            <span className="text-primary-container">Alto Rendimento</span>
          </h1>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Desenvolvimento de ponta a ponta sem improvisos: desde a arquitetura de dados e esteiras de IA até a sustentação de nuvem em escala.
          </p>
        </MotionWrapper>
      </div>

      {/* Interactive Tabs with Emil Kowalski animated layout pill */}
      <MotionWrapper delay={0.15} className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-surface-container border border-white/10 max-w-4xl mx-auto">
          {siteContent.solutions.map((sol) => {
            const active = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-150 cursor-pointer active:scale-[0.97] select-none ${
                  active
                    ? 'text-on-primary-container font-extrabold'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="solutions-active-tab-pill"
                    className="absolute inset-0 bg-primary-container rounded-xl shadow-lime-glow -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{getIcon(sol.icon)}</span>
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>
      </MotionWrapper>

      {/* Active Tab Detailed Showcase with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSolution.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-3xl bg-surface-container border border-white/10 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle Ambient Radial */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Core Info & Features */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary-container uppercase px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
                    Pilar {currentSolution.number} • {currentSolution.tag}
                  </span>
                  {currentSolution.badge && (
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-surface-container-high border border-white/10 font-mono">
                      {currentSolution.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {currentSolution.title}
                </h2>

                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  {currentSolution.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentSolution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-surface-container-high text-primary-container border border-primary-container/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
                    O Que Está Incluso no Escopo Técnico:
                  </h4>
                  <div className="space-y-3">
                    {currentSolution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleOpenLead(currentSolution.title)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all duration-150 cursor-pointer active:scale-[0.97]"
                  >
                    <span>Solicitar Diagnóstico em {currentSolution.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Real-World Use Cases & Impact */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <SpotlightCard className="p-6 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono">
                    <TrendingUp className="w-4 h-4 text-primary-container" />
                    <span>Casos de Uso & Impacto no Negócio</span>
                  </div>

                  <div className="space-y-4">
                    {currentSolution.useCases.map((useCase) => (
                      <div
                        key={useCase.title}
                        className="p-4 rounded-xl bg-surface-container border border-white/5 flex flex-col justify-between gap-3 hover:border-white/15 transition-all duration-150"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">{useCase.title}</h4>
                          <p className="text-xs text-secondary leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                        <div className="self-start text-xs font-mono font-bold text-primary-container px-2.5 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
                          {useCase.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>

                {/* SLA & Code Guarantee Note */}
                <div className="p-5 rounded-2xl bg-[#0c0f0c] border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-secondary">
                    <strong className="text-white">Propriedade Total de Código:</strong> Todos os repositórios, pipelines e dados pertencem integralmente à sua empresa. Sem vendor lock-in.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={modalTopic}
      />
    </div>
  );
}
