// src/components/Pricing.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2, ArrowRight, HelpCircle } from "lucide-react";

const plans = [
  {
    id: "starter",
    icon: Zap,
    name: "Starter",
    tagline: "Para agencias que dan el primer paso",
    monthlyPrice: 149,
    yearlyPrice: 99,
    highlight: false,
    badge: null,
    cta: "Empezar gratis 14 días",
    ctaVariant: "outline",
    features: [
      "Hasta 3 cuentas publicitarias",
      "Dashboard unificado en tiempo real",
      "Alertas de anomalías básicas",
      "Reporting de marca blanca (PDF)",
      "Atribución last-click + linear",
      "2 flujos de automatización activos",
      "Soporte por email (48h)",
      "1 usuario incluido",
    ],
    disabled: [],
  },
  {
    id: "pro",
    icon: Sparkles,
    name: "Pro",
    tagline: "La herramienta estándar de agencias en crecimiento",
    monthlyPrice: 349,
    yearlyPrice: 229,
    highlight: true,
    badge: "Más popular",
    cta: "Empezar con Pro",
    ctaVariant: "gradient",
    features: [
      "Hasta 20 cuentas publicitarias",
      "Motor de predicción IA de ROI",
      "Alertas inteligentes multi-canal",
      "Atribución multi-touch data-driven",
      "Flujos de automatización ilimitados",
      "Reporting generativo con IA (branded)",
      "Inteligencia competitiva básica",
      "Soporte prioritario (4h)",
      "Hasta 8 usuarios",
      "API access (5.000 req/mes)",
    ],
    disabled: [],
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    tagline: "Para grandes agencias y grupos de medios",
    monthlyPrice: null,
    yearlyPrice: null,
    highlight: false,
    badge: "Personalizado",
    cta: "Hablar con ventas",
    ctaVariant: "outline",
    features: [
      "Cuentas publicitarias ilimitadas",
      "Modelos de predicción personalizados",
      "SLA 99.9% + soporte 24/7 dedicado",
      "White-label completo + dominio propio",
      "Atribución multi-touch avanzada (Shapley)",
      "Inteligencia competitiva 360°",
      "Integraciones custom vía API",
      "Usuarios ilimitados + SSO/SAML",
      "Onboarding y training dedicado",
      "Facturación personalizada",
    ],
    disabled: [],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32 bg-athenea-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-athenea-primary-950/80 border border-athenea-primary-800/50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-athenea-secondary-400 animate-pulse-slow" />
            <span className="text-xs font-mono text-athenea-secondary-300 uppercase tracking-widest">Precios transparentes</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Escala según{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              tu ambición
            </span>
          </h2>
          <p className="text-base font-body text-athenea-neutral-400">
            Sin contratos a largo plazo. Sin costes ocultos. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
                !yearly ? "bg-white/[0.08] text-white" : "text-athenea-neutral-500 hover:text-athenea-neutral-300"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
                yearly ? "bg-white/[0.08] text-white" : "text-athenea-neutral-500 hover:text-athenea-neutral-300"
              }`}
            >
              Anual
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-athenea-live-500/20 text-athenea-live-400 border border-athenea-live-500/30">
                −35%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`relative flex flex-col rounded-2xl border p-7 overflow-hidden ${
                  plan.highlight
                    ? "border-athenea-primary-600/60"
                    : "border-white/[0.07]"
                }`}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(160deg, rgba(124,58,237,0.12) 0%, rgba(13,17,23,0.98) 40%)"
                    : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(13,17,23,0.98) 100%)",
                  boxShadow: plan.highlight
                    ? "0 0 0 1px rgba(124,58,237,0.3), 0 24px 60px rgba(124,58,237,0.15), 0 8px 32px rgba(0,0,0,0.4)"
                    : "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className={`absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-semibold border ${
                    plan.highlight
                      ? "bg-athenea-primary-600 border-athenea-primary-400 text-white"
                      : "bg-athenea-surface border-athenea-neutral-700 text-athenea-neutral-400"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    plan.highlight
                      ? "bg-athenea-primary-600/30 border-athenea-primary-500/40"
                      : "bg-white/[0.04] border-white/[0.07]"
                  }`}>
                    <Icon size={16} className={plan.highlight ? "text-athenea-primary-300" : "text-athenea-neutral-400"} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base">{plan.name}</p>
                    <p className="text-[11px] font-body text-athenea-neutral-500">{plan.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/[0.06]">
                  {price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-4xl text-white">€{price}</span>
                      <span className="text-sm font-body text-athenea-neutral-500">/mes</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-3xl text-white">A medida</span>
                    </div>
                  )}
                  {price && yearly && (
                    <p className="text-xs font-body text-athenea-neutral-500 mt-1">
                      Facturado anualmente · {price * 12}€/año
                    </p>
                  )}
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-athenea-primary-400" : "text-athenea-live-500"}`} />
                      <span className="text-sm font-body text-athenea-neutral-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold transition-all duration-300 ${
                    plan.ctaVariant === "gradient"
                      ? "text-white hover:scale-[1.02] hover:shadow-glow-sm-primary"
                      : "text-athenea-neutral-200 border border-white/[0.1] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                  style={plan.ctaVariant === "gradient"
                    ? { background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }
                    : {}}
                >
                  {plan.cta}
                  <ArrowRight size={13} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          className="mt-10 text-center text-xs font-body text-athenea-neutral-600 flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <HelpCircle size={12} />
          Todos los planes incluyen SSL, GDPR compliance, backups diarios y sin límite de campañas monitorizadas.
        </motion.p>
      </div>
    </section>
  );
}
