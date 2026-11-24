import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import "./about-contact.css";

export default function About() {
  const { lang, t } = useLanguage();
  const skills = [
    {
      title: t("Interfaces web", "Web interfaces"),
      tools: "React, TypeScript, HTML, CSS",
      example: t(
        "Pour NUCLÉA, j’ai développé les fiches produits et le panier d’une boutique de produits personnalisables.",
        "For NUCLÉA, I built the product pages and shopping cart for a store selling customizable products.",
      ),
    },
    {
      title: t("Côté serveur", "Server-side development"),
      tools: "Python, Django, Next.js, PostgreSQL",
      example: t(
        "Dans AySchool, les sessions signées de Django permettent à un élève de retrouver ses inscriptions d’une page à l’autre.",
        "In AySchool, I used Django’s signed sessions so students can see the activities they signed up for as they move between pages.",
      ),
    },
    {
      title: t("Tests et intégration", "Testing and integration"),
      tools: "Vitest, GitHub Actions, Git",
      example: t(
        "Pour le paiement de NUCLÉA, j’ai testé le traitement des confirmations Stripe, y compris le rejet des notifications dont la signature est invalide.",
        "For NUCLÉA’s checkout, I tested how the app handles Stripe payment confirmations, including rejecting notifications with invalid signatures.",
      ),
    },
  ];

  return (
    <div className="profile-page container">
      <header className="profile-intro">
        <div>
          <p className="profile-kicker">{t("Mon parcours", "About me")}</p>
          <h1>Ayoub El Houdaigui<span className="profile-period">.</span></h1>
          <p className="profile-lead">
            {t(
              "Développeur web junior, je travaille sur les interfaces et le code qui les fait fonctionner. Mes projets vont d’un catalogue d’activités scolaires au parcours de paiement d’une boutique.",
              "I’m a junior web developer working on interfaces and the code behind them. My projects range from a school activity catalog to an online store’s checkout.",
            )}
          </p>
          <Link to="/projects" className="profile-link">
            {t("Voir mes projets", "Explore my projects")} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <aside className="profile-education">
          <p className="profile-kicker">{t("Formation", "Education")}</p>
          <h2>{t("Développement Web", "Web Development")}</h2>
          <p>{t("Attestation d’études collégiales (AEC)", "Attestation of College Studies (AEC)")}</p>
          <a className="profile-link" href={`/cv/Ayoub-El-Houdaigui-${lang.toUpperCase()}.pdf`} download>
            {t("Télécharger mon CV", "Download my résumé")} <span className="profile-filetype">PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </header>
      <section className="profile-skills" aria-labelledby="skills-title">
        <h2 id="skills-title">{t("Compétences en pratique", "Skills in practice")}</h2>
        <dl>
          {skills.map(({ title, tools, example }) => (
            <div className="profile-skill" key={tools}>
              <dt>{title}</dt>
              <dd><p>{example}</p><small>{tools}</small></dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
