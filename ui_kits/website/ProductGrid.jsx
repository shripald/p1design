function ProductGrid() {
  const products = [
    { icon: "phone", title: "Hosted VoIP", body: "A business phone system in the cloud. Voicemail-to-email, video calls, team messaging, and customer call routing — all from a browser." },
    { icon: "headset", title: "Omnichannel Contact Center", body: "Voice, email, chat, SMS, and social in one queue. Skills-based routing, live monitoring, and CRM + ticketing integrations." },
    { icon: "sparkle", title: "AI Voice & Chat Agents", body: "Lifelike AI auto-attendants that handle 80%+ of routine inquiries. Real-time sentiment analysis on every call." },
    { icon: "chat", title: "Business Messaging", body: "MMS, canned responses, scheduled blasts, drip campaigns, and reminders. Meet customers on their device of choice." },
    { icon: "shield", title: "SIP Trunking & POTS Replacement", body: "Modernize off copper without losing the lines you rely on. Carrier-grade, UL-listed, dedicated project management." },
    { icon: "globe", title: "Network & Managed Services", body: "Broadband, fiber, MPLS. A holistic approach to your telecom infrastructure — sized for SMB or enterprise." },
  ];
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="header">
          <span className="eyebrow">What we do</span>
          <h2>One platform. Every channel.</h2>
          <p>From the front desk to the corner office, PressONE connects your team and your customers on whatever device, in whichever room, on any channel they prefer.</p>
        </div>
        <div className="products">
          {products.map(p => (
            <a className="card" href="#" key={p.title}>
              <div className="icon"><Icon name={p.icon} size={28} /></div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="more">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProductGrid = ProductGrid;
