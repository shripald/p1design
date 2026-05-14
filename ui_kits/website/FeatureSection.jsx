function FeatureSection() {
  return (
    <section id="industries" className="section tint">
      <div className="container">
        <div className="feature-row">
          <div>
            <span className="eyebrow">Omnichannel Contact Center</span>
            <h2>Say goodbye to scattered conversations.</h2>
            <p>
              Customers don't think in channels — they tweet, then call, then chat. With PressONE,
              your agents see the whole journey on one screen. No more "let me transfer you, can you
              repeat your account number?"
            </p>
            <ul>
              <li><Icon name="check" size={18} color="#2F8F4F" /> CRM + ticketing integration</li>
              <li><Icon name="check" size={18} color="#2F8F4F" /> Skills-based routing</li>
              <li><Icon name="check" size={18} color="#2F8F4F" /> Live monitoring &amp; analytics</li>
              <li><Icon name="check" size={18} color="#2F8F4F" /> Open APIs for whatever you've built</li>
            </ul>
            <a className="btn btn-primary" href="#">See it in action <Icon name="arrowRight" size={16} /></a>
          </div>
          <div className="visual">
            <div className="dashboard">
              <div className="topbar">
                <span className="dot" style={{ background:'#E06A00'}} />
                <span className="dot" style={{ background:'#FAA633'}} />
                <span className="dot" style={{ background:'#AE8CC8'}} />
                <span style={{ marginLeft: 8, fontSize: 11, color: '#9B9B9B' }}>Agent Console · Live</span>
              </div>
              <div className="body">
                <div className="sidebar">
                  <div className="si active"><Icon name="headset" size={16} /></div>
                  <div className="si"><Icon name="chat" size={16} /></div>
                  <div className="si"><Icon name="users" size={16} /></div>
                  <div className="si"><Icon name="shield" size={16} /></div>
                </div>
                <div className="main">
                  <div className="kpis">
                    <div className="kpi"><div className="l">In queue</div><div className="v">14</div></div>
                    <div className="kpi"><div className="l">Avg wait</div><div className="v">42s</div></div>
                    <div className="kpi"><div className="l">Sentiment</div><div className="v" style={{ color: '#2F8F4F'}}>+78</div></div>
                  </div>
                  <div className="chart">
                    <div className="h">Calls / hour — last 12h</div>
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#FF8200" stopOpacity="0.42" />
                          <stop offset="100%" stopColor="#FF8200" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 48 L18 38 L36 42 L54 22 L72 30 L90 14 L108 24 L126 12 L144 26 L162 18 L180 8 L200 16 L200 60 L0 60 Z" fill="url(#g1)" />
                      <path d="M0 48 L18 38 L36 42 L54 22 L72 30 L90 14 L108 24 L126 12 L144 26 L162 18 L180 8 L200 16" fill="none" stroke="#FF8200" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FeatureSection = FeatureSection;
