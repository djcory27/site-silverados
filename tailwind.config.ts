import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern brand palette with better contrast and accessibility
        brand: {
          primary: "#2563eb",      // Modern blue
          secondary: "#16a34a",    // Modern green
          accent: "#ea580c",       // Modern orange
          sky: "#0ea5e9",          // Bright sky blue
          sage: "#84cc16",         // Modern sage
          coral: "#f87171",        // Modern coral
          dark: "#1e293b",         // Modern dark slate
          light: "#f8fafc",        // Clean light background
          cream: "#fef7ed",        // Warm cream
          charcoal: "#475569",     // Modern charcoal
        },
        // Modern glassmorphism colors
        glass: {
          50: "rgba(255, 255, 255, 0.05)",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.06)",
        glass: "0 8px 32px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(37, 99, 235, 0.3)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 120% at 50% 10%, #1e293b 0%, #2563eb 60%, #0f172a 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          },
        },
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(37, 99, 235, 0.3)" },
          "50%": { "box-shadow": "0 0 30px rgba(37, 99, 235, 0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}

export default config
