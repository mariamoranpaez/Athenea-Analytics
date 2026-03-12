// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sara Méndez",
    role: "Head of Performance",
    company: "Kiwop Agency",
    location: "Barcelona",
    avatar: "SM",
    color: "#7c3aed",
    stars: 5,
    text: "Antes dedicábamos 3 días a preparar los informes mensuales de cliente. Con Athenea los tenemos automatizados y en tiempo real. Ha transformado completamente la forma en que trabajamos y vendemos nuestros servicios.",
    metric: "−72% tiempo de reporting",
  },
  {
    name: "Marcos Villanueva",
    role: "CEO & Founder",
    company: "Bicicleta Digital",
    location: "Madrid",
    avatar: "MV",
    color: "#06b6d4",
    stars: 5,
    text: "El motor predictivo nos avisó de una caída inminente en campañas de Meta 48 horas antes de que ocurriera. Pudimos ajustar presupuestos y creatividades a tiempo. Literalmente salvó un cliente de 8.000€/mes.",
    metric: "+2 clientes retenidos",
  },
  {
    name: "Lucía Fernández",
    role: "PPC Lead",
    company: "Rocket Agency",
    location: "Valencia",
    avatar: "LF",
    color: "#10b981",
    stars: 5,
    text: "La atribución multi-touch de Athenea nos reveló que el 40% del presupuesto en branded search era desperdicio puro. Redirigimos ese dinero a upper funnel y el ROAS global subió un 38% en 6 semanas.",
    metric: "+38% ROAS en 6 semanas",
  },
  {
    name: "Adrián Torres",
    role: "Director de Marketing",
    company: "Grupo Nexo Media",
    location: "Bilbao",
    avatar: "AT",
    color: "#f59e0b",
    stars: 5,
    text: "Gestionamos 40+ clientes con presupuestos muy distintos. Athenea nos permite escalar sin escalar equipo. Los flujos de automatización hacen el trabajo de 2 analistas senior, de forma más consistente y sin errores humanos.",
    metric: "×2 capacidad sin contratar",
  },
  {
    name: "Nora Castillo",
    role: "Data & Analytics Manager",
    company: "Adsmurai",
    location: "Barcelona",
    avatar: "NC",
    color: "#f43f5e",
    stars: 5,
    text: "Vinimos de soluciones como Supermetrics y la diferencia es abismal. Athenea no es solo un conector de datos, es una capa de inteligencia completa. La detección de anomalías sola ya justifica el coste 10 veces.",
    metric: "Migración desde Supermetrics",
  },
  {
    name: "Pablo Reyes",
    role: "Performance Manager",
    company: "Flat 101",
    location: "Madrid",
    avatar: "PR",
    color: "#8b5cf6",
    stars: 5,
    text: "El onboarding fue impecable y el soporte prioritario realmente responde en minutos. Pero lo que más valoro es que el equipo de Athenea escucha el feedback y lo implementa. Es el SaaS más agnóstico y orientado al partner que he probado.",
    metric: "NPS interno: 94/100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-athenea-bg overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 30% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-athenea-secondary-950/80 border border-athenea-secondary-800/50 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(8,51,68,0.8)", borderColor: "rgba(14,116,144,0.5)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-athenea-secondary-400 animate-pulse-slow" />
            <span className="text-xs font-mono text-athenea-secondary-300 uppercase tracking-widest">Casos de éxito reales</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Lo dicen las agencias{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              que ya lo usan
            </span>
          </h2>
          <p className="text-base font-body text-athenea-neutral-400">
            Más de 340 agencias digitales en España y LATAM han transformado su operativa con Athenea.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(13,17,23,0.98) 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {/* Glow top-left on hover */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: t.color, opacity: 0 }}
              />

              {/* Quote icon */}
              <Quote size={20} className="text-athenea-neutral-700 flex-shrink-0" />

              {/* Text */}
              <p className="text-sm font-body text-athenea-neutral-300 leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Metric pill */}
              <div className="inline-flex items-center self-start gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono"
                style={{
                  backgroundColor: `${t.color}18`,
                  borderColor: `${t.color}35`,
                  color: t.color,
                }}>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: t.color }} />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}>
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-body font-semibold text-white truncate">{t.name}</p>
                  <p className="text-xs font-body text-athenea-neutral-500 truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-athenea-amber-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {["Google Partner Premier", "Meta Business Partner", "TikTok Marketing Partner", "HubSpot Certified", "IAB España"].map((badge) => (
            <span key={badge} className="text-xs font-mono text-athenea-neutral-500 tracking-wider uppercase">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
