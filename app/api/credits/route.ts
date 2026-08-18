import {NextResponse} from 'next/server';
const balances=new Map<string,number>();
export async function GET(req:Request){const id=new URL(req.url).searchParams.get('workspaceId')||'demo';return NextResponse.json({workspaceId:id,balance:balances.get(id)??100})}
export async function POST(req:Request){try{const {workspaceId='demo',amount}=await req.json();const current=balances.get(workspaceId)??100;const next=current+Number(amount);if(!Number.isFinite(next)||next<0)return NextResponse.json({error:'Invalid credit balance'},{status:400});balances.set(workspaceId,next);return NextResponse.json({workspaceId,balance:next})}catch{return NextResponse.json({error:'Invalid request'},{status:400})}}
