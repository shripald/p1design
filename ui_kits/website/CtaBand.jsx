function CtaBand({ onDemoClick }) {
  return (
    <section className="cta-band">
      <div className="container inner">
        <div>
          <h2>Ready for communications that actually work?</h2>
          <p>See PressONE in action — we'll walk you through it in 20 minutes.</p>
        </div>
        <div className="actions">
          <button className="btn btn-on-dark" onClick={onDemoClick}>Request a Demo</button>
          <a className="btn btn-ghost-dark" href="tel:18005551234">
            <Icon name="phone" size={16} /> (800) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}
window.CtaBand = CtaBand;
