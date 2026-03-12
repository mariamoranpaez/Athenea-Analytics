// src/components/Login.jsx
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export default function Login({ onBack }) {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-athenea-bg">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-hero-mesh opacity-60" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Glass Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md p-8 md:p-10 rounded-4xl bg-athenea-surface/40 backdrop-blur-2xl border border-white/[0.08] shadow-glass-card hover:shadow-glass-card-hover transition-all duration-500 mt-12 md:mt-0"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 16px 48px rgba(0,0,0,0.5)" }}
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute -top-12 left-0 group flex items-center gap-2 text-sm font-body text-athenea-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-glow-sm-primary"
            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
            <Sparkles size={24} className="text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-2 text-center">
            Bienvenido de nuevo
          </h2>
          <p className="font-body text-athenea-neutral-400 text-center text-sm">
            Ingresa a tu panel de control de analíticas
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-sm text-athenea-neutral-300 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@agencia.com"
              className="w-full bg-athenea-card border border-athenea-border rounded-xl px-4 py-3 font-body text-white placeholder:text-athenea-neutral-600 focus:outline-none focus:border-athenea-primary-500 focus:ring-1 focus:ring-athenea-primary-500/50 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="font-body text-sm text-athenea-neutral-300">
                Contraseña
              </label>
              <a href="#" className="font-body text-xs text-athenea-primary-400 hover:text-athenea-primary-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-athenea-card border border-athenea-border rounded-xl px-4 py-3 font-body text-white placeholder:text-athenea-neutral-600 focus:outline-none focus:border-athenea-primary-500 focus:ring-1 focus:ring-athenea-primary-500/50 transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full flex items-center justify-center gap-2 mt-2 px-4 py-3.5 rounded-xl font-body font-semibold text-white transition-all overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Sesión
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-body text-athenea-neutral-500">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-white hover:text-athenea-primary-400 transition-colors">
            Crea una cuenta gratis
          </a>
        </p>
      </motion.div>
    </div>
  );
}
