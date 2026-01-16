/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-violet': '#a855f7',
        'neon-cyan': '#06b6d4',
        'warm-amber': '#f59e0b',
      },
    },
  },
  plugins: [],
}
