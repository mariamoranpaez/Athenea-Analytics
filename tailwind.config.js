/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Palette
        "athenea-bg":        "#030712", // Obsidian Black — primary background
        "athenea-surface":   "#0d1117", // Elevated surface
        "athenea-card":      "#111827", // Card / glass layer
        "athenea-border":    "#1f2937", // Subtle border

        // Primary Accent — Electric Violet
        "athenea-primary": {
          DEFAULT: "#7c3aed",
          50:  "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },

        // Secondary Accent — Electric Cyan
        "athenea-secondary": {
          DEFAULT: "#06b6d4",
          50:  "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },

        // Tertiary Accent — Neon Green (for live indicators)
        "athenea-live": {
          DEFAULT: "#10b981",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },

        // Amber — Warning / highlight
        "athenea-amber": {
          DEFAULT: "#f59e0b",
          400: "#fbbf24",
          500: "#f59e0b",
        },

        // Rose — Critical / negative delta
        "athenea-rose": {
          DEFAULT: "#f43f5e",
          400: "#fb7185",
          500: "#f43f5e",
        },

        // Neutral scale (darker biased)
        "athenea-neutral": {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },

      fontFamily: {
        display: ["'Syne'", "sans-serif"],       // Titles / Hero
        body:    ["'DM Sans'", "sans-serif"],     // Body copy
        mono:    ["'JetBrains Mono'", "monospace"], // Code / metrics
      },

      backgroundImage: {
        // Hero gradient mesh
        "hero-mesh": `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 60%, rgba(6,182,212,0.12) 0%, transparent 55%),
          radial-gradient(ellipse 40% 30% at 20% 80%, rgba(124,58,237,0.08) 0%, transparent 50%)
        `,
        // Card glass
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        // Primary gradient (buttons, badges)
        "athenea-gradient": "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
        "athenea-gradient-soft": "linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(6,182,212,0.8) 100%)",
        // Noise texture overlay (apply on pseudo-elements via CSS)
        "grid-pattern": `
          linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        "grid": "40px 40px",
      },

      boxShadow: {
        // Glow effects
        "glow-primary":   "0 0 40px rgba(124,58,237,0.35), 0 0 80px rgba(124,58,237,0.15)",
        "glow-secondary": "0 0 40px rgba(6,182,212,0.30), 0 0 80px rgba(6,182,212,0.12)",
        "glow-sm-primary":"0 0 16px rgba(124,58,237,0.40)",
        "glow-sm-cyan":   "0 0 16px rgba(6,182,212,0.40)",
        "glow-live":      "0 0 10px rgba(16,185,129,0.60)",
        // Elevated glass card
        "glass-card":     "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-card-hover":"0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        // Inner glow for mockup browser
        "inner-glow":     "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      animation: {
        "pulse-slow":    "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-live":    "pulseLive 2s ease-in-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "shimmer":       "shimmer 2.5s linear infinite",
        "bar-grow":      "barGrow 1.2s ease-out forwards",
        "gradient-shift":"gradientShift 8s ease infinite",
        "scan-line":     "scanLine 4s linear infinite",
        "fade-up":       "fadeUp 0.6s ease-out forwards",
      },

      keyframes: {
        pulseLive: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        barGrow: {
          "0%":   { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        scanLine: {
          "0%":   { top: "0%", opacity: "0.6" },
          "100%": { top: "100%", opacity: "0" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      backdropBlur: {
        xs: "2px",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },

      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
}
