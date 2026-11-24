import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import Arrow from "./Arrow";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Ayoub El Houdaigui</span>
        <div>
          <Link to="/contact">Contact</Link>
          <a href="https://github.com/elhoudaiguiayoub" aria-label={t("Profil GitHub d’Ayoub", "Ayoub’s GitHub profile")}>GitHub <Arrow diagonal /></a>
        </div>
      </div>
    </footer>
  );
}
