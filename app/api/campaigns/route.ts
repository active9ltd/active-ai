import {NextResponse} from 'next/server';
const campaigns:Array<Record<string,unknown>>=[];
export async function GET(){return NextResponse.json({campaigns})}
export async function POST(req:Request){try{const body=await req.json();if(!body.name)return NextResponse.json({error:'Campaign name is required'},{status:400});const campaign={id:crypto.randomUUID(),name:String(body.name),objective:body.objective||'Conversions',budget:Number(body.budget||0),platforms:body.platforms||[],status:'draft',createdAt:new Date().toISOString()};campaigns.unshift(campaign);return NextResponse.json({campaign},{status:201})}catch{return NextResponse.json({error:'Invalid campaign request'},{status:400})}}
