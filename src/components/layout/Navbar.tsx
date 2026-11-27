'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { LeadModal } from '@/components/ui/LeadModal';
import { Magnetic } from '@/components/ui/Magnetic';

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

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
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090c09]/90 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl py-0'
            : 'bg-[#090c09]/60 backdrop-blur-md border-b border-white/[0.05] py-1'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Danter with Magnetic Hover Physics (Anime.js / Emil) */}
          <Magnetic strength={0.2}>
            <Link href="/" className="flex items-center gap-3 group select-none">
              <div className="w-9 h-9 rounded-xl bg-[#141814] border border-primary-container/30 flex items-center justify-center relative shadow-[0_0_14px_rgba(187,245,39,0.22)] group-hover:border-primary-container group-hover:shadow-[0_0_20px_rgba(187,245,39,0.35)] transition-all duration-200">
                <svg
                  className="w-5 h-5 text-primary-container transition-transform duration-200 group-hover:scale-110"
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
              <div className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Danter<span className="text-primary-container">.</span>
              </div>
            </Link>
          </Magnetic>

          {/* Desktop Navigation Links with layoutId pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-150 ${
                    isActive
                      ? 'text-on-primary-container font-bold'
                      : 'text-secondary hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-primary-container rounded-full shadow-lime-glow -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons with Magnetic CTA */}
          <div className="flex items-center gap-3">
            <Magnetic strength={0.25}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container text-xs sm:text-sm font-bold tracking-wide hover:brightness-110 shadow-lime-glow transition-all duration-150 active:scale-[0.97] cursor-pointer"
              >
                <span>Agendar Diagnóstico</span>
              </button>
            </Magnetic>

            {/* Micro Live Status Indicator */}
            <div
              title="Sistemas em operação nominal (SLA 99.98%)"
              className="hidden sm:flex w-8 h-8 rounded-full bg-surface-container border border-white/10 items-center justify-center text-primary-container relative group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
              className="lg:hidden p-2 rounded-xl bg-surface-container border border-white/10 text-secondary hover:text-white transition-colors duration-150 active:scale-95"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-b border-white/10 bg-[#090c09]/95 backdrop-blur-2xl px-6 py-6"
            >
              <nav className="flex flex-col gap-3 text-sm font-semibold">
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
                <div className="pt-3 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-center flex items-center justify-center gap-2 shadow-lime-glow active:scale-[0.97] transition-transform duration-150"
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Lead Booking Modal */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
