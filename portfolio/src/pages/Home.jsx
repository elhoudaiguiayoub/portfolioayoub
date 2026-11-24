import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import { useLanguage } from "../i18n";

export default function Home() {
  const { lang, t } = useLanguage();
  const selected = [
    {
      id: "ayschool", title: "AySchool", tech: "Python · Django",
      image: "/images/ayschool-catalogue.png", tone: "sage",
      description: t("Un catalogue où les élèves choisissent leurs activités parascolaires et retrouvent leurs inscriptions.", "A catalog where students browse after-school activities, sign up, and review their registrations."),
    },
    {
      id: "ehyou", title: "EHYoub Streetwear", tech: "React · TypeScript",
      image: "/images/ecommerce.webp", tone: "sand",
      description: t("Une vitrine de prêt-à-porter avec recherche, filtres par catégorie et panier.", "A streetwear storefront with product search, category filters, and a shopping cart."),
    },
  ];

  return (
    <div className="container home">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-intro">
          <div className="availability"><span aria-hidden="true" />{t("Ouvert aux postes juniors", "Open to junior roles")}</div>
          <h1 id="hero-title">Ayoub El<br /><em>Houdaigui<span>.</span></em></h1>
          <p className="hero-role">{t("Développeur web", "Web developer")} <span aria-hidden="true">/</span> Canada</p>
          <p className="intro-copy">{t("Je développe des applications en React et Django, du configurateur de portraits personnalisés à la plateforme d’inscriptions scolaires.", "I build web apps with React and Django, from a custom portrait storefront to a school activity registration platform.")}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button">{t("Voir mes projets", "View my projects")} <Arrow /></Link>
            <a className="cv-action" href={`/cv/Ayoub-El-Houdaigui-${lang.toUpperCase()}.pdf`} download>
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2v10m-3.5-3.5L10 12l3.5-3.5M3.5 13v3.5h13V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t("Mon CV", "My résumé")} <small>PDF</small>
            </a>
          </div>
        </div>
        <Link to="/projects#nuclea" className="spotlight" aria-label={t("Découvrir le projet NUCLÉA", "Explore the NUCLÉA project")}>
          <div className="spotlight-top">
            <span className="spotlight-label"><i aria-hidden="true" />{t("Projet à la une", "Featured project")}</span>
            <span className="spotlight-type">E-commerce</span>
          </div>
          <div className="spotlight-stage" aria-hidden="true">
            <div className="preview-browser">
              <div className="preview-toolbar"><i /><i /><i /><span>nuclea.shop</span></div>
              <img src="/images/nuclea.webp" alt="" width="1424" height="896" fetchPriority="high" />
            </div>
          </div>
          <div className="spotlight-bottom">
            <div><h2>NUCLÉA</h2><p>{t("Boutique de portraits personnalisés", "Custom pet portrait storefront")}</p></div>
            <span className="round-arrow"><Arrow /></span>
          </div>
        </Link>
      </section>

      <section className="selected-work" aria-labelledby="selected-title">
        <div className="selected-heading">
          <h2 id="selected-title">{t("Projets sélectionnés", "Selected work")}<span>.</span></h2>
          <Link className="text-link" to="/projects">{t("Tous les projets", "All projects")} <Arrow /></Link>
        </div>
        <div className="selected-grid">
          {selected.map(project => (
            <Link className="work-card" to={`/projects#${project.id}`} key={project.id}>
              <div className={`work-visual ${project.tone}`}>
                <img src={project.image} alt="" loading="lazy" width="650" height="360" />
              </div>
              <div className="work-copy">
                <p className="work-tech">{project.tech}</p>
                <h3>{project.title}<Arrow /></h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
