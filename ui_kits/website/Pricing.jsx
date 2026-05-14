function Pricing({ onDemoClick }) {
  const plans = [
    {
      name: "Essentials", price: "$19",
      desc: "For solo operators and small teams who need a real business phone line.",
      features: ["Unlimited US calling", "Voicemail to email", "Mobile + desktop apps", "Call recording", "1 toll-free number"],
      cta: "Start free trial",
    },
    {
      name: "Pro", price: "$29", featured: true,
      desc: "Our most popular plan — built for growing teams that want to look bigger than they are.",
      features: ["Everything in Essentials", "AI auto-attendant", "Sentiment analysis", "Team messaging", "CRM integrations"],
      cta: "Get Pro",
    },
    {
      name: "Contact Center", price: "$49",
      desc: "For teams running real customer ops on voice, chat, SMS, and email.",
      features: ["Everything in Pro", "Omnichannel routing", "Skills-based queues", "Live monitoring", "Open APIs"],
      cta: "Talk to sales",
    },
  ];
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="header">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, per-user pricing.</h2>
          <p>No hidden fees. No "call for pricing." Annual users save up to 25% — ask your rep how.</p>
        </div>
        <div className="pricing-grid">
          {plans.map(p => (
            <div className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>
              {p.featured && <span className="ribbon">Most popular</span>}
              <span className="name">{p.name}</span>
              <div className="price">{p.price}<small> /user / mo</small></div>
              <p className="desc">{p.desc}</p>
              <ul>
                {p.features.map(f => (
                  <li key={f}><Icon name="check" size={16} /> {f}</li>
                ))}
              </ul>
              <button
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
                onClick={onDemoClick}
              >{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
