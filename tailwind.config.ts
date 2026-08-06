import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#07111f", 900: "#0b1728", 800: "#11233a", 700: "#18304e" },
        emerald: { 400: "#34d399", 500: "#10b981", 600: "#059669" }
      },
      boxShadow: { soft: "0 20px 60px rgba(2, 12, 27, 0.10)" }
    }
  },
  plugins: []
} satisfies Config;
