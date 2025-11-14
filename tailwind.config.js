/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc4ff',
          400: '#47a3ff',
          500: '#1e88e5', // Azul principal baseado na logo
          600: '#0d74d1',
          700: '#0b5aa8',
          800: '#0e4783',
          900: '#123a6d',
        },
        accent: {
          50: '#fff5f5',
          100: '#fed7d7',
          200: '#feb2b2',
          300: '#fc8181',
          400: '#f56565',
          500: '#e53e3e', // Vermelho coral (mantido para contraste)
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#63171b',
        },
        luxury: {
          gold: '#d4af37',
          light: '#f4f4f4',
          dark: '#2c2c2c'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'], // Fonte mais moderna
        serif: ['Playfair Display', 'serif'], // Fonte para títulos luxuosos
      },
    },
  },
  plugins: [],
}