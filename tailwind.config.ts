import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Restrained radii: nothing rounder than 4px except full pills avoided entirely.
    borderRadius: { none: "0", sm: "2px", DEFAULT: "2px", md: "3px", lg: "4px", full: "9999px" },
    extend: {
      colors: {
        navy: "#002F8E",        // primary brand navy
        blue: "#175A9F",        // links, borders, icons
        royal: "#0236AD",       // CTA
        indigo: { DEFAULT: "#000B98", soft: "#1E59AE" },
        cyan: "#04A6ED",        // accent only
        charcoal: "#27252A",    // dark sections, footer
        cream: { DEFAULT: "#F0EDE7", light: "#FCF6F6" },
        grey: { body: "#949197", muted: "#82828A", line: "#C8C7C7" },
        tint: { DEFAULT: "#AAB6D1", light: "#A9BEEE" },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-marcellus)", "Georgia", "serif"],
      },
      letterSpacing: { eyebrow: "0.18em" },
      maxWidth: { page: "1360px" },
    },
  },
  plugins: [],
} satisfies Config;
