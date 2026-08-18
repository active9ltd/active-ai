import Link from 'next/link';

const links = [
  ['Dashboard','/dashboard'],['Products','/dashboard/products'],['Creative Studio','/dashboard/studio'],['Campaigns','/dashboard/campaigns'],['Analytics','/dashboard/analytics']
];
export default function DashboardLayout({children}:{children:React.ReactNode}){return <div className="app-shell"><aside className="sidebar"><Link href="/" className="logo">ACTIVE<span> AI</span></Link><nav className="side-nav">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><div className="side-bottom"><Link href="/dashboard/brand">Brand Kit</Link><Link href="/dashboard/media">Media Library</Link><Link href="/dashboard/settings">Settings</Link></div></aside><section className="app-main"><header className="app-top"><span>Workspace / Active Ai</span><div className="avatar">A</div></header>{children}</section></div>}
