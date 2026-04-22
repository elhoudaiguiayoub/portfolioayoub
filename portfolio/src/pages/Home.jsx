import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <p className="hero-small">Hello, I’m</p>
          <h1 className="hero-title">Ayoub El Houdaigui</h1>
          <h2 className="hero-subtitle">Front-End Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web interfaces with React and JavaScript.
          </p>

          <div className="buttons">
            <Link to="/projects" className="button">View Projects</Link>
            <Link to="/contact" className="button-outline">Contact Me</Link>
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h3>What I Do</h3>
            <p className="subtitle">I create clean front-end websites and interactive web applications.</p>
          </div>
          <div className="card">
            <h3>Main Stack</h3>
            <p className="subtitle">HTML, CSS, JavaScript, React</p>
          </div>
          <div className="card">
            <h3>Goal</h3>
            <p className="subtitle">Build strong portfolio projects and become job-ready as a front-end developer.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;