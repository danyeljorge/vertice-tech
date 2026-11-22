'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  User,
  Building2,
  Briefcase,
  Terminal,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

export default function ContatoPage() {
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
    'Agentes de IA & Automação',
  ]);
  const [selectedDay, setSelectedDay] = useState('21');
  const [selectedSlot, setSelectedSlot] = useState('14:30');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }, 700);
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <MotionWrapper delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-bold mb-4 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>✦ Diagnóstico Técnico Estratégico (30 min)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Agende uma Sessão com Nossos{' '}
            <span className="text-primary-container">Arquitetos</span>
          </h1>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Sem apresentações genéricas de vendas. Analisamos seus gargalos em profundidade e desenhamos a arquitetura ideal para suas metas de faturamento e escala.
          </p>
        </MotionWrapper>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Card (4 cols) */}
        <MotionWrapper delay={0.15} className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container border border-white/10 shadow-xl flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Canais Diretos</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Nossos líderes técnicos respondem diretamente por e-mail e telefone corporativo.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-white/5">
                <div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-secondary">E-mail Corporativo</div>
                  <div className="text-white font-semibold font-mono">contato@vertice.tech</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-white/5">
                <div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-secondary">WhatsApp Comercial</div>
                  <div className="text-white font-semibold font-mono">+55 (11) 98765-4321</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-white/5">
                <div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-secondary">Sede & Operações</div>
                  <div className="text-white font-semibold">São Paulo - SP, Brasil</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-secondary">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-container shrink-0" />
                <span>Resposta em menos de 2h úteis</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-container shrink-0" />
                <span>NDA garantido previamente</span>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Detailed Booking Form (8 cols) */}
        <MotionWrapper delay={0.2} className="lg:col-span-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-surface-container border border-white/10 shadow-2xl relative overflow-hidden">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <Terminal className="w-4 h-4 text-primary-container" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Formulário de Agendamento
                  </span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-secondary font-medium">Nome Completo *</label>
                  <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary-container transition-all">
                    <User className="w-4 h-4 text-secondary mr-3 shrink-0" />
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
                    <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary-container transition-all">
                      <Mail className="w-4 h-4 text-secondary mr-3 shrink-0" />
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
                    <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary-container transition-all">
                      <Phone className="w-4 h-4 text-secondary mr-3 shrink-0" />
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
                    <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary-container transition-all">
                      <Building2 className="w-4 h-4 text-secondary mr-3 shrink-0" />
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
                    <div className="flex items-center bg-[#191c19] border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary-container transition-all">
                      <Briefcase className="w-4 h-4 text-secondary mr-3 shrink-0" />
                      <input
                        type="text"
                        placeholder="CTO, VP, Diretor, etc."
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
                        className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
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
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
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

                {/* Calendar & Hours */}
                <div className="bg-[#191c19] border border-white/10 p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary-container" />
                      Datas Disponíveis
                    </span>
                    <span className="text-secondary font-mono">Dias Úteis</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-center">
                    {calendarDays.map((cal) => (
                      <button
                        key={cal.num}
                        type="button"
                        onClick={() => setSelectedDay(cal.num)}
                        className={`flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer border ${
                          selectedDay === cal.num
                            ? 'bg-primary-container text-on-primary-container border-primary-container font-bold shadow-sm'
                            : 'bg-[#141814] text-secondary border-white/5 hover:border-white/15 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono opacity-80">{cal.day}</span>
                        <span className="text-base font-bold">{cal.num}</span>
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
                          className={`py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border text-center ${
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

                {/* Notes */}
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Processando Agendamento...' : 'Confirmar Agendamento de Diagnóstico'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container/30 flex items-center justify-center text-primary-container mb-4 shadow-lime-glow animate-bounce">
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
                    <span className="text-white font-medium">{formData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foco:</span>
                    <span className="text-white font-medium">{selectedTopics.join(', ')}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 transition-all shadow-lime-glow"
                >
                  Agendar Outra Sessão
                </button>
              </div>
            )}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
