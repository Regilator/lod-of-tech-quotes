import { NextResponse } from 'next/server'
import { env } from '../../../lib/env'
const fallback = { text: 'You are not behind. You are becoming, at the pace of your own becoming.', author: 'Lod of Tech', attribution: 'Property of Lod of Tech / Regilator Tech Industries' }
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({})) as { category?: string }
  if (!env.openaiKey) return NextResponse.json({ ...fallback, category: body.category ?? 'Comforting', source: 'development-fallback' })
  const response = await fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.openaiKey}` }, body: JSON.stringify({ model: 'gpt-4o', temperature: .9, messages: [{ role: 'system', content: 'Write one original, concise quote. Return only the quote text.' }, { role: 'user', content: `Create a ${body.category ?? 'motivational'} quote branded to Lod of Tech.` }] }) })
  if (!response.ok) return NextResponse.json({ ...fallback, category: body.category ?? 'Comforting' })
  const data = await response.json()
  return NextResponse.json({ text: data.choices?.[0]?.message?.content ?? fallback.text, author: 'Lod of Tech', category: body.category ?? 'Comforting', attribution: fallback.attribution })
}

