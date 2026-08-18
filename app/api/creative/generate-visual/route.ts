import {NextResponse} from 'next/server';
import {createReplicatePrediction} from '@/lib/replicate';
export async function POST(req:Request){try{const {prompt,aspectRatio='1:1',type='image'}=await req.json();if(!prompt)return NextResponse.json({error:'Prompt is required'},{status:400});const prediction=await createReplicatePrediction({prompt,aspect_ratio:aspectRatio,type});return NextResponse.json({prediction})}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Visual generation failed'},{status:500})}}
