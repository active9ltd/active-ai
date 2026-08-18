import { NextResponse } from 'next/server';

function validUrl(value: string) { try { const u = new URL(value); return u.protocol === 'http:' || u.protocol === 'https:'; } catch { return false; } }

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url || !validUrl(url)) return NextResponse.json({ error: 'Please provide a valid product URL.' }, { status: 400 });
    const response = await fetch(url, { headers: { 'User-Agent': 'ActiveAiBot/1.0 (+https://active-ai.app)' }, signal: AbortSignal.timeout(10000) });
    if (!response.ok) return NextResponse.json({ error: `The website returned ${response.status}.` }, { status: 422 });
    const html = await response.text();
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || new URL(url).hostname;
    const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim() || '';
    const ogTitle = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim();
    const ogDescription = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim();
    return NextResponse.json({ product: { url, name: ogTitle || title, description: ogDescription || description, hostname: new URL(url).hostname, analysedAt: new Date().toISOString(), nextStep: 'AI enrichment is ready to connect once an AI provider key is configured.' } });
  } catch { return NextResponse.json({ error: 'Unable to analyse this website right now.' }, { status: 500 }); }
}
