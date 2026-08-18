import { NextResponse } from 'next/server';
import { analyzeProduct } from '@/lib/product-analyzer';
export async function POST(request:Request){try{const body=await request.json();const url=String(body?.url||'').trim();if(!url)return NextResponse.json({error:'Product URL is required'},{status:400});const result=await analyzeProduct(url);return NextResponse.json({product:result});}catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Unable to analyse product'},{status:400});}}
