'use client';
import {useEffect} from 'react';
export default function Error({reset}:{error:Error&{digest?:string};reset:()=>void}){useEffect(()=>{},[]);return <main className="container" style={{minHeight:'100vh',display:'grid',placeItems:'center',textAlign:'center'}}><div><p className="eyebrow">SOMETHING WENT WRONG</p><h1>Let's try that again.</h1><p style={{color:'#a5a8b2'}}>Active Ai hit an unexpected error.</p><button className="btn btn-primary" onClick={()=>reset()}>Try again →</button></div></main>}
