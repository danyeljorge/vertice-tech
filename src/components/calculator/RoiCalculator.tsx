'use client';

import React, { useState, useMemo } from 'react';
import {
  Sliders,
  Users,
  Clock,
  DollarSign,
  AlertTriangle,
  Layers,
  Brain,
  Shield,
  CheckCircle2,
  TrendingUp,
  FileText,
  ArrowRight,
  Database,
  Lock,
  GitBranch,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { Magnetic } from '@/components/ui/Magnetic';
import { useToast } from '@/components/ui/Toast';
import { siteContent } from '@/data/content';

interface RoiCalculatorProps {
  onOpenModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenModal }) => {
  const toast = useToast();
  // State for interactive sliders
  const [teamSize, setTeamSize] = useState<number>(18);
  const [manualHours, setManualHours] = useState<number>(14);
  const [avgCost, setAvgCost] = useState<number>(5500);
  const [reworkRate, setReworkRate] = useState<number>(18);
  const [ticketVolume, setTicketVolume] = useState<number>(4200);

  // Strategy tier: 0.40, 0.60, or 0.75
  const [aiTier, setAiTier] = useState<number>(0.60);

  // Checkbox toggles
  const [hasLegacyIntegration, setHasLegacyIntegration] = useState<boolean>(true);
  const [hasLgpdCompliance, setHasLgpdCompliance] = useState<boolean>(true);

  // Dossier email state
  const [dossierEmail, setDossierEmail] = useState('');
  const [dossierSent, setDossierSent] = useState(false);

  // Mathematical ROI calculation model
  const calculations = useMemo(() => {
    // 52 weeks/year, 160h/month typical FTE work hours (approx 1920h/year)
    const annualHoursSpentPerPerson = manualHours * 52;
    const totalAnnualManualHours = annualHoursSpentPerPerson * teamSize;

    // Liberated hours based on AI automation tier
    const liberatedHoursAnnual = Math.round(totalAnnualManualHours * aiTier);
    const fteEquivalent = (liberatedHoursAnnual / 1920).toFixed(1);

    // Cost per hour = avgCost / 160
    const hourlyRate = avgCost / 160;
    const directLaborSavings = liberatedHoursAnnual * hourlyRate;

    // Rework error mitigation savings
    const reworkLossAnnual = (teamSize * avgCost * 12) * (reworkRate / 100) * 0.5;
    const reworkSavings = reworkLossAnnual * aiTier;

    // Ticket resolution efficiency savings
    const ticketOptimizationSavings = (ticketVolume * 12) * 1.8 * aiTier;

    // Compliance & Legacy multiplier
    const ecosystemMultiplier = (hasLegacyIntegration ? 1.08 : 1) * (hasLgpdCompliance ? 1.05 : 1);

    const totalAnnualSavings = Math.round((directLaborSavings + reworkSavings + ticketOptimizationSavings) * ecosystemMultiplier);

    // Approximate investment cost (scaled conservatively)
    const estimatedInvestment = Math.max(38000, Math.round(totalAnnualSavings * 0.18));
    const roiPercent = Math.round(((totalAnnualSavings - estimatedInvestment) / estimatedInvestment) * 100);

    // Payback in months
    const paybackMonths = Math.max(1.8, ((estimatedInvestment / totalAnnualSavings) * 12)).toFixed(1);

    // 3-Year Cumulative Projections
    const year1Savings = totalAnnualSavings;
    const year2Savings = Math.round(totalAnnualSavings * 2.15);
    const year3Savings = Math.round(totalAnnualSavings * 3.45);

    // Breakdown components
    const repetitiveReduction = Math.round(totalAnnualSavings * 0.45);
    const reworkElimination = Math.round(totalAnnualSavings * 0.30);
    const infraOptimization = Math.round(totalAnnualSavings * 0.25);

    return {
      totalAnnualSavings,
      liberatedHoursAnnual,
      fteEquivalent,
      roiPercent,
      paybackMonths,
      year1Savings,
      year2Savings,
      year3Savings,
      repetitiveReduction,
      reworkElimination,
      infraOptimization,
    };
  }, [teamSize, manualHours, avgCost, reworkRate, ticketVolume, aiTier, hasLegacyIntegration, hasLgpdCompliance]);

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSendDossier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dossierEmail) return;
    setDossierSent(true);
    toast.success('Dossiê Enviado!', `Memorial de cálculo transmitido para ${dossierEmail}`);
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full" id="simulador-roi">
      {/* Top Anchor Headline Context */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
        <MotionWrapper delay={0.1} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="text-xs text-primary-container font-mono tracking-wider uppercase font-semibold">
              Engenharia Autônoma & Decisões Baseadas em Dados
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Arquiteturas de IA que transformam esforço braçal em{' '}
            <span className="text-primary-container">lucro operacional</span>.
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-white/5 text-xs text-secondary">
          <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
          <span>Telemetria de 42+ deployments corporativos</span>
        </MotionWrapper>
      </div>

      {/* Calculator Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <MotionWrapper delay={0.15}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-bold mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>✦ Simulador Interativo de Eficiência</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Calcule o Retorno da Automação e Engenharia no Seu Negócio
          </h2>
          <p className="text-xs sm:text-sm text-secondary max-w-2xl mx-auto leading-relaxed">
            Descubra quantas horas operacionais, custos invisíveis de retrabalho e despesas de escala sua operação pode economizar implementando agentes autônomos e arquitetura de dados sob medida.
          </p>
        </MotionWrapper>
      </div>

      {/* Main Bento Grid Calculator Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* LEFT COLUMN: Sliders & Controls */}
        <MotionWrapper delay={0.2} className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-white/10 shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Parâmetros Operacionais</h3>
                  <p className="text-xs text-secondary">Configure os vetores da sua infraestrutura e volume operacional</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-primary-container uppercase px-2.5 py-1 rounded-full bg-surface-container border border-primary-container/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                Tempo Real
              </span>
            </div>

            {/* Sliders Stack */}
            <div className="space-y-4">
              {/* Slider 1: Team Size */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-white flex items-center gap-2 font-medium">
                    <Users className="w-4 h-4 text-primary-container" />
                    Tamanho da Equipe Operacional / Suporte
                  </label>
                  <span className="text-sm font-extrabold text-primary-container font-mono">
                    {teamSize} pessoas
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono mt-1">
                  <span>5 membros</span>
                  <span>50 membros</span>
                  <span>100+ membros</span>
                </div>
              </div>

              {/* Slider 2: Weekly Manual Hours */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-white flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-primary-container" />
                    Horas Semanais em Tarefas Manuais / Planilhas
                  </label>
                  <span className="text-sm font-extrabold text-primary-container font-mono">
                    {manualHours} horas/sem
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono mt-1">
                  <span>5 horas</span>
                  <span>15 horas</span>
                  <span>30 horas/sem</span>
                </div>
              </div>

              {/* Slider 3: Average Cost per Member */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-white flex items-center gap-2 font-medium">
                    <DollarSign className="w-4 h-4 text-primary-container" />
                    Custo Médio Mensal por Colaborador
                  </label>
                  <span className="text-sm font-extrabold text-primary-container font-mono">
                    {formatBRL(avgCost)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="15000"
                  step="500"
                  value={avgCost}
                  onChange={(e) => setAvgCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono mt-1">
                  <span>R$ 3.000</span>
                  <span>R$ 9.000</span>
                  <span>R$ 15.000</span>
                </div>
              </div>

              {/* Slider 4: Rework & Manual Error Rate */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-white flex items-center gap-2 font-medium">
                    <AlertTriangle className="w-4 h-4 text-primary-container" />
                    Taxa de Retrabalho & Erros Manuais
                  </label>
                  <span className="text-sm font-extrabold text-primary-container font-mono">
                    {reworkRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={reworkRate}
                  onChange={(e) => setReworkRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono mt-1">
                  <span>5% (Baixo)</span>
                  <span>18% (Média Mercado)</span>
                  <span>35% (Crítico)</span>
                </div>
              </div>

              {/* Slider 5: Ticket Volume */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-white flex items-center gap-2 font-medium">
                    <Layers className="w-4 h-4 text-primary-container" />
                    Volume Mensal de Tickets / Demandas
                  </label>
                  <span className="text-sm font-extrabold text-primary-container font-mono">
                    {ticketVolume.toLocaleString('pt-BR')} chamados/mês
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={ticketVolume}
                  onChange={(e) => setTicketVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono mt-1">
                  <span>500</span>
                  <span>10.000</span>
                  <span>25.000 tickets/mês</span>
                </div>
              </div>

              {/* AI Deployment Strategy Selector */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/5">
                <span className="text-xs text-white block mb-3 font-medium flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary-container" />
                  Estratégia de Implantação de IA
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAiTier(0.40)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      aiTier === 0.40
                        ? 'bg-primary-container text-on-primary-container border-primary-container shadow-lime-glow font-bold'
                        : 'bg-surface-container-high text-white/90 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">Pipelines Híbridos</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/15 font-mono font-bold">-40%</span>
                    </div>
                    <p className="text-[11px] opacity-80 leading-snug">OCR, Parsing inteligente & integrações ágeis.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAiTier(0.60)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      aiTier === 0.60
                        ? 'bg-primary-container text-on-primary-container border-primary-container shadow-lime-glow font-bold'
                        : 'bg-surface-container-high text-white/90 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">Agentes RAG Privados</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/15 font-mono font-bold">-60%</span>
                    </div>
                    <p className="text-[11px] opacity-80 leading-snug">Agentes Autônomos de IA & RAG em LLM Privada.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAiTier(0.75)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      aiTier === 0.75
                        ? 'bg-primary-container text-on-primary-container border-primary-container shadow-lime-glow font-bold'
                        : 'bg-surface-container-high text-white/90 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">End-to-End Total</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/15 font-mono font-bold">-75%</span>
                    </div>
                    <p className="text-[11px] opacity-80 leading-snug">Automação plena com validação humana (HITL).</p>
                  </button>
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container border border-white/5 cursor-pointer hover:border-white/15 transition-all">
                  <input
                    type="checkbox"
                    checked={hasLegacyIntegration}
                    onChange={(e) => setHasLegacyIntegration(e.target.checked)}
                    className="mt-0.5 rounded border-white/20 text-primary-container focus:ring-primary-container accent-primary-container"
                  />
                  <div>
                    <span className="text-xs text-white font-semibold block">Integração ERP/CRM Legado</span>
                    <span className="text-[10px] text-secondary">Totvs, SAP, Salesforce, Postgres</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container border border-white/5 cursor-pointer hover:border-white/15 transition-all">
                  <input
                    type="checkbox"
                    checked={hasLgpdCompliance}
                    onChange={(e) => setHasLgpdCompliance(e.target.checked)}
                    className="mt-0.5 rounded border-white/20 text-primary-container focus:ring-primary-container accent-primary-container"
                  />
                  <div>
                    <span className="text-xs text-white font-semibold block">Compliance & LGPD Rigoroso</span>
                    <span className="text-[10px] text-secondary">Zero vazamento & VPC isolada</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-secondary">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-primary-container" />
              Modelo calibrado: 160h/mês de jornada + mitigação de risco.
            </span>
          </div>
        </MotionWrapper>

        {/* RIGHT COLUMN: Output Metrics, Chart & Report Form */}
        <MotionWrapper delay={0.25} className="lg:col-span-6 flex flex-col justify-between gap-5">
          {/* Main Hero Metric Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-primary-container text-on-primary-container shadow-lime-glow relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-extrabold opacity-90">
                Economia Anual Estimada
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/15 text-black font-mono text-xs font-extrabold shadow-sm">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+{calculations.roiPercent}% ROI</span>
              </span>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight my-2 font-mono">
                {formatBRL(calculations.totalAnnualSavings)}
              </div>
              <p className="text-xs sm:text-sm font-medium opacity-90 leading-relaxed">
                Valor líquido recuperado da eliminação de retrabalho manual e horas operacionais ociosas.
              </p>
            </div>
          </div>

          {/* Dynamic Secondary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Liberated Hours */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
              <span className="text-xs text-secondary flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-primary-container" />
                Horas Operacionais / Ano
              </span>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  {calculations.liberatedHoursAnnual.toLocaleString('pt-BR')}h
                </span>
                <span className="text-xs text-primary-container font-semibold block mt-1">
                  +{calculations.fteEquivalent} FTEs dedicados à estratégia
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-primary-container h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(187,245,39,0.8)]"
                  style={{ width: `${Math.min(100, Math.round((calculations.liberatedHoursAnnual / 20000) * 100))}%` }}
                />
              </div>
            </div>

            {/* Estimated Payback */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
              <span className="text-xs text-secondary flex items-center gap-1.5 font-medium">
                <TrendingUp className="w-4 h-4 text-primary-container" />
                Tempo de Payback Médio
              </span>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  {calculations.paybackMonths} meses
                </span>
                <span className="text-xs text-primary-container font-semibold block mt-1">
                  Recuperação acelerada
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_6px_rgba(187,245,39,0.8)]" />
                <span className="h-2 w-2 rounded-full bg-primary-container" />
                <span className="h-2 w-2 rounded-full bg-primary-container" />
                <span className="h-2 w-2 rounded-full bg-surface-container-highest" />
                <span className="text-[11px] text-secondary ml-1 font-mono">Risco mínimo</span>
              </div>
            </div>
          </div>

          {/* 3-Year Cumulative Comparison Graph */}
          <div className="p-5 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-primary-container" />
                  Projeção Financeira Cumulativa em 3 Anos
                </span>
                <p className="text-[11px] text-secondary">
                  Custo Linear Tradicional vs. Infraestrutura Danter
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-secondary">
                  <span className="w-2.5 h-0.5 bg-gray-500" /> Linear
                </span>
                <span className="flex items-center gap-1 text-primary-container">
                  <span className="w-2.5 h-0.5 bg-primary-container" /> Danter
                </span>
              </div>
            </div>

            {/* SVG Cumulative Graph */}
            <div className="w-full h-28 relative my-1">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 110">
                <defs>
                  <linearGradient id="savingsAreaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#bbf527" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#bbf527" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Horizontal Grid lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="#282b27" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="0" y1="55" x2="400" y2="55" stroke="#282b27" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="0" y1="90" x2="400" y2="90" stroke="#282b27" strokeDasharray="3 3" strokeWidth="1" />

                {/* Shaded Cumulative Savings Polygon */}
                <polygon
                  points="0,85 130,58 260,38 400,18 400,68 260,69 130,73 0,85"
                  fill="url(#savingsAreaGradient)"
                />

                {/* Traditional Cost Path */}
                <path
                  d="M 0 85 L 130 58 L 260 38 L 400 18"
                  fill="none"
                  stroke="#8d947a"
                  strokeDasharray="4 4"
                  strokeWidth="2"
                />

                {/* Danter Cost Path */}
                <path
                  d="M 0 85 L 130 73 L 260 69 L 400 68"
                  fill="none"
                  stroke="#bbf527"
                  strokeWidth="2.5"
                />

                <circle cx="0" cy="85" r="3" fill="#8d947a" />
                <circle cx="130" cy="73" r="3.5" fill="#bbf527" />
                <circle cx="260" cy="69" r="3.5" fill="#bbf527" />
                <circle cx="400" cy="68" r="5" fill="#bbf527" className="animate-pulse" />

                <text x="210" y="52" fill="#bbf527" fontSize="10" fontWeight="700">
                  Área de Economia Líquida
                </text>
              </svg>
            </div>

            <div className="flex justify-between text-[11px] text-secondary pt-2 border-t border-white/10 mt-1 font-mono">
              <span>Hoje (Dia 0)</span>
              <span>Ano 1: <strong className="text-white">{formatBRL(calculations.year1Savings)}</strong></span>
              <span>Ano 2: <strong className="text-white">{formatBRL(calculations.year2Savings)}</strong></span>
              <span>Ano 3: <strong className="text-primary-container">{formatBRL(calculations.year3Savings)}</strong></span>
            </div>
          </div>

          {/* Efficiency Gains Breakdown */}
          <div className="p-5 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-primary-container" />
                Decomposição do Ganho de Eficiência
              </span>
              <span className="text-[11px] text-secondary font-mono">Breakdown Ponderado</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between mb-1 text-white">
                  <span>Redução de Horas em Tarefas Repetitivas</span>
                  <span className="text-primary-container font-mono font-bold">
                    45% (~{formatBRL(calculations.repetitiveReduction)})
                  </span>
                </div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
                  <span>Eliminação de Gargalos & Retrabalho Humano</span>
                  <span className="text-primary-container font-mono font-bold">
                    30% (~{formatBRL(calculations.reworkElimination)})
                  </span>
                </div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#9cd31b] h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
                  <span>Otimização de Licenças & Infraestrutura Legada</span>
                  <span className="text-primary-container font-mono font-bold">
                    25% (~{formatBRL(calculations.infraOptimization)})
                  </span>
                </div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#81b212] h-full rounded-full" style={{ width: '25%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Quick PDF Report Delivery Form */}
          <div className="p-5 rounded-2xl bg-surface-container border border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-primary-container" />
                Dossiê Executivo de ROI Personalizado (PDF)
              </span>
              <span className="text-[10px] text-primary-container font-mono uppercase bg-primary-container/10 px-2 py-0.5 rounded-full">
                Pronto para Envio
              </span>
            </div>

            {!dossierSent ? (
              <form onSubmit={handleSendDossier} className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                <input
                  type="email"
                  required
                  placeholder="seu.email@empresa.com"
                  value={dossierEmail}
                  onChange={(e) => setDossierEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-surface-container-low text-white text-xs rounded-xl border border-white/10 focus:outline-none focus:border-primary-container transition-all"
                />
                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container text-xs font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Receber Dossiê</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>
              </form>
            ) : (
              <div className="text-xs text-primary-container font-semibold mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ Dossiê com memorial de cálculo enviado para {dossierEmail}</span>
              </div>
            )}
          </div>
        </MotionWrapper>
      </div>

      {/* Comparison Table: Current Scenario vs. Danter Scenario */}
      <MotionWrapper delay={0.3} className="mb-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary-container" />
                Matriz Comparativa: Cenário Atual vs. Arquitetura Danter
              </h3>
              <p className="text-xs text-secondary mt-1">
                Como os gargalos operacionais são convertidos em elasticidade e lucro contínuo
              </p>
            </div>
            <span className="text-xs text-primary-container font-mono px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 w-fit">
              Benchmark Baseado em 42+ Casos Reais
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs text-secondary uppercase tracking-wider font-mono">
                  <th className="py-3 px-4">Dimensão Operacional</th>
                  <th className="py-3 px-4">Cenário Tradicional (Status Quo)</th>
                  <th className="py-3 px-4 text-primary-container bg-primary-container/5 rounded-t-lg">
                    Com Danter (IA Autônoma)
                  </th>
                  <th className="py-3 px-4 text-right">Impacto Direto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {siteContent.comparisonMatrix.map((row) => (
                  <tr key={row.dimension} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.dimension}</td>
                    <td className="py-4 px-4 text-secondary">{row.traditional}</td>
                    <td className="py-4 px-4 text-white bg-primary-container/5 font-semibold">
                      {row.danter}
                    </td>
                    <td className="py-4 px-4 text-right text-primary-container font-mono font-bold whitespace-nowrap">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MotionWrapper>

      {/* 3 Authority Proof Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MotionWrapper delay={0.35} className="p-6 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Segurança e Governança Enterprise</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            Modelos e vetores executados em instâncias fechadas de VPC, em total conformidade com a LGPD e SOC2. Zero vazamento de dados corporativos.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.4} className="p-6 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Deploy Ágil em 4 a 6 Semanas</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            Metodologia Danter High-Velocity: prototipamos e conectamos agentes nos seus bancos legados sem interromper o fluxo operacional em produção.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.45} className="p-6 rounded-2xl bg-surface-container-low border border-white/10 flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Integração Total com Seu Stack</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            Conexão bidirecional nativa com Totvs, SAP, Salesforce, Postgres, HubSpot e sistemas legados via microserviços customizados de alto throughput.
          </p>
        </MotionWrapper>
      </div>

      {/* Action CTA Banner after ROI */}
      <MotionWrapper delay={0.5} className="mt-12 text-center flex flex-col items-center">
        <Magnetic strength={0.3}>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:brightness-110 shadow-lime-glow transition-all duration-150 cursor-pointer active:scale-[0.97]"
          >
            <span>Validar Esse Modelo com Nossos Arquitetos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Magnetic>
        <span className="text-xs text-secondary mt-3 font-mono">
          Sem compromisso comercial • Diagnóstico técnico de 30 minutos
        </span>
      </MotionWrapper>
    </section>
  );
};
