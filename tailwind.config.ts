import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#0d0d0d', gold: '#c9a45c', champagne: '#eadbb9', paper: '#f4f0e8', mutedgold: '#8d784c' }, fontFamily: { serif: ['Georgia', 'serif'], sans: ['Arial', 'sans-serif'] }, boxShadow: { gold: '0 10px 40px rgba(201,164,92,.14)' } } }, plugins: [] }
export default config

