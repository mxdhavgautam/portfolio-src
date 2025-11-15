import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E53935',
        secondary: 'rgba(131, 121, 121, 1)',
        'text-primary': '#E53935',
        'text-white': 'rgba(255, 255, 255, 1)',
        'text-grey-dark': 'rgba(147, 147, 147, 1)',
        'text-grey-light': 'rgba(205, 205, 205, 1)',
        'button-primary': '#E53935',
        'button-secondary': 'rgba(50, 50, 50, 1)',
        'icon-primary': '#E53935',
        'icon-secondary': 'rgba(255, 255, 255, 1)',
        'background-black': 'rgba(18, 18, 18, 1)',
        'background-grey': 'rgba(25, 25, 25, 1)',
        'card-grey': 'rgba(15, 15, 15, 1)',
        tooltip: 'rgba(33, 33, 33, 1)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        'card': '40px',
        'card-button': '30px',
      },
    },
  },
  plugins: [],
}
export default config

