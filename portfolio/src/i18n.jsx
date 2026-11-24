import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);
export const useLanguage = () => useContext(LanguageContext);

export function initialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested === "en" || requested === "fr") return requested;
  try {
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // Browser storage can be disabled.
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
}
