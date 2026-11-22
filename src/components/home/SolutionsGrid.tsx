'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Code2, Sparkles, Cloud } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { siteContent } from '@/data/content';

interface SolutionsGridProps {
  onOpenModal: (topic?: string) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Cloud':
      default:
        return <Cloud className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="solucoes">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <MotionWrapper delay={0.1} className="max-w-2xl">
          <span className="text-xs sm:text-sm text-primary-container uppercase tracking-widest font-bold mb-2 block">
            Capacidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Seu Negócio Impulsionado por{' '}
            <span className="text-primary-container">Engenharia e IA</span>
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="max-w-md">
          <p className="text-sm sm:text-base text-secondary">
            Desenvolvemos ativos proprietários de software projetados para gerar valor duradouro e independência tecnológica.
          </p>
        </MotionWrapper>
      </div>

      {/* 4 Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {siteContent.solutions.map((sol, index) => {
          if (sol.isFeatured) {
            return (
              <MotionWrapper
                key={sol.id}
                delay={0.1 * (index + 1)}
                className="rounded-2xl bg-primary-container text-on-primary-container p-6 sm:p-7 flex flex-col justify-between shadow-lime-glow hover:scale-[1.02] transition-transform duration-300 relative group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-black/15 font-mono">
                      {sol.number}. {sol.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-black/10">
                      {getIcon(sol.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight leading-snug">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-black/85 leading-relaxed mb-6">
                    {sol.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sol.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/10 text-black/90 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenModal(sol.title)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold group-hover:translate-x-1 transition-transform cursor-pointer underline underline-offset-4"
                  >
                    <span>Explorar IA Sob Demanda</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </MotionWrapper>
            );
          }

          return (
            <MotionWrapper
              key={sol.id}
              delay={0.1 * (index + 1)}
              className="rounded-2xl bg-surface-container border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:bg-surface-container-high hover:border-white/20 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-primary-container font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-surface-container-high border border-white/5 font-mono">
                    {sol.number}. {sol.tag}
                  </span>
                  <div className="p-2 rounded-xl bg-surface-container-high border border-white/5 text-primary-container">
                    {getIcon(sol.icon)}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                  {sol.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {sol.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary border border-white/5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href="/solucoes"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white group-hover:text-primary-container font-semibold transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
};
