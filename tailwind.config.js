/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500',
          light: '#FFB733',
          dark: '#CC8400',
          glow: '#FFA50066',
        },
        black: {
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-orange': '0 0 5px #FFA500, 0 0 10px #FFA500, 0 0 15px #FFA500',
        'neon-orange-lg': '0 0 10px #FFA500, 0 0 20px #FFA500, 0 0 30px #FFA500',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FFA500, 0 0 10px #FFA500' },
          '100%': { boxShadow: '0 0 10px #FFA500, 0 0 20px #FFA500, 0 0 30px #FFA500' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}