export type ProductAnalysis = { url:string; domain:string; title:string; description:string; image?:string; keywords:string[] };
function clean(value:string){return value.replace(/\s+/g,' ').trim()}
export async function analyzeProduct(url:string):Promise<ProductAnalysis>{
  const parsed=new URL(url); if(!/^https?:$/.test(parsed.protocol)) throw new Error('Only HTTP and HTTPS URLs are supported');
  const response=await fetch(parsed.toString(),{headers:{'user-agent':'ActiveAiBot/1.0'},cache:'no-store'});
  if(!response.ok) throw new Error(`Website returned ${response.status}`);
  const html=await response.text();
  const title=clean((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||parsed.hostname).replace(/<[^>]+>/g,''));
  const description=clean((html.match(/<meta[^>]+(?:name|property)=["'](?:description|og:description)["'][^>]+content=["']([^"']*)["']/i)?.[1]||''));
  const image=html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']*)["']/i)?.[1];
  const text=clean(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' '));
  const keywords=Array.from(new Set((`${title} ${description} ${text.slice(0,3000)}`.toLowerCase().match(/[a-z][a-z0-9-]{3,}/g)||[]))).slice(0,20);
  return {url,domain:parsed.hostname,title,description,image,keywords};
}
