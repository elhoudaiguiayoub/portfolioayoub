import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div>
            <div className="hero-badge">Available for junior front-end roles</div>

            <h1>
              I build <span>modern interfaces</span> that feel clean and fast.
            </h1>

            <p className="hero-subtitle">Front-End Developer • React • JavaScript</p>

            <p className="hero-description">
              I build real-world React applications and I am ready for a junior front-end role.
            </p>

            <div className="buttons">
              <Link to="/projects" className="button">View Projects</Link>
              <Link to="/contact" className="button-outline">Hire Me</Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Quick Snapshot</h3>
            <p>
              Strong motivation, real React practice, modern UI focus, and a portfolio built
              project by project.
            </p>

            <div className="stats">
              <div className="stat-box">
                <strong>3+</strong>
                <span>Projects built</span>
              </div>
              <div className="stat-box">
                <strong>React</strong>
                <span>Main front-end stack</span>
              </div>
              <div className="stat-box">
                <strong>UI</strong>
                <span>Clean visual style</span>
              </div>
              <div className="stat-box">
                <strong>Ready</strong>
                <span>For next-level projects</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">What I Focus On</h2>
          <p className="section-subtitle">
            I’m not just learning syntax. I’m building real front-end projects that combine layout,
            state management, interactions, responsiveness, and deployment.
          </p>

          <div className="grid-3">
            <div className="card">
              <h3>Responsive UI</h3>
              <p>I build layouts that work well on desktop and mobile with clean structure.</p>
            </div>

            <div className="card">
              <h3>React Logic</h3>
              <p>I use components, state, filtering, dynamic rendering, and routing.</p>
            </div>

            <div className="card">
              <h3>Real Deployment</h3>
              <p>I can publish a project online with GitHub and Vercel.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;