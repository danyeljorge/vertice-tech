import React from 'react';
import Link from 'next/link';
import { Terminal, Share2, MessageSquare, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#090c09] border-t border-white/[0.08] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Sobre & Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#141814] border border-primary-container/30 flex items-center justify-center relative shadow-[0_0_12px_rgba(187,245,39,0.2)] group-hover:border-primary-container transition-colors">
                <svg
                  className="w-4 h-4 text-primary-container"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h7a8 8 0 0 1 8 8 8 8 0 0 1-8 8H4V4z" />
                  <path d="M10 9l3 3-3 3" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                Danter<span className="text-primary-container">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Engenharia de software sob medida, arquitetura em nuvem e inteligência artificial aplicada para empresas que buscam escala e precisão.
            </p>

            <span className="text-xs text-secondary/70 font-mono">
              © {new Date().getFullYear()} Danter. Todos os direitos reservados.
            </span>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2 text-xs sm:text-sm text-secondary">
              <Link href="/" className="hover:text-primary-container transition-colors">
                Início
              </Link>
              <Link href="/solucoes" className="hover:text-primary-container transition-colors">
                Soluções
              </Link>
              <Link href="/#simulador-roi" className="hover:text-primary-container transition-colors">
                Calculadora ROI & Eficiência
              </Link>
              <Link href="/#metodologia" className="hover:text-primary-container transition-colors">
                Metodologia
              </Link>
              <Link href="/sobre" className="hover:text-primary-container transition-colors">
                Sobre Nós & Sócios
              </Link>
              <Link href="/contato" className="hover:text-primary-container transition-colors">
                Agendar Diagnóstico
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">
              Soluções Técnicas
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-secondary">
              <li className="hover:text-white transition-colors cursor-pointer">
                Agentes de IA & Automação
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Sistemas Web & ERPs Corporativos
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Web Design & Alta Conversão (CRO)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cloud & DevOps 24/7 (SLA 99.98%)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Auditoria de Código & Refatoração
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Presença */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">
              Contato Corporativo
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-secondary">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-3.5 h-3.5 text-primary-container" />
                <span className="font-mono">contato@danter.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-container" />
                <span className="font-mono">+55 (11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-container" />
                <span>São Paulo - SP, Brasil</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="#diagnostico"
                aria-label="Terminal"
                className="w-8 h-8 rounded-full bg-surface-container border border-white/10 flex items-center justify-center text-secondary hover:text-primary-container hover:border-primary-container transition-all active:scale-95"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href="#diagnostico"
                aria-label="Rede"
                className="w-8 h-8 rounded-full bg-surface-container border border-white/10 flex items-center justify-center text-secondary hover:text-primary-container hover:border-primary-container transition-all active:scale-95"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#diagnostico"
                aria-label="Chat"
                className="w-8 h-8 rounded-full bg-surface-container border border-white/10 flex items-center justify-center text-secondary hover:text-primary-container hover:border-primary-container transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Security & Certifications */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <ShieldCheck className="w-4 h-4 text-primary-container" />
              Conformidade SOC2 & LGPD
            </span>
            <span>•</span>
            <span className="font-mono">SLA 99.98% Contratual</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Privacidade de Dados</span>
            <span>•</span>
            <span>Termos de Serviço</span>
            <span>•</span>
            <span className="text-primary-container font-semibold">Status: 100% Operacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
