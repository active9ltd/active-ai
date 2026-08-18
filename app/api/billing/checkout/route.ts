import {NextResponse} from 'next/server';
export async function POST(){if(!process.env.STRIPE_SECRET_KEY)return NextResponse.json({error:'Stripe is not configured. Add STRIPE_SECRET_KEY in Vercel.'},{status:503});return NextResponse.json({error:'Stripe checkout provider is configured but checkout prices are not yet selected.'},{status:501})}
