import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <div className="page">
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">
            A selection of front-end projects where I practice UI building, React logic,
            responsive layouts, and clean component structure.
          </p>

          <div className="project-toolbar">
            <button
              className={`filter-btn ${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "React" ? "active" : ""}`}
              onClick={() => setFilter("React")}
            >
              React
            </button>
            <button
              className={`filter-btn ${filter === "JavaScript" ? "active" : ""}`}
              onClick={() => setFilter("JavaScript")}
            >
              JavaScript
            </button>
            <button
              className={`filter-btn ${filter === "Django" ? "active" : ""}`}
              onClick={() => setFilter("Django")}
            >
              Django
            </button>

          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                />

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-text">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <p className="project-category">{selectedProject.category}</p>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <div className="modal-links">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="button-outline"
                >
                  Live Demo
                </a>
                <button className="button-outline" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;