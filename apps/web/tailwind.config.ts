import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config/base";

export default {
  // Extend the base content array with the UI package path
  content: [
    // App paths
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // Include UI package components
    "../../packages/ui/src/components/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    // extend: {
    //   fontFamily: {
    //     sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    //     mono: ["var(--font-geist-mono)", ...fontFamily.mono],
    //   },
    // },
  },
} satisfies Config;
