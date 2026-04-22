function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"];

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">About Me</h1>
        <p className="subtitle">
          I am a motivated front-end developer building real projects and improving my React skills every day.
        </p>
        <p className="subtitle">
          I enjoy creating clean, modern, and user-friendly interfaces.
        </p>

        <div className="card">
          <h2>Skills</h2>
          <div className="badges">
            {skills.map((skill) => (
              <span key={skill} className="badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;