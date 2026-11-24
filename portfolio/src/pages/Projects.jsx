import { useSearchParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import { getProjects } from "../data/projects";
import { useLanguage } from "../i18n";
import "./projects.css";

const technologies = ["React", "TypeScript", "JavaScript", "Django"];

function ProjectEntry({ project }) {
  const { t } = useLanguage();
  const isCaseStudy = Boolean(project.details);
  const demoLabel = project.id === "nuclea"
    ? t("Visiter la boutique", "Visit the shop")
    : t("Ouvrir la démo", "Open demo");

  return (
    <article
      id={project.id}
      className={isCaseStudy ? "work-entry work-case" : "work-entry work-compact"}
      aria-labelledby={project.id + "-title"}
    >
      <div className={"work-preview work-preview-" + project.id}>
        <img
          alt={project.imageAlt}
          src={project.image}
          loading={project.id === "nuclea" ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <div className="work-summary">
        <p className="work-category">{project.category}</p>
        <h2 id={project.id + "-title"}>{project.title}</h2>
        <p className="work-description">{project.description}</p>
        <ul className="work-tags" aria-label={t("Technologies utilisées", "Technologies used")}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="work-actions">
          <a href={project.demo} className="work-demo" aria-label={demoLabel + " · " + project.title}>
            {demoLabel} <Arrow diagonal />
          </a>
          {project.github && (
            <a href={project.github} className="work-source" aria-label={t("Code source de ", "Source code for ") + project.title}>
              {t("Code source", "Source code")} <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
      {isCaseStudy && (
        <dl className="work-details">
          {project.details.map(({ label, text }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

function Projects() {
  const { lang, t } = useLanguage();
  const [params, setParams] = useSearchParams();
  const requestedTech = params.get("tech");
  const selectedTech = technologies.includes(requestedTech) ? requestedTech : "";
  const visible = getProjects(lang).filter((project) => !selectedTech || project.tags.includes(selectedTech));

  function selectTech(tech) {
    const next = new URLSearchParams(params);
    if (next.has("lang")) next.set("lang", lang);
    if (tech) next.set("tech", tech);
    else next.delete("tech");
    setParams(next, { preventScrollReset: true });
  }

  return (
    <div className="container work-page">
      <header className="work-heading">
        <h1>{t("Mes projets", "My projects")}<span aria-hidden="true">.</span></h1>
        <p>
          {t(
            "Du premier clic à la confirmation d’une commande ou d’une inscription, voici les parcours que j’ai développés.",
            "From a first click to an order confirmation or an activity sign-up, these are the user journeys I’ve built."
          )}
        </p>
      </header>
      <div className="work-toolbar">
        <div className="work-filters" role="group" aria-label={t("Filtrer par technologie", "Filter by technology")}>
          {["", ...technologies].map((tech) => (
            <button key={tech} type="button" aria-pressed={selectedTech === tech} onClick={() => selectTech(tech)}>
              {tech || t("Tous", "All")}
            </button>
          ))}
        </div>
        <p className="work-count" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? t("projet", "project") : t("projets", "projects")}
        </p>
      </div>
      <div className="work-grid">
        {visible.map((project) => <ProjectEntry key={project.id} project={project} />)}
      </div>
      <p className="work-colophon">
        {t("Ce portfolio est développé avec React et Vite.", "This portfolio is built with React and Vite.")}{" "}
        <a href="https://github.com/elhoudaiguiayoub/portfolioayoub/tree/main/portfolio">
          {t("Voir le code du portfolio", "View the portfolio source")} <Arrow diagonal />
        </a>
      </p>
    </div>
  );
}

export default Projects;
