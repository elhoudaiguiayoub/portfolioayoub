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
        <h1 className="title">My Projects</h1>
        <p className="subtitle">
          Here are some projects I built while learning front-end development.
        </p>

        <div className="buttons">
          <button className="button" onClick={() => setFilter("All")}>All</button>
          <button className="button" onClick={() => setFilter("React")}>React</button>
          <button className="button" onClick={() => setFilter("JavaScript")}>JavaScript</button>
        </div>

        <div className="grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card project-card"
              onClick={() => setSelectedProject(project)}
            >
              <h2>{project.title}</h2>
              <p className="hero-small">{project.category}</p>
              <p className="subtitle">{project.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedProject.title}</h2>
              <p className="hero-small">{selectedProject.category}</p>
              <p className="subtitle">{selectedProject.description}</p>

              <button className="button" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;