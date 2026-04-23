function Contact() {
  return (
    <div className="page">
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            If you want to work with me, collaborate on a project, or discuss a junior front-end opportunity,
            feel free to contact me.
          </p>

          <div className="grid-3">
            <div className="contact-card">
              <h3>Email</h3>
              <p>elhoudaiguiayoubwc@gmail.com</p>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p>New Westminster / Vancouver, BC</p>
            </div>

            <div className="contact-card">
              <h3>Status</h3>
              <p>Available for projects and junior opportunities</p>
            </div>
          </div>

          <div className="buttons" style={{ marginTop: "24px" }}>
            <a href="mailto:elhoudaiguiayoubwc@gmail.com" className="button">
              Send Email
            </a>
            <a href="https://github.com/elhoudaiguiayoub" target="_blank" rel="noreferrer" className="button-outline">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;