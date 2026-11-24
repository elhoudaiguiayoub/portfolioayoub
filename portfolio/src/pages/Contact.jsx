import { useState } from "react";
import { useLanguage } from "../i18n";
import "./about-contact.css";

const email = "elhoudaiguiayoubwc@gmail.com";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("manual");
    }
  }

  return (
    <div className="contact-page container">
      <header className="contact-intro">
        <p className="profile-kicker">Contact</p>
        <h1>{t("Prenons contact", "Get in touch")}<span className="profile-period">.</span></h1>
        <p className="profile-lead">
          {t(
            "Vous recrutez en développement web junior ? Écrivez-moi avec quelques mots sur votre équipe, le poste et les projets auxquels je pourrais contribuer.",
            "Hiring a junior web developer? I’d love to hear about your team, the role, and the projects I could contribute to.",
          )}
        </p>
      </header>
      <div className="contact-options">
        <section className="contact-email" aria-labelledby="email-title">
          <h2 className="profile-kicker" id="email-title">{t("Par courriel", "By email")}</h2>
          <a className="contact-address" href={`mailto:${email}`}>elhoudaiguiayoubwc<wbr />@gmail.com</a>
          <div className="contact-actions">
            <a className="contact-send" href={`mailto:${email}`}>
              {t("M’écrire", "Send an email")} <span aria-hidden="true">↗</span>
            </a>
            <button type="button" className="contact-copy" onClick={copyEmail}>
              {t("Copier l’adresse", "Copy address")}
            </button>
          </div>
          <p className="contact-status" role="status">
            {copyStatus === "copied" && t("Adresse copiée.", "Address copied.")}
            {copyStatus === "manual" && t("Vous pouvez sélectionner et copier l’adresse ci-dessus.", "Select and copy the email address above.")}
          </p>
        </section>
        <section className="contact-resources" aria-labelledby="resources-title">
          <h2 id="resources-title">{t("Pour votre recrutement", "For your hiring team")}</h2>
          <a href={`/cv/Ayoub-El-Houdaigui-${lang.toUpperCase()}.pdf`} download>
            <span>{t("Télécharger mon CV", "Download my résumé")} <small>PDF</small></span>
            <span aria-hidden="true">↓</span>
          </a>
          <a href="https://github.com/elhoudaiguiayoub">
            {t("Mon code sur GitHub", "My code on GitHub")} <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </div>
  );
}
