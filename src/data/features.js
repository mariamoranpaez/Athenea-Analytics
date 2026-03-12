// src/data/features.js
// Athenea Analytics — Core Feature Definitions
// Each feature maps to a real pain point agencies face daily.

import {
  BrainCircuit,
  Zap,
  BarChart3,
  GitMerge,
  ShieldCheck,
  Telescope,
} from "lucide-react";

/**
 * @typedef {Object} Feature
 * @property {string}   id          — Unique slug
 * @property {React.ComponentType} icon — Lucide icon component
 * @property {string}   iconColor   — Tailwind text-color class
 * @property {string}   iconBg      — Tailwind bg-color class (glass)
 * @property {string}   badge       — Short category label
 * @property {string}   badgeColor  — Tailwind class for badge
 * @property {string}   title       — Feature headline
 * @property {string}   description — 2-sentence value proposition
 * @property {string}   metric      — Quantified impact stat
 * @property {string}   metricLabel — Label for the stat
 */

export const features = [
  {
    id: "predictive-ia",
    icon: BrainCircuit,
    iconColor: "text-athenea-primary-400",
    iconBg: "bg-athenea-primary-950/60",
    badge: "IA Predictiva",
    badgeColor: "bg-athenea-primary-950 text-athenea-primary-300 border-athenea-primary-800/50",
    title: "Motor de Predicción de ROI",
    description:
      "Nuestros modelos de ML analizan más de 200 señales de comportamiento para anticipar qué campañas perderán rendimiento antes de que ocurra. Actúa sobre el futuro, no sobre el pasado.",
    metric: "+43%",
    metricLabel: "mejora media en ROAS",
  },
  {
    id: "workflow-automation",
    icon: Zap,
    iconColor: "text-athenea-amber-400",
    iconBg: "bg-amber-950/60",
    badge: "Automatización",
    badgeColor: "bg-amber-950 text-amber-300 border-amber-800/50",
    title: "Flujos de Trabajo Autónomos",
    description:
      "Construye pipelines de automatización visuales que reaccionan a eventos en tiempo real: si el CTR cae un 15%, Athenea pausa el ad set, notifica al equipo y propone una variante nueva. Sin código.",
    metric: "12h",
    metricLabel: "ahorradas por semana/agencia",
  },
  {
    id: "unified-reporting",
    icon: BarChart3,
    iconColor: "text-athenea-secondary-400",
    iconBg: "bg-cyan-950/60",
    badge: "Reporting Unificado",
    badgeColor: "bg-cyan-950 text-cyan-300 border-cyan-800/50",
    title: "Dashboard de Señal Única",
    description:
      "Consolida Google Ads, Meta Ads, TikTok, LinkedIn y Analytics en una sola capa semántica. Tus clientes ven un report de marca blanca en tiempo real, sin exportaciones manuales.",
    metric: "18+",
    metricLabel: "fuentes de datos conectadas",
  },
  {
    id: "attribution-engine",
    icon: GitMerge,
    iconColor: "text-athenea-live-400",
    iconBg: "bg-emerald-950/60",
    badge: "Atribución",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-800/50",
    title: "Atribución Multi-Touch Real",
    description:
      "Abandona el last-click. El motor de atribución data-driven de Athenea asigna crédito real a cada touchpoint del funnel, revelando qué canales generan valor y cuáles solo consumen presupuesto.",
    metric: "−31%",
    metricLabel: "reducción de gasto ineficiente",
  },
  {
    id: "anomaly-detection",
    icon: ShieldCheck,
    iconColor: "text-athenea-rose-400",
    iconBg: "bg-rose-950/60",
    badge: "Alertas Inteligentes",
    badgeColor: "bg-rose-950 text-rose-300 border-rose-800/50",
    title: "Detección de Anomalías Proactiva",
    description:
      "El sistema de vigilancia 24/7 detecta picos de CPC, caídas de conversión o fraude de tráfico en minutos, no días. Cada alerta incluye contexto, causa probable y acción sugerida.",
    metric: "<4min",
    metricLabel: "tiempo medio de detección",
  },
  {
    id: "competitive-intel",
    icon: Telescope,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-950/60",
    badge: "Inteligencia Competitiva",
    badgeColor: "bg-violet-950 text-violet-300 border-violet-800/50",
    title: "Radar de Competencia con IA",
    description:
      "Monitoriza la share of voice, creatividades y estrategias de puja de tus competidores directos. Athenea sintetiza señales externas y las cruza con tu rendimiento para darte ventaja táctica real.",
    metric: "360°",
    metricLabel: "visibilidad de mercado",
  },
];

export default features;
