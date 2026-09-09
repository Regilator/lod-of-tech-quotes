export const env = { databaseUrl: process.env.POSTGRES_URL ?? process.env.DATABASE_URL, openaiKey: process.env.OPENAI_API_KEY, pexelsKey: process.env.PEXELS_API_KEY, nextAuthSecret: process.env.NEXTAUTH_SECRET, adminEmail: 'regilatortechindustries@gmail.com' }
export function hasLiveProviders() { return Boolean(env.databaseUrl && env.openaiKey) }

