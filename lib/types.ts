export type Product = { id: string; url: string; domain: string; name: string; description: string; audience: string[]; benefits: string[]; createdAt: string };
export type Creative = { id: string; productId: string; type: 'video'|'image'|'ugc'|'copy'; title: string; status: 'draft'|'generated'; createdAt: string };
