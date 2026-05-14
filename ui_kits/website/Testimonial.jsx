function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container inner">
        <div className="quote-mark">"</div>
        <blockquote>
          We switched from a clunky on-prem PBX and saved 60% on our phone bill in
          year one. But what we really love? When something breaks, we get a real
          person on the phone — fast. That's been worth every penny.
        </blockquote>
        <div className="author">
          <div className="avatar">M</div>
          <div className="meta">
            <div className="name">Marcus Reilly</div>
            <div className="role">IT Director · Northwind Hospitality Group</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonial = Testimonial;
