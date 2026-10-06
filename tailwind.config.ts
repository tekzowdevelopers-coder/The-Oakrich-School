import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#0F172A", // Deep refined slate/charcoal
        secondary: "#64748B", // Clean modern slate for secondary copy
        surface: "#F8FAFC", // Clean light slate surface
        "surface-subtle": "#F1F5F9",
        border: "#E2E8F0",
        "border-dark": "#CBD5E1",
        // Authentic Oakrich Logo Colors:
        oakrich: {
          plum: "#701A75",      // Main magenta/purple from logo tree
          plumDark: "#58145C",
          plumLight: "#FDF4FF",
          yellow: "#F59E0B",    // Warm sunny yellow dot
          yellowLight: "#FEF3C7",
          green: "#10B981",     // Fresh emerald green dot
          greenLight: "#D1FAE5",
          blue: "#2563EB",      // Vivid blue dot
          blueLight: "#DBEAFE",
          red: "#EF4444",       // Coral red dot
          redLight: "#FEE2E2",
          purple: "#9333EA",    // Bright violet dot
        },
        accent: {
          DEFAULT: "#701A75",
          hover: "#58145C",
          light: "#FAF5FF",
          border: "#E9D5FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      letterSpacing: {
        editorial: "0.15em",
        tightest: "-0.03em",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
        hover: "0 12px 30px -4px rgba(112, 26, 117, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
