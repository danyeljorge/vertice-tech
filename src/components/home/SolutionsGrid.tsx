'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Code2, Sparkles, Cloud } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { siteContent } from '@/data/content';

interface SolutionsGridProps {
  onOpenModal: (topic?: string) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onOpenModal }) => {
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

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="solucoes">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <MotionWrapper delay={0.08} className="max-w-2xl">
          <span className="text-xs sm:text-sm text-primary-container uppercase tracking-widest font-bold mb-2 block font-mono">
            Capacidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Seu Negócio Impulsionado por{' '}
            <span className="text-primary-container">Engenharia e IA</span>
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.14} className="max-w-md">
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
                delay={0.08 * (index + 1)}
                className="rounded-2xl bg-primary-container text-on-primary-container p-6 sm:p-7 flex flex-col justify-between shadow-lime-glow transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(187,245,39,0.5)] relative group cursor-pointer active:scale-[0.98]"
                onClick={() => onOpenModal(sol.title)}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-black/15 font-mono">
                      {sol.number}. {sol.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-black/10 group-hover:scale-110 transition-transform duration-200">
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
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold group-hover:translate-x-1 transition-transform duration-150 underline underline-offset-4">
                    <span>Explorar IA Sob Demanda</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </MotionWrapper>
            );
          }

          return (
            <MotionWrapper
              key={sol.id}
              delay={0.08 * (index + 1)}
              className="flex"
            >
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between w-full shadow-md group transition-all duration-200 hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-primary-container font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-surface-container-high border border-white/5 font-mono">
                      {sol.number}. {sol.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-surface-container-high border border-white/5 text-primary-container group-hover:scale-110 transition-transform duration-200">
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
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary-container font-semibold group-hover:text-white transition-colors duration-150"
                  >
                    <span>Ver detalhes técnicos</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </SpotlightCard>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
};
