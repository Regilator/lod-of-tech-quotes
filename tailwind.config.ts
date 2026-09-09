import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#09090b', gold: '#d7ad55', champagne: '#f5dfaa', paper: '#f7f3ea', mutedgold: '#80672f', crimson: '#9f2342' }, fontFamily: { serif: ['Georgia', 'serif'], sans: ['Arial', 'sans-serif'] }, boxShadow: { gold: '0 10px 40px rgba(201,164,92,.14)' } } }, plugins: [] }
export default config

