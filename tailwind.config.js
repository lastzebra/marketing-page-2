/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'h1': 'var(--h1)',
        'h2': 'var(--h2)',
        'h3': 'var(--h3)',
        'body': 'var(--body)',
        'body-lg': 'var(--body-lg)',
        'small': 'var(--small)',
      },
      lineHeight: {
        'tight': 'var(--lh-tight)',
        'body': 'var(--lh-body)',
      },
      letterSpacing: {
        'tight': 'var(--tracking-tight)',
        'normal': 'var(--tracking-normal)',
      },
      colors: {
        'bg-0': 'var(--bg-0)',
        'bg-1': 'var(--bg-1)',
        'surface-0': 'var(--surface-0)',
        'surface-1': 'var(--surface-1)',
        'border': 'var(--border)',
        'text-0': 'var(--text-0)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        /* Primary Accent Colors - Cyan → Violet */
        'violet': 'var(--violet)',
        'teal': 'var(--teal)',
        'cyan': 'var(--cyan)',
        'amber': 'var(--amber)',
        /* Legacy support (mapped to new colors) */
        'accent-blue': 'var(--cyan)',
        'accent-purple': 'var(--violet)',
        'dark-green': 'var(--violet)',
        'neon-violet': 'var(--violet)',
        'neon-cyan': 'var(--cyan)',
        'warm-amber': 'var(--amber)',
      },
      borderRadius: {
        'xl': 'var(--r-xl)',
        'lg': 'var(--r-lg)',
        'md': 'var(--r-md)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'glow-accent': 'var(--glow-accent)',
        'glow-teal': 'var(--glow-teal)',
        /* Legacy support */
        'glow-dark-green': 'var(--glow-accent)',
        'glow-violet': 'var(--glow-accent)',
      },
      maxWidth: {
        'container': 'var(--container)',
      },
      backgroundImage: {
        'grad-hero': 'var(--grad-hero)',
        'grad-glow': 'var(--grad-glow)',
        'grad-accent': 'var(--grad-accent)',
        'grad-accent-soft': 'var(--grad-accent-soft)',
      },
    },
  },
  plugins: [],
}
