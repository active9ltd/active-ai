import Link from 'next/link';
export default function NotFound(){return <main className="container" style={{minHeight:'100vh',display:'grid',placeItems:'center',textAlign:'center'}}><div><p className="eyebrow">404</p><h1>Page not found.</h1><p style={{color:'#a5a8b2'}}>The page you're looking for doesn't exist.</p><Link className="btn btn-primary" href="/">Back to Active Ai →</Link></div></main>}
