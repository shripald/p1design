function Footer() {
  const cols = [
    { h: "Products", links: ["Hosted VoIP", "Omnichannel Contact Center", "AI Voice Agents", "Business Messaging", "SIP Trunking", "POTS Replacement"] },
    { h: "Industries", links: ["Hospitality", "Healthcare", "Retail", "Financial", "Government", "Education"] },
    { h: "Resources", links: ["Blog", "Case Studies", "Help Center", "API Docs", "Status", "Webinars"] },
    { h: "Company", links: ["About", "Careers", "Partners", "Contact", "Press", "Trust"] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand">
            <img src="../../assets/pressone-logo-white.svg" alt="PressONE" />
            <p>PressONE has been helping businesses communicate better for 25 years. Voice, video, SMS, AI — and a real person on the other end of the line.</p>
            <div className="socials">
              <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
            </div>
          </div>
          {cols.map(c => (
            <div className="col" key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="bottom">
          <span>© 2026 PressONE Communications · An AMP Networks company</span>
          <span>
            <a href="#" style={{ marginRight: 16 }}>Privacy</a>
            <a href="#" style={{ marginRight: 16 }}>Terms</a>
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
