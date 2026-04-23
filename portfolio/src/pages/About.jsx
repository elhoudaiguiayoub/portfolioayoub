function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Router",
    "Responsive Design",
    "Git",
    "Vercel",
  ];

  return (
    <div className="page">
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            I am a motivated front-end developer focused on building modern user interfaces with
            React. I learn by creating projects, improving UI quality, and shipping real work online.
          </p>

          <div className="grid-3">
            <div className="skill-card">
              <h3>How I Work</h3>
              <p>I prefer building real projects instead of spending all my time on tutorials.</p>
            </div>

            <div className="skill-card">
              <h3>What I Improve</h3>
              <p>Component structure, cleaner styling, better interactions, and stronger project quality.</p>
            </div>

            <div className="skill-card">
              <h3>Goal</h3>
              <p>Become job-ready and strong enough to deliver polished front-end projects confidently.</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "24px" }}>
            <h3>Skills</h3>
            <div className="skills-wrap">
              {skills.map((skill) => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;