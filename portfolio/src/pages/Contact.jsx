function Contact() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Contact</h1>
        <p className="subtitle">
          If you would like to work with me or discuss a project, feel free to contact me.
        </p>

        <div className="card" style={{ marginBottom: "20px" }}>
          <p><strong>Email:</strong> elhoudaiguiayoubwc@gmail.com</p>
          <p><strong>Location:</strong> New Westminster / Vancouver, BC</p>
        </div>

        <a href="mailto:elhoudaiguiayoubwc@gmail.com" className="button">
          Send Email
        </a>
      </div>
    </div>
  );
}

export default Contact;