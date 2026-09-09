import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://quotes.lodoftech.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 }, ...['Love','Romantic','Psychological','Sonnets','Religious','Cultural','Lyrical','Sad','Emotional','Comforting','Motivational'].map((category) => ({ url: `https://quotes.lodoftech.com/category/${category.toLowerCase()}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: .7 }))] }

