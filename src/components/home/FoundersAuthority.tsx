'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Rocket,
  Network,
  Calendar,
  Lock,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { siteContent } from '@/data/content';

interface FoundersAuthorityProps {
  onOpenModal: () => void;
}

export const FoundersAuthority: React.FC<FoundersAuthorityProps> = ({ onOpenModal }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      case 'Network':
      default:
        return <Network className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="diferenciais">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <MotionWrapper delay={0.1}>
          <span className="text-xs sm:text-sm text-primary-container uppercase tracking-widest font-bold mb-2 block">
            Diferencial Estratégico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Por Que a Vértice Tech?
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3 leading-relaxed">
            Não somos uma software house generalista nem uma agência de templates: somos parceiros de tecnologia de alto padrão.
          </p>
        </MotionWrapper>
      </div>

      {/* 3 Bento Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {siteContent.differences.map((diff, idx) => (
          <MotionWrapper
            key={diff.id}
            delay={0.1 * (idx + 1)}
            className="rounded-2xl bg-surface-container border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-md hover:border-white/20 hover:bg-surface-container-high transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary-container mb-6 shadow-sm">
                {getIcon(diff.icon)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {diff.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-primary-container font-semibold font-mono">
              {diff.badge}
            </div>
          </MotionWrapper>
        ))}
      </div>

      {/* Final High-Conversion Banner CTA */}
      <MotionWrapper delay={0.3} className="w-full" id="diagnostico">
        <div className="relative rounded-3xl bg-surface-container border border-white/10 p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-white/10 text-primary-container text-xs sm:text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
              <span>Diagnóstico Estratégico Gratuito</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Pronto para modernizar sua operação com tecnologia de verdade?
            </h2>

            <p className="text-sm sm:text-base text-secondary mb-8 leading-relaxed max-w-2xl">
              Agende um diagnóstico técnico de 30 minutos com nossos arquitetos de software. Analisamos sua infraestrutura atual, identificamos pontos de ganho imediato e desenhamos a rota de evolução.
            </p>

            {/* Inline Lead Capture Form */}
            {!submitted ? (
              <form
                onSubmit={handleQuickLead}
                className="w-full max-w-xl flex flex-col sm:flex-row gap-2 p-1.5 rounded-full sm:rounded-full bg-[#0c0f0c] border border-white/15 shadow-inner"
              >
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail corporativo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-container text-on-primary-container text-xs sm:text-sm font-bold hover:brightness-110 shadow-lime-glow transition-all whitespace-nowrap cursor-pointer active:scale-95"
                >
                  <span>Agendar Diagnóstico</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="w-full max-w-md p-4 rounded-2xl bg-primary-container/15 border border-primary-container/30 text-primary-container text-sm font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>
                  ✓ Solicitação recebida! Em até 2 horas nosso arquiteto entrará em contato.
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-secondary text-xs">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-primary-container" />
                Sigilo contratual (NDA garantido)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary-container" />
                Resposta em menos de 2h
              </span>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};
