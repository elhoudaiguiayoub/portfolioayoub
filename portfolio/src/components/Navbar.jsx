import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n";
export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="wordmark" aria-label={t("Accueil d’Ayoub El Houdaigui", "Ayoub El Houdaigui’s homepage")}>
          <span className="monogram" aria-hidden="true">ae<span>.</span></span>
          <span>Ayoub El Houdaigui</span>
        </Link>
        <nav className="main-nav" aria-label={t("Navigation principale", "Main navigation")}>
          <NavLink to="/" end>{t("Accueil", "Home")}</NavLink>
          <NavLink to="/projects">{t("Projets", "Projects")}</NavLink>
          <NavLink to="/about">{t("Parcours", "About")}</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="locale-switch" role="group" aria-label={t("Langue du site", "Site language")}>
          <button type="button" lang="fr" aria-label="Français" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>FR</button>
          <button type="button" lang="en" aria-label="English" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </header>
  );
}
