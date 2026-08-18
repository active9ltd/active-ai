import {NextResponse} from 'next/server';
export async function GET(){const services={openai:Boolean(process.env.OPENAI_API_KEY),replicate:Boolean(process.env.REPLICATE_API_TOKEN),supabase:Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),stripe:Boolean(process.env.STRIPE_SECRET_KEY)};return NextResponse.json({status:'ok',service:'active-ai',services,timestamp:new Date().toISOString()})}
