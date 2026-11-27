'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Globe,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import { Magnetic } from '@/components/ui/Magnetic';
import { CLOUD_REGIONS, REGION_ORDER, type RegionKey } from '@/data/regions';

interface Scenario {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  command: string;
  steps: { title: string; detail: string; latency: string }[];
  output: string;
  tokens: number;
}

interface HeroInteractiveConsoleProps {
  selectedRegion?: RegionKey;
  onSelectRegion?: (region: RegionKey) => void;
  onSimulationChange?: (running: boolean) => void;
}

export const HeroInteractiveConsole: React.FC<HeroInteractiveConsoleProps> = ({
  selectedRegion: controlledRegion,
  onSelectRegion,
  onSimulationChange,
}) => {
  const toast = useToast();
  const [internalRegion, setInternalRegion] = useState<RegionKey>('sa');
  const selectedRegion = controlledRegion ?? internalRegion;
  const setSelectedRegion = (region: RegionKey) => {
    setInternalRegion(region);
    onSelectRegion?.(region);
  };

  const [selectedScenarioId, setSelectedScenarioId] = useState('whatsapp');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const regions = CLOUD_REGIONS;

  const scenarios: Scenario[] = [
    {
      id: 'whatsapp',
      name: 'Agente WhatsApp & CRM',
      icon: <Zap className="w-4 h-4 text-primary-container" />,
      description: 'Triagem autônoma de lead corporativo com busca em base vetorial e validação de regras de negócio.',
      command: 'danter agent dispatch --flow=lead-qualification --mode=autonomous',
      steps: [
        { title: 'Webhook Ingestão', detail: 'Payload validado via HMAC SHA256 em 4ms', latency: '4ms' },
        { title: 'Busca Vetorial pgvector', detail: 'Similaridade cosseno em 128 chunks (score: 0.984)', latency: '18ms' },
        { title: 'Execução Determinística', detail: 'Lead qualificado no CRM Totvs & Slot Meet confirmado', latency: '1.14s' },
      ],
      output: JSON.stringify(
        {
          status: 'SUCCESS',
          lead: 'Diretoria de Operações',
          company: 'Empresa Enterprise S/A',
          qualificationScore: 98.4,
          destination: 'Totvs ERP + Google Meet',
          sla: '100% Determinístico',
        },
        null,
        2
      ),
      tokens: 142,
    },
    {
      id: 'deploy',
      name: 'Deploy Zero-Downtime',
      icon: <Cpu className="w-4 h-4 text-primary-container" />,
      description: 'Rollout contínuo de microsserviço em cluster Kubernetes sem desconectar sessões ativas.',
      command: 'danter rollout --app=billing-service --canary=15% --zero-downtime',
      steps: [
        { title: 'Canary Healthcheck', detail: 'Pods versão v2.4 respondendo 200 OK em 3 nós', latency: '12ms' },
        { title: 'Troca de Tráfego Ingress', detail: 'Roteamento balanceado via Envoy sem drop de pacotes', latency: '28ms' },
        { title: 'Migração de Banco Segura', detail: 'Schema backward-compatible aplicado com rollback ativo', latency: '820ms' },
      ],
      output: JSON.stringify(
        {
          rollout: 'COMPLETED_SUCCESSFULLY',
          activeNodes: 6,
          droppedConnections: 0,
          downtimeRecorded: '0.000ms',
          rollbackPrepared: true,
        },
        null,
        2
      ),
      tokens: 88,
    },
    {
      id: 'rag',
      name: 'RAG Vetorial de Contratos',
      icon: <Sparkles className="w-4 h-4 text-primary-container" />,
      description: 'Auditoria instantânea de documento jurídico de 120 páginas com identificação de cláusulas de risco.',
      command: 'danter rag parse --doc=minuta-contrato-v3.pdf --compliance=soc2',
      steps: [
        { title: 'OCR & Parsing Estruturado', detail: '120 páginas tokenizadas em VPC isolada em memória', latency: '240ms' },
        { title: 'Matching de Riscos & LGPD', detail: 'Conformidade com 18 parâmetros de governança corporativa', latency: '310ms' },
        { title: 'Relatório Executivo', detail: '0 cláusulas críticas de risco encontradas | Aprovado', latency: '490ms' },
      ],
      output: JSON.stringify(
        {
          document: 'minuta-contrato-v3.pdf',
          riskLevel: 'LOW (APPROVED)',
          clausesAudited: 84,
          compliance: 'LGPD + SOC2 Type II Verified',
          auditSignature: 'sha256:d8a9f4c1e...67b',
        },
        null,
        2
      ),
      tokens: 284,
    },
  ];

  const currentScenario = scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    onSimulationChange?.(true);
    setHasCompleted(false);
    setCurrentStepIndex(0);

    // Step 1
    setTimeout(() => {
      setCurrentStepIndex(1);
    }, 450);

    // Step 2
    setTimeout(() => {
      setCurrentStepIndex(2);
    }, 950);

    // Completion
    setTimeout(() => {
      setIsRunning(false);
      onSimulationChange?.(false);
      setHasCompleted(true);
      toast.success(
        'Simulação Concluída!',
        `Fluxo "${currentScenario.name}" executado na região ${regions[selectedRegion].label}.`
      );
    }, 1450);
  };

  const handleCopyOutput = () => {
    navigator.clipboard?.writeText(currentScenario.output);
    setCopied(true);
    toast.success('JSON Copiado!', 'Payload de resposta copiado para sua área de transferência.');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mt-6 pt-6 border-t border-white/10 relative z-10 text-left">
      {/* Console Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary-container/15 border border-primary-container/30 flex items-center justify-center text-primary-container">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <span>Console Interativo de Engenharia</span>
              <span className="px-2 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px]">
                Live Playground
              </span>
            </h4>
            <p className="text-[11px] text-secondary">
              Teste o fluxo de trabalho e tempos de resposta reais da arquitetura Danter.
            </p>
          </div>
        </div>

        {/* Region Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0c0f0c] border border-white/10 self-start md:self-auto">
          {REGION_ORDER.map((rKey) => {
            const reg = regions[rKey];
            const isSelected = selectedRegion === rKey;
            return (
              <button
                key={rKey}
                type="button"
                onClick={() => {
                  setSelectedRegion(rKey);
                  toast.info(`Região alterada: ${reg.label}`, `Latência de rota calibrada para ${reg.ping}`);
                }}
                className={`relative px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all duration-150 cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                  isSelected
                    ? 'text-on-primary-container font-bold bg-primary-container shadow-lime-glow'
                    : 'text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{reg.flag}</span>
                <span>{reg.ping}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Box */}
      <div className="rounded-xl bg-[#0c0f0c] border border-white/10 overflow-hidden shadow-2xl">
        {/* Scenario Tabs Bar with Emil Kowalski layout pill */}
        <div className="flex flex-wrap items-center gap-1 p-2 bg-[#141814] border-b border-white/10">
          {scenarios.map((scenario) => {
            const isActive = selectedScenarioId === scenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => {
                  setSelectedScenarioId(scenario.id);
                  setHasCompleted(false);
                  setCurrentStepIndex(-1);
                }}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer active:scale-95 ${
                  isActive ? 'text-on-primary-container font-bold' : 'text-secondary hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hero-scenario-pill"
                    className="absolute inset-0 bg-primary-container rounded-lg shadow-lime-glow -z-10"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span>{scenario.icon}</span>
                <span>{scenario.name}</span>
              </button>
            );
          })}
        </div>

        {/* Console Workspace: Command bar + Execution Steps */}
        <div className="p-4 sm:p-5 flex flex-col gap-4">
          {/* CLI Simulation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#191c19] border border-white/5">
            <div className="flex items-center gap-2 overflow-hidden font-mono text-xs text-secondary">
              <span className="text-primary-container font-bold">$</span>
              <span className="text-white truncate select-all">{currentScenario.command}</span>
            </div>

            <Magnetic strength={0.2}>
              <button
                type="button"
                disabled={isRunning}
                onClick={handleRunSimulation}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container text-xs font-bold hover:brightness-110 shadow-lime-glow transition-all duration-150 cursor-pointer disabled:opacity-50 active:scale-95 shrink-0"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Executar Simulação</span>
                  </>
                )}
              </button>
            </Magnetic>
          </div>

          {/* 3 Pipeline Execution Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.steps.map((step, idx) => {
              const isPassed = currentStepIndex >= idx || hasCompleted;
              const isCurrent = currentStepIndex === idx && isRunning;
              return (
                <div
                  key={step.title}
                  className={`p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-2 ${
                    isPassed
                      ? 'bg-primary-container/10 border-primary-container/30 shadow-[0_0_12px_rgba(187,245,39,0.12)]'
                      : isCurrent
                      ? 'bg-surface-container-high border-primary-container animate-pulse'
                      : 'bg-surface-container-low border-white/5 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                      Etapa 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-primary-container font-semibold">
                      {step.latency}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">{step.title}</h5>
                    <p className="text-[11px] text-secondary leading-snug">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal Real-Time Output Stream */}
          <div className="rounded-xl bg-[#070907] border border-white/10 p-3.5 relative overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-gray-400 ml-1">stdout • response payload</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary-container text-[11px]">
                  Região: {regions[selectedRegion].label.split(' ')[0]}
                </span>
                <button
                  type="button"
                  onClick={handleCopyOutput}
                  aria-label="Copiar resposta"
                  className="p-1 rounded text-secondary hover:text-white transition-colors duration-150 active:scale-90"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-primary-container" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <pre className="text-gray-300 overflow-x-auto text-[11px] leading-relaxed max-h-36">
              <code>{currentScenario.output}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
