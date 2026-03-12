// src/components/Features.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "../data/features";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.07] bg-glass transition-all duration-300 hover:border-athenea-primary-800/50 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      whileHover={{
        boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />

      {/* Icon + Badge row */}
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.iconBg} border border-white/[0.06]`}>
          <Icon size={18} className={feature.iconColor} />
        </div>
        <span className={`text-[10px] font-mono px-2 py-1 rounded-full border ${feature.badgeColor}`}>
          {feature.badge}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-display font-semibold text-white text-base leading-tight">
          {feature.title}
        </h3>
        <p className="text-sm font-body text-athenea-neutral-400 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Metric */}
      <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-baseline gap-2">
        <span className="font-display font-bold text-2xl"
          style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {feature.metric}
        </span>
        <span className="text-xs font-body text-athenea-neutral-500">{feature.metricLabel}</span>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-32 bg-athenea-bg overflow-hidden">
      {/* Top fade from hero */}
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(3,7,18,1) 0%, transparent 100%)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-athenea-primary-950/80 border border-athenea-primary-800/50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-athenea-primary-400 animate-pulse-slow" />
            <span className="text-xs font-mono text-athenea-primary-300 uppercase tracking-widest">
              Capacidades del producto
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Todo lo que necesita{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              una agencia élite
            </span>
          </h2>
          <p className="text-base font-body text-athenea-neutral-400 leading-relaxed">
            Athenea no es otro dashboard de reporting. Es un sistema de inteligencia operativa
            que trabaja 24/7 para que tu equipo tome decisiones más rápidas y mejor respaldadas.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm font-body text-athenea-neutral-500 mb-4">
            ¿Quieres ver cómo funciona en tu agencia?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-athenea-primary-300 hover:text-athenea-primary-200 transition-colors group"
          >
            Ver planes y precios
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
