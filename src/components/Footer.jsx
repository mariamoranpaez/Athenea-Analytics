// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Sparkles, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";

const footerLinks = {
  Producto: ["Dashboard", "Predicción IA", "Automatizaciones", "Atribución", "Reportes", "Integraciones"],
  Empresa: ["Sobre nosotros", "Blog", "Casos de éxito", "Partners", "Prensa", "Carreras"],
  Soporte: ["Documentación", "API Reference", "Changelog", "Status", "Comunidad", "Contacto"],
  Legal: ["Privacidad", "Términos de uso", "Cookies", "GDPR", "SLA"],
};

export default function Footer() {
  return (
    <footer className="relative bg-athenea-bg border-t border-white/[0.06] pt-20 pb-10 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(6,182,212,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
                <Sparkles size={15} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">Athenea Analytics</span>
            </div>
            <p className="text-sm font-body text-athenea-neutral-500 leading-relaxed max-w-xs">
              La plataforma de analítica proactiva e IA para agencias digitales que quieren liderar el mercado, no seguirlo.
            </p>
            {/* Newsletter */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-mono text-athenea-neutral-500 uppercase tracking-widest">Newsletter de Performance</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="hola@tuagencia.com"
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-sm font-body text-white placeholder:text-athenea-neutral-600 focus:outline-none focus:border-athenea-primary-600/50 transition-colors"
                />
                <button className="p-2 rounded-lg text-white transition-all hover:shadow-glow-sm-primary"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Github, href: "#", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.07] text-athenea-neutral-500 hover:text-white hover:border-white/[0.14] hover:bg-white/[0.05] transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="text-xs font-mono text-athenea-neutral-500 uppercase tracking-widest">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-body text-athenea-neutral-500 hover:text-athenea-neutral-200 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-athenea-neutral-600">
            © 2025 Athenea Analytics S.L. · Todos los derechos reservados · Madrid, España
          </p>
          <div className="flex items-center gap-1.5 text-xs font-body text-athenea-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-athenea-live-500 animate-pulse-slow" />
            Todos los sistemas operativos · 99.98% uptime
          </div>
        </div>
      </div>
    </footer>
  );
}
