import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens
        sapphire: "#1F4B99",
        azure: "#2E8BFF",
        emerald: "#10B981",
        slate50: "#F8FAFC",
        slate700: "#334155",
        slate900: "#0F172A"
      },
      boxShadow: {
        card: "0 8px 24px rgba(2,6,23,.06)",
        cardHover: "0 12px 32px rgba(2,6,23,.08)"
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px"
      },
      fontFamily: {
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
