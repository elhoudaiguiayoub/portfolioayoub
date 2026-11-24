import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { initialLanguage, LanguageContext, useLanguage } from "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const titles = {
  "/": ["Développeur web junior", "Junior web developer"],
  "/about": ["Parcours", "About"],
  "/projects": ["Projets", "Projects"],
  "/contact": ["Contact", "Contact"],
};

function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="container missing-page">
      <h1>{t("Page introuvable", "Page not found")}</h1>
      <Link className="button" to="/">{t("Revenir à l’accueil", "Back to home")} →</Link>
    </section>
  );
}

function Portfolio() {
  const [preferredLanguage, updateLanguage] = useState(initialLanguage);
  const { pathname, hash, search } = useLocation();
  const navigate = useNavigate();
  const requestedLanguage = new URLSearchParams(search).get("lang");
  const lang = ["en", "fr"].includes(requestedLanguage) ? requestedLanguage : preferredLanguage;
  const previousPage = useRef(pathname + hash);
  const t = (fr, en) => lang === "fr" ? fr : en;

  useEffect(() => {
    document.documentElement.lang = lang;
    const title = titles[pathname.replace(/\/$/, "") || "/"] || ["Page introuvable", "Page not found"];
    document.title = title[lang === "fr" ? 0 : 1] + " · Ayoub El Houdaigui";
  }, [lang, pathname]);

  useEffect(() => {
    const section = hash && document.getElementById(hash.slice(1));
    if (section) {
      section.scrollIntoView();
    } else if (pathname + hash !== previousPage.current) {
      window.scrollTo(0, 0);
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    previousPage.current = pathname + hash;
  }, [pathname, hash]);

  function setLang(next) {
    updateLanguage(next);
    try {
      localStorage.setItem("portfolio-language", next);
    } catch {
      // The selected language still works for the current visit.
    }
    if (requestedLanguage) {
      const params = new URLSearchParams(search);
      params.set("lang", next);
      navigate({ pathname, search: params.toString(), hash }, { replace: true, preventScrollReset: true });
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <a className="skip-link" href="#main-content">{t("Aller au contenu", "Skip to content")}</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default function App() {
  return <BrowserRouter><Portfolio /></BrowserRouter>;
}
