'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Magnetic } from '@/components/ui/Magnetic';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { siteContent } from '@/data/content';
import { LeadModal } from '@/components/ui/LeadModal';

export default function SobrePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <MotionWrapper delay={0.08}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-bold mb-4 font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>✦ Sobre a Danter</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engenharia de Software com{' '}
            <span className="text-primary-container">Rigor e Velocidade</span>
          </h1>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Nascemos para romper o abismo entre o rigor da computação científica e as exigências imediatas de retorno sobre investimento do mercado corporativo.
          </p>
        </MotionWrapper>
      </div>

      {/* Manifesto / História */}
      <MotionWrapper delay={0.16} className="mb-20">
        <div className="rounded-3xl bg-surface-container border border-white/10 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl">
            <span className="text-xs font-mono font-bold text-primary-container uppercase tracking-widest block mb-3">
              Nossa Visão
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Software corporativo não deve ser uma caixa-preta de custos intermináveis.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-secondary leading-relaxed">
              <p>
                A maioria das empresas enfrenta um dilema frustrante: de um lado, agências de marketing que criam interfaces atraentes mas sem sustentação de backend e escalabilidade; do outro, consultorias tradicionais lentas, que cobram meses de reuniões antes de entregar uma única linha de código em produção.
              </p>
              <p>
                A <strong className="text-white">Danter</strong> foi fundada para oferecer o terceiro caminho: equipes compactas formadas exclusivamente por desenvolvedores sêniores e arquitetos de software. Projetamos ativos proprietários de tecnologia, integramos agentes de inteligência artificial determinísticos e garantimos infraestruturas seguras na nuvem.
              </p>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  <AnimatedCounter value={42} suffix="+" duration={1.5} />
                </div>
                <div className="text-xs text-secondary mt-1">Deployments Corporativos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-container font-mono tabular-nums">
                  <AnimatedCounter value={99.98} decimals={2} suffix="%" duration={1.8} />
                </div>
                <div className="text-xs text-secondary mt-1">Disponibilidade SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  <AnimatedCounter value={120} prefix="+" suffix="k" duration={1.6} />
                </div>
                <div className="text-xs text-secondary mt-1">Req/Dia Processadas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-container font-mono">Zero</div>
                <div className="text-xs text-secondary mt-1">Vazamentos de Dados</div>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* Sócios & Liderança Técnica */}
      <div className="mb-20">
        <MotionWrapper delay={0.2} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-primary-container uppercase tracking-widest block mb-2">
            Liderança Técnica
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Engenheiros Seniores na Linha de Frente
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-2">
            Você lida diretamente com quem arquiteta e escreve o código do seu produto. Sem intermediários, sem ruído.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.founders.map((founder, idx) => (
            <MotionWrapper
              key={founder.name}
              delay={0.08 * (idx + 1)}
              className="flex"
            >
              <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between w-full shadow-md group transition-all duration-200 hover:-translate-y-1">
                <div>
                  {/* Avatar Initials / Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/15 border border-primary-container/30 flex items-center justify-center text-primary-container font-bold text-lg font-mono group-hover:scale-105 transition-transform duration-200">
                      {founder.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-surface-container-highest text-primary-container">
                      Líder Técnico
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                  <div className="text-xs font-bold text-primary-container mb-4 font-mono">{founder.role}</div>

                  <div className="space-y-3 text-xs text-secondary leading-relaxed mb-6">
                    <div className="p-2.5 rounded-xl bg-surface-container-low border border-white/5">
                      <strong className="text-gray-300 block mb-0.5">Formação & Rigor:</strong>
                      <span>{founder.academicBackground}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-low border border-white/5">
                      <strong className="text-gray-300 block mb-0.5">Trajetória:</strong>
                      <span>{founder.marketExperience}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-secondary">Especialidade:</span>
                  <span className="font-semibold text-white font-mono">{founder.focus}</span>
                </div>
              </SpotlightCard>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <MotionWrapper delay={0.28}>
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-white/10 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Quer falar diretamente com nossos arquitetos?
          </h3>
          <p className="text-xs sm:text-sm text-secondary max-w-xl mb-6">
            Não colocamos intermediários para falar com CTOs e diretores de tecnologia. Agende uma sessão técnica objetiva de 30 minutos.
          </p>
          <Magnetic strength={0.25}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all duration-150 cursor-pointer active:scale-[0.97]"
            >
              <span>Agendar Sessão com os Fundadores</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>
      </MotionWrapper>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
