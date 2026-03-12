// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Producto", href: "#features", hasDropdown: true },
  { label: "Precios", href: "#pricing" },
  { label: "Clientes", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(3,7,18,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
              <Sparkles size={15} className="text-white" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #6d28d9 0%, #0891b2 100%)" }} />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Athenea
              <span className="ml-1 text-xs font-mono font-normal px-1.5 py-0.5 rounded-md bg-athenea-primary-950 text-athenea-primary-300 border border-athenea-primary-800/50 align-middle">
                Analytics
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-body text-athenea-neutral-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} className="opacity-60" />}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }} className="text-sm font-body text-athenea-neutral-400 hover:text-white transition-colors px-3 py-2">
              Iniciar sesión
            </a>
            <a
              href="#"
              className="group flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-body font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-sm-primary"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}
            >
              Empezar gratis
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-athenea-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ background: "rgba(3,7,18,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3.5 rounded-xl text-base font-body text-athenea-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <a href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onLoginClick(); }} className="px-4 py-3 rounded-xl text-center text-sm font-body text-athenea-neutral-300 border border-white/[0.08] hover:bg-white/[0.04] transition-colors">
                  Iniciar sesión
                </a>
                <a href="#" className="px-4 py-3 rounded-xl text-center text-sm font-body font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
                  Empezar gratis — 14 días
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
