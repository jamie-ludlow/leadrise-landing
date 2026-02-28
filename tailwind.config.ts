import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#1DB9A3',
          hover: '#17a08d',
          glow: 'rgba(29, 185, 163, 0.25)',
        },
        'navy': {
          DEFAULT: '#0A0E27',
          charcoal: '#141824',
          elevated: '#1C2136',
        },
        'text': {
          primary: '#FFFFFF',
          secondary: '#A0A6B8',
          muted: '#6B7280',
        },
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
        '5xl': '192px',
      },
    },
  },
} satisfies Config;
