/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          400: '#6366F1',
          900: '#1E293B',
        },
        pink: {
          500: '#F43F5E',
          600: '#E11D48',
        },
        gray: {
          100: "#F3F4F6",
          300: "#D1D5DB",
          400: "#9CA3AF",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        teal: {
          500: "#14B8A6",
        },
        yellow: {
          500: "#FBBF24",
        },
        primaryDark: "var(--bg-primary-dark)",
        primary: "var(--bg-primary)",
        secondary: {
          100: "var(--bg-secondary-light)",
          200: "var(--bg-secondary)",
          300: "var(--bg-secondary-dark)",
        },
        "accent-primary": "var(--accent-primary)",
        "accent-primary-focus": "var(--accent-primary-focus)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-secondary-focus": "var(--accent-secondary-focus)",
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        border: 'var(--border)',

        
      },
    },
  },
  plugins: [],
}