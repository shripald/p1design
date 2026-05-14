function Navbar({ onDemoClick, onChatClick }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="navbar">
      <div className="container inner">
        <a className="logo" href="#">
          <img src="../../assets/pressone-logo.svg" alt="PressONE" />
        </a>
        <nav>
          <a href="#products">Solutions <Icon name="chevronDown" size={12} /></a>
          <a href="#industries">Industries <Icon name="chevronDown" size={12} /></a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>
        <div className="right">
          <a className="phone" href="tel:18005551234">
            <Icon name="phone" size={16} />
            (800) 555-1234
          </a>
          <button className="btn btn-primary btn-sm" onClick={onDemoClick}>Request a Demo</button>
          <button className="btn btn-ghost btn-sm mobile-only" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
window.Navbar = Navbar;
