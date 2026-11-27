'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Terminal,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultTopic,
}) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    size: '51-200',
    notes: '',
  });

  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    defaultTopic || 'Agentes de IA & Automação',
  ]);
  const [selectedDay, setSelectedDay] = useState('21');
  const [selectedSlot, setSelectedSlot] = useState('14:30');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key (Emil Kowalski / Radix UI accessibility standard)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter((t) => t !== topic));
      }
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Diagnóstico Agendado!', `Enviamos a pauta para ${formData.email}`);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const companySizes = ['1-10', '11-50', '51-200', '200+'];
  const topicOptions = [
    'Agentes de IA & Automação',
    'Software / ERP',
    'Cloud & DevOps',
    'Web Design & Conversão',
  ];
  const calendarDays = [
    { day: 'SEG', num: '20' },
    { day: 'TER', num: '21' },
    { day: 'QUA', num: '22' },
    { day: 'QUI', num: '23' },
    { day: 'SEX', num: '24' },
  ];
  const timeSlots = ['10:00', '14:30', '16:00', '17:30'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Fade (Emil: smooth opacity without abrupt pop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container: NEVER scale from 0! subtle scale 0.96 -> 1 with cubic-bezier */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl my-auto bg-[#141814] rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col gap-6 overflow-hidden z-10"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary-container/5 rounded-full blur-2xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                  <span className="text-xs text-primary-container font-semibold tracking-wider uppercase font-mono">
                    Diagnóstico Estratégico Gratuito (30 min)
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Agende uma Sessão com Nossos Arquitetos de Software
                </h2>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  Analisamos seus gargalos operacionais e traçamos o roadmap de arquitetura e IA ideal para seu momento.
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar Modal"
                className="p-2 rounded-full bg-surface-container text-secondary hover:text-white hover:bg-surface-container-high transition-all cursor-pointer border border-white/10 shrink-0 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Column 1: Contact & Company */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                    <User className="w-4 h-4 text-primary-container" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      Identificação & Empresa
                    </span>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-secondary font-medium">Nome Completo *</label>
                    <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-primary-container transition-all">
                      <User className="w-4 h-4 text-secondary mr-2.5 shrink-0" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Lucas Guimarães"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-transparent text-white text-sm placeholder:text-gray-500 focus:outline-none w-full"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-secondary font-medium">E-mail Corporativo *</label>
                      <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-primary-container transition-all">
                        <Mail className="w-4 h-4 text-secondary mr-2.5 shrink-0" />
                        <input
                          type="email"
                          required
                          placeholder="nome@empresa.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-transparent text-white text-sm placeholder:text-gray-500 focus:outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-secondary font-medium">WhatsApp / Telefone *</label>
                      <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-primary-container transition-all">
                        <Phone className="w-4 h-4 text-secondary mr-2.5 shrink-0" />
                        <input
                          type="tel"
                          required
                          placeholder="(11) 98765-4321"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-transparent text-white text-sm placeholder:text-gray-500 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-secondary font-medium">Nome da Empresa *</label>
                      <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-primary-container transition-all">
                        <Building2 className="w-4 h-4 text-secondary mr-2.5 shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="Sua Empresa"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-transparent text-white text-sm placeholder:text-gray-500 focus:outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-secondary font-medium">Cargo / Posição</label>
                      <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-3.5 py-2.5 focus-within:border-primary-container transition-all">
                        <Briefcase className="w-4 h-4 text-secondary mr-2.5 shrink-0" />
                        <input
                          type="text"
                          placeholder="CTO, VP, Diretor..."
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="bg-transparent text-white text-sm placeholder:text-gray-500 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Size */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-secondary font-medium">Tamanho da Empresa</label>
                    <div className="grid grid-cols-4 gap-2">
                      {companySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({ ...formData, size })}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer border active:scale-[0.97] ${
                            formData.size === size
                              ? 'bg-primary-container text-on-primary-container border-primary-container shadow-sm font-bold'
                              : 'bg-[#191c19] text-secondary border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Architects Card */}
                  <div className="bg-[#191c19] border border-white/10 p-4 rounded-xl flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Arquitetos Dedicados</div>
                        <div className="text-[11px] text-secondary">Tech Lead & AI Specialist</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      <span className="text-[11px] text-primary-container font-semibold font-mono">Vagas Abertas</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Scope & Schedule */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                    <Calendar className="w-4 h-4 text-primary-container" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      Escopo & Seleção de Horário
                    </span>
                  </div>

                  {/* Topics Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-secondary font-medium">
                      Principal Foco de Interesse (Selecione 1 ou mais)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topicOptions.map((topic) => {
                        const active = selectedTopics.includes(topic);
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleTopic(topic)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer border active:scale-[0.97] ${
                              active
                                ? 'bg-primary-container text-on-primary-container border-primary-container font-bold shadow-sm'
                                : 'bg-[#191c19] text-secondary border-white/10 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time Selector */}
                  <div className="bg-[#191c19] border border-white/10 p-4 rounded-xl flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary-container" />
                        Datas Disponíveis
                      </span>
                      <span className="text-secondary font-mono">Próximos Dias Úteis</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-center">
                      {calendarDays.map((cal) => (
                        <button
                          key={cal.num}
                          type="button"
                          onClick={() => setSelectedDay(cal.num)}
                          className={`flex flex-col items-center py-2 rounded-xl transition-all duration-150 cursor-pointer border active:scale-[0.97] ${
                            selectedDay === cal.num
                              ? 'bg-primary-container text-on-primary-container border-primary-container font-bold shadow-sm'
                              : 'bg-[#141814] text-secondary border-white/5 hover:border-white/15 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-mono opacity-80">{cal.day}</span>
                          <span className="text-base font-bold font-mono">{cal.num}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-center justify-between text-[11px] text-secondary">
                        <span>Horário (Fuso Horário Brasília - GMT-3)</span>
                        <Clock className="w-3 h-3 text-primary-container" />
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer border text-center active:scale-[0.97] ${
                              selectedSlot === slot
                                ? 'bg-primary-container text-on-primary-container border-primary-container font-bold shadow-sm'
                                : 'bg-[#141814] text-secondary border-white/5 hover:border-white/15 hover:text-white'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Note */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-secondary font-medium">
                      Conte rapidamente seu maior desafio técnico ou gargalo
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Precisamos automatizar o processamento de pedidos com IA e escalar nosso backend..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="bg-[#191c19] border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-container resize-none"
                    />
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="lg:col-span-2 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-secondary">
                    <ShieldCheck className="w-5 h-5 text-primary-container shrink-0" />
                    <p>
                      <strong className="text-white">Confidencialidade Garantida:</strong> NDA bilateral assinado digitalmente. Seus dados e estratégia protegidos.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all duration-150 cursor-pointer shrink-0 disabled:opacity-50 active:scale-[0.97]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Agendando...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirmar Agendamento de Diagnóstico</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Confirmation State */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center justify-center py-12 px-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container/30 flex items-center justify-center text-primary-container mb-4 shadow-lime-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico Confirmado com Sucesso!</h3>
                <p className="text-sm text-secondary max-w-lg mb-6 leading-relaxed">
                  Enviamos o convite com link da sala privada do Google Meet e a pauta técnica preliminar para o seu e-mail corporativo: <strong className="text-white">{formData.email}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-[#191c19] border border-white/10 text-xs text-secondary mb-6 flex flex-col gap-1 text-left w-full max-w-md">
                  <div className="flex justify-between">
                    <span>Horário Agendado:</span>
                    <span className="text-primary-container font-bold font-mono">Dia {selectedDay} às {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empresa:</span>
                    <span className="text-white font-medium">{formData.company || 'Não informado'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foco:</span>
                    <span className="text-white font-medium">{selectedTopics.join(', ')}</span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 transition-all duration-150 shadow-lime-glow active:scale-[0.97]"
                >
                  Retornar à Danter
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
