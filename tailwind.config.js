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
          800: '#2D3748',
          900: '#1A202C',
        },
        teal: {
          500: "#14B8A6",
        },
        yellow: {
          500: "#FBBF24",
        }
      },
    },
  },
  plugins: [],
}