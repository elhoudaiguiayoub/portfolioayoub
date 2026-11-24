export function getProjects(lang) {
  const t = (fr, en) => lang === "en" ? en : fr;
  const github = "https://github.com/elhoudaiguiayoub";

  return [
    {
      id: "nuclea",
      title: "NUCLÉA",
      category: t("Commerce en ligne", "E-commerce"),
      description: t(
        "Une boutique bilingue où l’on transforme la photo de son chien ou de son chat en portrait personnalisé, puis en affiche encadrée ou en tasse.",
        "A bilingual shop where pet owners turn a photo of their cat or dog into a custom portrait on a framed print or mug."
      ),
      image: "/images/nuclea.webp",
      imageAlt: t("La boutique de portraits animaliers NUCLÉA", "The NUCLÉA custom pet portrait shop"),
      tags: ["React", "TypeScript", "Next.js", "Stripe", "PostgreSQL"],
      demo: "https://nuclea.shop/" + lang,
      details: [
        {
          label: t("Le parcours client", "The customer journey"),
          text: t(
            "J’ai relié la personnalisation du portrait au panier pour que le client retrouve ses choix au moment de commander, en français comme en anglais.",
            "I connected the portrait customization flow to the cart so shoppers can review their choices before ordering in either French or English."
          ),
        },
        {
          label: t("Après le paiement", "After payment"),
          text: t(
            "J’ai intégré Stripe à l’API Next.js et utilisé PostgreSQL pour enregistrer la confirmation de commande.",
            "I integrated Stripe with the Next.js API and used PostgreSQL to record the order confirmation."
          ),
        },
      ],
    },
    {
      id: "ayschool",
      title: "AySchool",
      category: t("Application scolaire", "Education"),
      description: t(
        "Une application Django pour découvrir les activités parascolaires, réserver une place et retrouver ses inscriptions dans un espace élève.",
        "A Django application where students can browse after-school activities, sign up and see their registrations in one place."
      ),
      image: "/images/ayschool-catalogue.png",
      imageAlt: t(
        "Le catalogue AySchool présente un club de développement web, un tournoi de football et un atelier de design.",
        "The AySchool catalogue lists a web development club, a football tournament and a design workshop."
      ),
      tags: ["Python", "Django", "Bootstrap"],
      github: github + "/portfolioayoub/tree/main/ayschool",
      demo: "https://ayschool-4gme.vercel.app/",
      details: [
        {
          label: t("Deux parcours", "Two user roles"),
          text: t(
            "L’élève choisit un atelier et suit ses inscriptions. Le mode professeur donne accès à un formulaire pour simuler l’ajout d’une activité.",
            "Students choose activities and track their registrations. Teachers get a separate form where they can simulate adding an activity."
          ),
        },
        {
          label: t("Le choix technique", "The technical decision"),
          text: t(
            "Sur Vercel, les fichiers locaux sont temporaires. J’ai utilisé les sessions signées de Django pour conserver les inscriptions de démonstration d’une page à l’autre et empêcher les doublons.",
            "Vercel’s local filesystem is temporary. I used Django’s signed sessions to carry demo registrations between pages and prevent duplicate sign-ups."
          ),
        },
      ],
    },
    {
      id: "ehyou",
      title: "EHYoub Streetwear",
      category: t("Boutique de démonstration", "Storefront demo"),
      description: t(
        "On peut rechercher un article par nom, filtrer par catégorie et trier par prix. Le panier conserve les quantités jusqu’à la confirmation de commande simulée.",
        "Shoppers can search by name, filter by category and sort by price. The cart tracks item quantities through a simulated order confirmation."
      ),
      image: "/images/ecommerce.webp",
      imageAlt: t("La page d’accueil de la boutique EHYoub Streetwear", "The EHYoub Streetwear storefront"),
      tags: ["React", "TypeScript", "React Router"],
      github: github + "/ehyoustreetwear",
      demo: "https://ehyoustreetwear.vercel.app/",
    },
    {
      id: "task-flow",
      title: "Task Flow",
      category: t("Organisation", "Productivity"),
      description: t(
        "Une liste de tâches avec filtres et compteurs. Le stockage local du navigateur permet de fermer la page et de retrouver sa liste à la prochaine visite.",
        "A task list with filters and live counters. Browser storage keeps tasks available when the user closes the page and returns later."
      ),
      image: "/images/todo.webp",
      imageAlt: t("Les compteurs et les filtres du gestionnaire de tâches Task Flow", "Counters and filters in the Task Flow task manager"),
      tags: ["React", "JavaScript", "localStorage"],
      github: github + "/todoapp",
      demo: "https://todoapp-ruby-chi.vercel.app/",
    },
    {
      id: "weather",
      title: "Weather App",
      category: t("Données météo", "Weather data"),
      description: t(
        "Une recherche par ville interroge OpenWeather et affiche la température en degrés Celsius. L’interface signale une ville introuvable ou un problème de connexion.",
        "A city search fetches conditions from OpenWeather and displays the temperature in Celsius. The interface reports an unknown city or a connection error."
      ),
      image: "/images/weather.png",
      imageAlt: t("Le formulaire de recherche par ville de Weather App", "The city search form in Weather App"),
      tags: ["React", "JavaScript", "OpenWeather"],
      github: github + "/weather-app",
      demo: "https://weather-app-bay-five-77.vercel.app/",
    },
  ];
}
