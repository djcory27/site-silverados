module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Pet Industry Color Palette
        brand: {
          primary: "#2563eb",      // Trustworthy blue
          secondary: "#16a34a",    // Natural green
          accent: "#ea580c",       // Warm terracotta
          light: "#f8fafc",        // Clean white
          neutral: "#64748b",      // Modern gray
          dark: "#1e293b",         // Deep charcoal
          cream: "#fef7ed",        // Warm cream
          sage: "#84cc16",         // Fresh sage green
          sky: "#0ea5e9",          // Bright sky blue
          coral: "#f87171",        // Friendly coral
        },
      },
      fontFamily: {
        sans: ["Poppins", "Futura", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Futura Bold", "Futura", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 120% at 50% 10%, #303F51 0%, #3F5E4A 60%, #1C1A21 100%)",
      },
    },
  },
  plugins: [],
}
