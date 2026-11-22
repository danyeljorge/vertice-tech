'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, UserCheck } from 'lucide-react';
import { LeadModal } from '@/components/ui/LeadModal';

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Calculadora ROI', href: '/#simulador-roi' },
    { label: 'Metodologia', href: '/#metodologia' },
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'Sobre Nós', href: '/sobre' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#090c09]/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo da Vértice Tech */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#141814] border border-primary-container/30 flex items-center justify-center relative shadow-[0_0_12px_rgba(187,245,39,0.25)] group-hover:border-primary-container transition-all">
              <svg
                className="w-5 h-5 text-primary-container transition-transform group-hover:scale-105"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 22 20 2 20" />
                <path d="M12 9v6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-xl font-extrabold tracking-tight text-white">
              Vértice<span className="text-primary-container font-light">Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-white font-medium ${
                    isActive ? 'text-primary-container font-semibold' : 'text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container text-xs sm:text-sm font-bold tracking-wide hover:brightness-110 shadow-lime-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>Agendar Diagnóstico</span>
            </button>

            {/* Micro Live Status Indicator */}
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-surface-container border border-white/10 items-center justify-center text-primary-container relative">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
              className="lg:hidden p-2 rounded-xl bg-surface-container border border-white/10 text-secondary hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#090c09]/95 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4 text-base font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-white border-b border-white/5 hover:text-primary-container transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-center flex items-center justify-center gap-2 shadow-lime-glow"
                >
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-secondary py-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
                  <span>Sistemas Operacionais & Telemetria Ativa</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Lead Booking Modal */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
