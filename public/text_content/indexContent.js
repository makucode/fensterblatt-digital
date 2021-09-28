import marketingIllustration from "../imgs/marketing.png";
import entwicklungIllustration from "../imgs/entwicklung.png";
import designIllustration from "../imgs/design.png";
import projektVonBerg from "../imgs/projekt_mediation_vonberg.png";

export const hero = {
    heading: "Webseiten, effektiv und kreativ",
    text1: "Wir bieten digitale Lösungen für Selbstständige, Kleinunternehmer sowie mittelständische Unternehmen.", //CHECK
    linkText1: "Schreiben Sie uns", //CHECK
};

export const about = {
    heading: "Effizient und Nachhaltig",
    text1: "Wir bieten hohe Qualität bei bezahlbaren Preisen, da wir ein sehr kleines, aber effizientes Team sind. Ein Punkt der uns außerdem besonders am Herzen liegt ist der Umweltschutz, weshalb wir verschiedene nachhaltige Projekte fördern.",
    linkText1: "Mehr über uns",
};

export const leistungen = {
    heading: "Was wir machen",
    subHeading1: "Entwicklung",
    subHeading2: "Design",
    subHeading3: "Marketing",
    text1: "Landing-Page, Online-Shop oder Wordpress-Blog, wir entwickeln Ihnen die passende digitale Lösung.", //CHECK
    text2: "Falls Sie für Ihr Unternehmen ein neues Erscheinungsbild inklusive Logo, Visitenkarten und Fotos brauchen, sind Sie hier richtig.",
    text3: "Wir sorgen dafür, dass Ihre Seite bei Google auftaucht und kümmern uns auch gerne um Ihre Social Media Präsenz.", //CHECK
    img1: entwicklungIllustration,
    img2: designIllustration,
    img3: marketingIllustration,
    alt1: "Entwicklungs Illustration",
    alt2: "Design Illustration",
    alt3: "Marketing Illustration",
    linkText1: "Mehr zu unseren Leistungen",
};

export const projekte = {
    heading: "Ausgewählte Projekte",
    linkText1: "Zur vollständigen Projektübersicht", //CHECK
    projekte: [
        {
            heading: "Mediation von Berg",
            tags: [
                "Webdevelopment",
                "SEO",
                "Webdesign",
                "Fotografie",
                "Corporate Design",
            ],
            img: projektVonBerg,
            alt: 'Screenshot der Internetseite von "Mediation von Berg"',
            align: "left",
            href: "/projekte/mediation-vonberg",
        },
        {
            heading: "Meta-objects",
            tags: ["Webdesign", "Fotografie", "Corporate Design"],
            img: projektVonBerg,
            alt: "", //INSERT!!!
            align: "right",
            href: "/projekte/meta-objects",
        },
    ],
};

export const faq = {
    heading: "FAQ",
    items: [
        {
            heading: "Was kostet das?",
            text1: "Hm das können wir leider nicht beantworten",
        },
        {
            heading: "Wie lange dauert das?",
            text1: "Hm das können wir leider nicht beantworten",
        },
        {
            heading: "Wer ist dieser Maxi?",
            text1: "Das beantworten wir ihnen gern bei einem persönlichen Gespräch!",
        },
    ],
};

export const kontakt = {
    heading: "Interessiert?",
    subHeading1: "Schreiben Sie uns",
    linkText1: "Zum Kontaktformular",
};
