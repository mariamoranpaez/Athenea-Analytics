// src/sections/CTA.jsx
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Clock, TrendingUp } from "lucide-react";

const trustPoints = [
  { icon: Shield, text: "Sin tarjeta de crédito" },
  { icon: Clock, text: "Setup en 10 minutos" },
  { icon: TrendingUp, text: "ROI visible en 7 días" },
];

export default function CTA() {
  return (
    <section className="relative py-32 bg-athenea-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.05) 50%, transparent 80%)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Icon badge */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-athenea-primary-600/40"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.1) 100%)",
              boxShadow: "0 0 40px rgba(124,58,237,0.3)",
            }}>
            <Sparkles size={28} className="text-athenea-primary-300" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Tu agencia merece una IA{" "}
              <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                que trabaje
              </span>
              {" "}contigo
            </h2>
            <p className="text-lg font-body text-athenea-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Más de 340 agencias ya han dejado atrás los reportes manuales.
              Empieza gratis hoy y descubre cuánto tiempo y dinero estás perdiendo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-body font-semibold text-white text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-primary"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}
            >
              <Sparkles size={16} />
              Empezar gratis — 14 días
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-6 py-4 rounded-xl font-body text-athenea-neutral-300 text-sm border border-white/[0.08] hover:bg-white/[0.04] transition-all">
              Ver demo guiada →
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-body text-athenea-neutral-500">
                <Icon size={13} className="text-athenea-live-500" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
