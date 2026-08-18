const features = [
  ['✦','AI Video','Create short-form product videos and advertisements in minutes.'],
  ['◈','AI Image','Generate social, display and promotional creatives at scale.'],
  ['◎','AI UGC','Create creator-style concepts, scripts and UGC campaigns.'],
  ['Aa','AI Copy','Generate hooks, headlines, descriptions and CTAs that fit your brand.'],
  ['↗','Campaigns','Turn your best creatives into complete marketing campaigns.'],
  ['◒','Analytics','Understand what works and let AI recommend what to do next.'],
];

export default function Home() {
  return <main>
    <header className="container nav">
      <a className="logo" href="#">ACTIVE<span> AI</span></a>
      <nav className="navlinks"><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#how">How it works</a><a href="#pricing">Pricing</a></nav>
      <div className="actions"><a href="#login" className="btn">Log in</a><a href="#start" className="btn btn-primary">Get started →</a></div>
    </header>

    <section className="container hero" id="product">
      <span className="eyebrow">AI MARKETING, REIMAGINED</span>
      <h1>Your AI marketing team, in one place.</h1>
      <p>Turn your product into high-converting ads, videos, content and complete campaigns — without the busywork.</p>
      <div className="hero-actions"><a className="btn btn-primary" href="#start">Create my first campaign →</a><a className="btn" href="#how">See how it works</a></div>
      <div className="demo"><div className="browser"><div className="browserbar">active.ai / creative-studio</div><div className="dashboard-preview"><div className="preview-card"><span className="eyebrow">PRODUCT INTELLIGENCE</span><h3 style={{fontSize:28,margin:'18px 0 6px'}}>Start with a link.</h3><p style={{color:'#969aa5'}}>Active Ai understands your product, audience and brand before creating your campaign.</p><div className="fake-input">https://yourproduct.com <strong style={{float:'right',color:'#9bf45d'}}>Analyse →</strong></div></div><div className="preview-card"><span style={{color:'#9bf45d',fontSize:12,fontWeight:700}}>GENERATED CREATIVES</span><div className="asset-grid"><div className="asset">VIDEO AD</div><div className="asset">SOCIAL AD</div><div className="asset">UGC CONCEPT</div><div className="asset">PRODUCT AD</div></div></div></div></div></div>
    </section>

    <section className="container section" id="solutions"><div className="section-head"><h2>Everything you need to market your product.</h2><p>One intelligent workspace for turning product information into creative, campaigns and measurable growth.</p></div><div className="grid">{features.map(([icon,title,text])=><article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="container section" id="how"><div className="section-head"><h2>From product to campaign in three steps.</h2><p>No blank canvas. No complicated marketing stack. Just tell Active Ai what you're selling.</p></div><div className="steps"><article className="step"><div className="number">01</div><h3>Add your product</h3><p>Paste your website or product URL. Active Ai extracts the information it needs to understand what makes your product valuable.</p></article><article className="step"><div className="number">02</div><h3>Let AI do the work</h3><p>Generate concepts, hooks, copy, images, videos and campaign variations built around your product and audience.</p></article><article className="step"><div className="number">03</div><h3>Launch and learn</h3><p>Build campaigns, monitor performance and use AI recommendations to continuously improve your marketing.</p></article></div></section>

    <section className="container section" id="pricing"><div className="cta"><h2>Ready to make marketing active?</h2><p>Build your first AI-powered campaign and see what Active Ai can create for your business.</p><a className="btn btn-primary" href="#start">Start creating for free →</a></div></section>

    <footer className="container footer"><div style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}><span className="logo">ACTIVE<span> AI</span></span><span>© 2026 Active Ai. All rights reserved.</span><span>AI marketing, from product to campaign.</span></div></footer>
  </main>;
}
