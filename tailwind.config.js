/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        panel: 'rgb(var(--panel-rgb) / <alpha-value>)',
        panelalt: 'rgb(var(--panelalt-rgb) / <alpha-value>)',
        gold: 'rgb(var(--gold-rgb) / <alpha-value>)',
        goldlight: 'rgb(var(--goldlight-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        inkmute: 'rgb(var(--inkmute-rgb) / <alpha-value>)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        wrap: '1152px',
        'wrap-sm': '760px',
      },
    },
  },
  plugins: [],
};
