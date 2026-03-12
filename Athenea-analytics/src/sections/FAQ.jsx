// src/sections/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda la integración con mis plataformas de anuncios?",
    a: "La mayoría de agencias completan la integración en menos de 10 minutos. Athenea se conecta via OAuth a Google Ads, Meta Ads, TikTok y LinkedIn sin necesidad de instalar ningún pixel ni modificar el tracking existente. Solo autoriza el acceso y los datos empiezan a fluir inmediatamente.",
  },
  {
    q: "¿Cómo funciona el Motor de Predicción de IA? ¿En qué datos se basa?",
    a: "Nuestros modelos analizan más de 200 señales: historial de rendimiento, estacionalidad, señales de fatiga creativa, variaciones de subasta, tendencias de búsqueda y comportamiento de audiencias. El modelo se re-entrena semanalmente con los datos de tu cuenta para mejorar con el tiempo. No compartimos datos entre clientes.",
  },
  {
    q: "¿Puedo ofrecer los reportes a mis clientes bajo mi propia marca?",
    a: "Sí, todos los planes (incluso Starter) incluyen reportes de marca blanca. Puedes personalizar el logo, colores, nombre del producto y dominio de acceso. En el plan Enterprise tienes white-label completo incluyendo subdominio propio (reports.tuagencia.com).",
  },
  {
    q: "¿Qué pasa con mis datos si cancelo la suscripción?",
    a: "Siempre son tuyos. Al cancelar tienes 30 días para exportar todos tus datos en formato CSV, JSON o via API. Nunca vendemos ni compartimos datos de clientes. Todos los datos están almacenados en servidores europeos (Frankfurt, AWS EU) y cumplen con GDPR.",
  },
  {
    q: "¿Los flujos de automatización pueden pausar o modificar campañas automáticamente?",
    a: "Sí, con los permisos adecuados que tú controlas. Puedes crear flujos que pausan ad sets, ajustan pujas, envían alertas a Slack o email, generan tickets en Notion o crean variantes de anuncio. Cada automatización tiene un log auditable y puedes configurar aprobación manual antes de ejecutar cambios críticos.",
  },
  {
    q: "¿Hay descuento para agencias que gestionan múltiples clientes?",
    a: "Sí. Si tu agencia gestiona más de 15 clientes activos o superas los 500.000€/mes en ad spend gestionado, contáctanos en partners@athenea.ai para acceder a nuestro programa de Agency Partners con descuentos del 30–50% y recursos de co-marketing.",
  },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "border-athenea-primary-700/50" : "border-white/[0.07] hover:border-white/[0.12]"
      }`}
      style={{
        background: open
          ? "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(13,17,23,0.98) 100%)"
          : "rgba(255,255,255,0.02)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-sm sm:text-base font-body font-medium transition-colors ${open ? "text-white" : "text-athenea-neutral-300"}`}>
          {item.q}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
          open ? "bg-athenea-primary-600/40 text-athenea-primary-300" : "bg-white/[0.05] text-athenea-neutral-500"
        }`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-5 text-sm font-body text-athenea-neutral-400 leading-relaxed border-t border-white/[0.05] pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 bg-athenea-bg overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Preguntas{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              frecuentes
            </span>
          </h2>
          <p className="text-base font-body text-athenea-neutral-400">
            ¿No encuentras lo que buscas? Escríbenos a{" "}
            <a href="mailto:hola@athenea.ai" className="text-athenea-primary-400 hover:text-athenea-primary-300 transition-colors">
              hola@athenea.ai
            </a>
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
