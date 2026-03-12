// src/components/Hero.jsx
// Athenea Analytics — Hero Section with Integrated Product Mockup
// Stack: React, Tailwind CSS, Framer Motion, Lucide React

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Zap,
  Activity,
  Bell,
  Search,
  LayoutDashboard,
  BarChart3,
  GitMerge,
  Settings,
  ChevronUp,
  ChevronDown,
  Dot,
  Play,
  Circle,
  Minus,
  X,
} from "lucide-react";

// ─── Tiny reusable sub-components ───────────────────────────────────────────

const LiveDot = ({ color = "bg-athenea-live-500" }) => (
  <span className="relative flex h-2 w-2">
    <span
      className={`absolute inline-flex h-full w-full animate-pulse-live rounded-full opacity-75 ${color}`}
    />
    <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
  </span>
);

const MetricBadge = ({ label, value, delta, positive = true }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] text-athenea-neutral-500 uppercase tracking-widest font-mono">
      {label}
    </span>
    <span className="text-base font-display font-bold text-white leading-none">
      {value}
    </span>
    <span
      className={`flex items-center gap-0.5 text-[11px] font-mono ${
        positive ? "text-athenea-live-400" : "text-athenea-rose-400"
      }`}
    >
      {positive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
      {delta}
    </span>
  </div>
);

// ─── Bar Chart (pure Tailwind) ────────────────────────────────────────────────

const bars = [
  { h: "h-[35%]", color: "bg-athenea-primary-700/60" },
  { h: "h-[55%]", color: "bg-athenea-primary-600/70" },
  { h: "h-[45%]", color: "bg-athenea-primary-500/80" },
  { h: "h-[70%]", color: "bg-athenea-primary-400" },
  { h: "h-[60%]", color: "bg-athenea-secondary-500/80" },
  { h: "h-[80%]", color: "bg-athenea-secondary-400" },
  { h: "h-[65%]", color: "bg-athenea-secondary-300/90" },
  { h: "h-[90%]", color: "bg-athenea-primary-300" },
];

const BarChart = () => (
  <div className="flex items-end gap-1.5 h-20 w-full px-1">
    {bars.map((bar, i) => (
      <motion.div
        key={i}
        className={`flex-1 rounded-sm ${bar.color} origin-bottom`}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: "easeOut" }}
        style={{ height: bar.h.replace("h-[", "").replace("]", "") }}
      >
        <div
          className={`w-full rounded-sm ${bar.color}`}
          style={{ height: "100%" }}
        />
      </motion.div>
    ))}
  </div>
);

// ─── Sparkline (SVG inline) ──────────────────────────────────────────────────

const Sparkline = ({ color = "#7c3aed", points = "0,40 15,30 30,35 45,20 60,25 75,10 90,15 105,5" }) => (
  <svg viewBox="0 0 110 50" className="w-full h-10" preserveAspectRatio="none">
    <defs>
      <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
    <polyline
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      points={points}
    />
    <polygon
      fill={`url(#grad-${color.replace("#", "")})`}
      points={`0,50 ${points} 105,50`}
    />
  </svg>
);

// ─── Live Automation Row ──────────────────────────────────────────────────────

const automationRows = [
  { name: "Meta Ads — Budget Optimizer", status: "Running", statusColor: "text-athenea-live-400", dotColor: "bg-athenea-live-500", time: "2s ago" },
  { name: "Google Ads — Bid Adjustment", status: "Running", statusColor: "text-athenea-live-400", dotColor: "bg-athenea-live-500", time: "14s ago" },
  { name: "TikTok — Anomaly Alert", status: "Triggered", statusColor: "text-athenea-amber-400", dotColor: "bg-athenea-amber-400", time: "1m ago" },
  { name: "LinkedIn — Report Generator", status: "Queued", statusColor: "text-athenea-neutral-400", dotColor: "bg-athenea-neutral-600", time: "5m ago" },
];

const AutomationPanel = () => (
  <div className="flex flex-col gap-1.5">
    {automationRows.map((row, i) => (
      <motion.div
        key={i}
        className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 + i * 0.1 }}
      >
        <div className="flex items-center gap-2">
          <LiveDot color={row.dotColor} />
          <span className="text-[11px] text-athenea-neutral-300 font-body">{row.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-mono ${row.statusColor}`}>{row.status}</span>
          <span className="text-[10px] text-athenea-neutral-600 font-mono">{row.time}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Browser Mockup ───────────────────────────────────────────────────────────

const BrowserMockup = () => (
  <motion.div
    className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-glow-primary"
    initial={{ opacity: 0, y: 40, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    style={{
      background: "linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(13,17,23,0.98) 100%)",
      boxShadow: "0 0 0 1px rgba(124,58,237,0.2), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(124,58,237,0.15)",
    }}
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-rose-500/70 flex items-center justify-center"><X size={6} className="text-rose-900 opacity-0 group-hover:opacity-100" /></div>
        <div className="w-3 h-3 rounded-full bg-athenea-amber-500/70" />
        <div className="w-3 h-3 rounded-full bg-athenea-live-500/70" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-1 w-64">
          <div className="w-2 h-2 rounded-full bg-athenea-live-500" />
          <span className="text-[11px] text-athenea-neutral-500 font-mono">app.athenea.ai/dashboard</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Bell size={13} className="text-athenea-neutral-600" />
        <div className="w-6 h-6 rounded-full bg-athenea-primary-600/50 border border-athenea-primary-500/30 flex items-center justify-center">
          <span className="text-[9px] text-athenea-primary-200 font-bold">A</span>
        </div>
      </div>
    </div>

    {/* App layout */}
    <div className="flex h-[340px] sm:h-[380px]">
      {/* Sidebar */}
      <div className="w-12 flex flex-col items-center py-4 gap-4 border-r border-white/[0.05] bg-white/[0.01]">
        {/* Logo icon */}
        <div className="w-7 h-7 rounded-lg bg-athenea-gradient flex items-center justify-center mb-2">
          <Sparkles size={13} className="text-white" />
        </div>
        {[LayoutDashboard, BarChart3, Activity, GitMerge, Zap, Settings].map((Icon, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              i === 0
                ? "bg-athenea-primary-600/40 text-athenea-primary-300"
                : "text-athenea-neutral-600 hover:text-athenea-neutral-400 hover:bg-white/[0.04]"
            }`}
          >
            <Icon size={14} />
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
          <div>
            <p className="text-[11px] text-athenea-neutral-500 font-body">Performance Overview</p>
            <p className="text-sm font-display font-semibold text-white">Dashboard Principal</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-athenea-live-500/10 border border-athenea-live-500/20 rounded-full px-2 py-1">
              <LiveDot />
              <span className="text-[10px] text-athenea-live-400 font-mono">LIVE</span>
            </div>
            <div className="flex items-center gap-1 bg-white/[0.04] rounded-md px-2 py-1">
              <Search size={10} className="text-athenea-neutral-500" />
              <span className="text-[10px] text-athenea-neutral-500">Buscar...</span>
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-0 border-b border-white/[0.05]">
          {[
            { label: "ROAS Global", value: "4.82x", delta: "+12.4%", positive: true },
            { label: "CPA Medio", value: "€7.43", delta: "−8.1%", positive: true },
            { label: "Impresiones", value: "2.4M", delta: "+31%", positive: true },
            { label: "Churn Risk", value: "3 clientes", delta: "+2", positive: false },
          ].map((m, i) => (
            <div
              key={i}
              className={`px-3 py-2.5 ${i < 3 ? "border-r border-white/[0.05]" : ""}`}
            >
              <MetricBadge {...m} />
            </div>
          ))}
        </div>

        {/* Charts area */}
        <div className="flex flex-1 gap-0 overflow-hidden">
          {/* Left: Bar chart panel */}
          <div className="flex-1 p-3 border-r border-white/[0.05] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-athenea-neutral-400 font-mono uppercase tracking-widest">Revenue por canal</span>
              <span className="text-[10px] text-athenea-primary-400 font-mono">últimos 8 días</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <BarChart />
              <div className="flex justify-between mt-1">
                {["L", "M", "X", "J", "V", "S", "D", "H"].map((d, i) => (
                  <span key={i} className="text-[9px] text-athenea-neutral-700 font-mono flex-1 text-center">{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sparklines + Automations */}
          <div className="w-[200px] flex flex-col">
            {/* Sparklines */}
            <div className="p-3 border-b border-white/[0.05] flex flex-col gap-2">
              <span className="text-[10px] text-athenea-neutral-400 font-mono uppercase tracking-widest">Predicción IA — 7d</span>
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-athenea-primary-300 font-mono">Meta Ads</span>
                  <span className="text-[10px] text-athenea-live-400 font-mono">↑ 18%</span>
                </div>
                <Sparkline color="#8b5cf6" points="0,38 15,30 30,34 45,20 60,24 75,12 90,16 105,6" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-athenea-secondary-300 font-mono">Google Ads</span>
                  <span className="text-[10px] text-athenea-amber-400 font-mono">↓ 4%</span>
                </div>
                <Sparkline color="#06b6d4" points="0,20 15,25 30,22 45,30 60,28 75,34 90,30 105,38" />
              </div>
            </div>

            {/* Automations */}
            <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
              <span className="text-[10px] text-athenea-neutral-400 font-mono uppercase tracking-widest">Live Automations</span>
              <AutomationPanel />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scan line overlay effect */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.015]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
      }}
    />
  </motion.div>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["predice", "automatiza", "optimiza"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-athenea-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(3,7,18,0.8) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16">
          {/* ── Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-2 bg-athenea-primary-950/80 border border-athenea-primary-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
            <Sparkles size={13} className="text-athenea-primary-400" />
            <span className="text-xs font-body text-athenea-primary-300">
              Analítica Proactiva con IA — Versión 2.0 disponible
            </span>
            <ArrowRight size={11} className="text-athenea-primary-400" />
          </motion.div>

          {/* ── Headline ── */}
          <div className="text-center max-w-4xl">
            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              La IA que{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {words[activeWord]}
                </span>
                <motion.span
                  key={activeWord}
                  className="absolute inset-0 rounded-lg -z-10"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <br />
              el rendimiento de tu agencia
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-athenea-neutral-400 font-body leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Athenea unifica todos tus canales, predice caídas de ROI antes de
              que ocurran y ejecuta automatizaciones en tiempo real. Deja de
              analizar el pasado. Empieza a controlar el futuro.
            </motion.p>
          </div>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-primary"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
              }}
            >
              <span className="relative z-10">Empezar gratis — 14 días</span>
              <ArrowRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #6d28d9 0%, #0891b2 100%)",
                }}
              />
            </button>

            <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-body font-medium text-athenea-neutral-300 text-sm border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 backdrop-blur-sm">
              <Play size={13} className="text-athenea-primary-400" />
              Ver demo en vivo
            </button>
          </motion.div>

          {/* ── Social Proof ── */}
          <motion.div
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <div className="flex -space-x-2">
              {["#7c3aed", "#06b6d4", "#10b981", "#f59e0b", "#f43f5e"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-athenea-bg flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: color, zIndex: 5 - i }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-athenea-neutral-400 font-body">
              <span className="text-white font-semibold">+340 agencias</span> ya usan Athenea
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-athenea-amber-400 text-xs">★</span>
              ))}
              <span className="text-athenea-neutral-500 text-xs ml-1">4.9/5</span>
            </div>
          </motion.div>

          {/* ── Product Mockup ── */}
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Glow halo behind mockup */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[200px] -top-20 pointer-events-none blur-[80px] opacity-40"
              style={{
                background: "radial-gradient(ellipse, rgba(124,58,237,0.6) 0%, rgba(6,182,212,0.3) 60%, transparent 100%)",
              }}
            />
            <BrowserMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(3,7,18,1) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
