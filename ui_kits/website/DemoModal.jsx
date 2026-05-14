function DemoModal({ open, onClose }) {
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => { if (!open) setSubmitted(false); }, [open]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={16} />
        </button>
        {submitted ? (
          <div className="success">
            <div className="check"><Icon name="check" size={32} color="white" strokeWidth={3} /></div>
            <h3>You're booked.</h3>
            <p className="sub">A real person will call you within one business day. (Yes, really.)</p>
            <button className="btn btn-primary submit" onClick={onClose}>Close</button>
          </div>
        ) : (
          <React.Fragment>
            <h3>See PressONE in action.</h3>
            <p className="sub">20-minute walkthrough. No slide deck. We'll show you the actual product.</p>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div>
                <label>Work email</label>
                <input type="email" placeholder="you@company.com" required defaultValue="rebecca@northwind-hotels.com" />
              </div>
              <div>
                <label>Company</label>
                <input type="text" placeholder="Northwind Hospitality" required defaultValue="Northwind Hospitality" />
              </div>
              <div>
                <label>Team size</label>
                <select defaultValue="10–25">
                  <option>1–10 employees</option>
                  <option>10–25 employees</option>
                  <option>25–100 employees</option>
                  <option>100+ employees</option>
                </select>
              </div>
              <button className="btn btn-primary submit" type="submit">
                Book my demo <Icon name="arrowRight" size={16} />
              </button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
window.DemoModal = DemoModal;
