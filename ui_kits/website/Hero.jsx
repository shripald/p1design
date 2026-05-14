function Hero({ onDemoClick }) {
  return (
    <section className="hero">
      <div className="container inner">
        <div>
          <div className="eyebrow">AI-Enhanced Unified Communications</div>
          <h1>For better <em>communications.</em></h1>
          <p className="lede">
            Hosted VoIP, AI auto-attendants, omnichannel contact center —
            and a real person on the phone when you need one. We've been
            doing this for 25 years.
          </p>
          <div className="ctas">
            <button className="btn btn-primary" onClick={onDemoClick}>
              Request a Demo <Icon name="arrowRight" size={16} />
            </button>
            <a className="btn btn-ghost-dark" href="#pricing">See Plans</a>
          </div>
          <div className="stats">
            <div className="stat"><span className="num">25+</span><span className="lbl">Years in business</span></div>
            <div className="stat"><span className="num">70%</span><span className="lbl">Cost savings vs. PBX</span></div>
            <div className="stat"><span className="num">80%</span><span className="lbl">Routine calls automated</span></div>
          </div>
        </div>
        <HeroDevice />
      </div>
    </section>
  );
}

function HeroDevice() {
  const [seconds, setSeconds] = React.useState(127);
  React.useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds/60)).padStart(2, '0');
  const ss = String(seconds%60).padStart(2, '0');

  return (
    <div className="hero-device">
      <div className="notch" />
      <div className="header">
        <div>
          <div className="t">INCOMING TRANSCRIPT</div>
          <div className="b">Front Desk · Line 1</div>
        </div>
        <Icon name="sparkle" size={18} color="#FAA633" />
      </div>
      <div className="caller">
        <div className="avatar">R</div>
        <div className="name">Rebecca Chen</div>
        <div className="meta">Northwind Hotels · returning guest</div>
        <div className="dur">{mm}:{ss}</div>
      </div>
      <div className="sentiment">
        <div className="row">
          <span className="lbl">Sentiment</span>
          <span className="val">Positive · 78%</span>
        </div>
        <div className="bar"><div /></div>
      </div>
      <div className="controls">
        <button aria-label="Mute"><Icon name="mic" size={18} /></button>
        <button className="end" aria-label="End"><Icon name="phone" size={18} style={{ transform: 'rotate(135deg)'}} /></button>
        <button aria-label="Transfer"><Icon name="users" size={18} /></button>
      </div>
    </div>
  );
}
window.Hero = Hero;
