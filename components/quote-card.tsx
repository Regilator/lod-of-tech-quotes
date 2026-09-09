'use client'
import { useState } from 'react'
import { Copy, Download, Heart, Share2, Star, Sparkles } from 'lucide-react'

export type Quote = { text: string; author: string; category: string; image: string; rating: number }
export function QuoteCard({ quote, featured = false }: { quote: Quote; featured?: boolean }) {
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard?.writeText(`“${quote.text}” — ${quote.author}`); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  return <article className={`group relative overflow-hidden rounded-sm border border-ink/10 bg-ink text-paper shadow-gold ${featured ? 'min-h-[390px] md:min-h-[500px]' : 'min-h-[340px]'}`}>
    <img src={quote.image} alt="Atmospheric mood for this quote" className="absolute inset-0 size-full object-cover opacity-45 transition duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
    <div className="relative flex min-h-[inherit] flex-col justify-between p-6 md:p-8">
      <div className="flex items-center justify-between text-xs uppercase tracking-[.22em] text-champagne"><span>{quote.category}</span><span className="flex items-center gap-1"><Star className="size-3 fill-gold text-gold" /> {quote.rating.toFixed(1)}</span></div>
      <div><blockquote className={`font-serif leading-[1.15] text-champagne ${featured ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>“{quote.text}”</blockquote><p className="mt-5 text-sm tracking-[.18em] text-gold">— {quote.author}</p><div className="mt-7 flex flex-wrap items-center gap-2 border-t border-paper/15 pt-4 text-xs text-paper/70"><button onClick={copy} className="inline-flex items-center gap-1.5 transition hover:text-gold"><Copy className="size-4" /> {copied ? 'Copied' : 'Copy'}</button><button className="inline-flex items-center gap-1.5 transition hover:text-gold"><Download className="size-4" /> PNG</button><button onClick={() => setSaved(!saved)} className={`inline-flex items-center gap-1.5 transition ${saved ? 'text-gold' : 'hover:text-gold'}`}><Heart className={`size-4 ${saved ? 'fill-gold' : ''}`} /> {saved ? 'Saved' : 'Save'}</button><button className="inline-flex items-center gap-1.5 transition hover:text-gold"><Share2 className="size-4" /> Share</button></div></div>
      <div className="absolute bottom-5 right-6 flex items-center gap-1 text-[9px] uppercase tracking-[.25em] text-paper/35">Lod of Tech / Regilator Tech Industries</div>
    </div>
  </article>
}

