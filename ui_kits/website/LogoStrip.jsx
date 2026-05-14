function LogoStrip() {
  // Placeholders — text wordmarks in muted grey. Replace with real customer logos.
  const logos = ["NORTHWIND", "BRIGHTPATH", "MERIDIAN CO.", "FIRSTLINE", "OAKBANK"];
  return (
    <section className="logo-strip">
      <div className="container">
        <div className="label">Trusted by small + mid-size teams across hospitality, healthcare, and retail</div>
        <div className="row">
          {logos.map(l => <span key={l}>{l}</span>)}
        </div>
      </div>
    </section>
  );
}
window.LogoStrip = LogoStrip;
