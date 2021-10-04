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
    heading: "Qualität und Nachhaltigkeit",
    text1: "Wir können einzigartige Webseiten zu bezahlbaren Preisen anbieten, da wir ein kleines, effizientes und leidenschaftliches Team sind. Was uns außerdem besonders am Herzen liegt ist der Umweltschutz, weshalb wir verschiedene nachhaltige Projekte fördern.",
    linkText1: "Mehr über uns",
};

export const leistungen = {
    heading: "Was wir machen",
    linkText1: "Mehr zu unseren Leistungen",
    items: [
        {
            title: "Strategie",
            text: "Erstberatung, Webstrategie",
            img: marketingIllustration,
            alt: "Illustration für Strategie",
        },
        {
            title: "Webdesign",
            text: "User Interface Design, User Experience Design",
            img: designIllustration,
            alt: "Illustration für Webdesign",
        },
        {
            title: "Webentwicklung",
            text: "Entwicklung, Administration, Langzeitwartung",
            img: entwicklungIllustration,
            alt: "Illustration für Webentwicklung",
        },
        {
            title: "Grafikdesign",
            text: "Logodesign, Corporate Design, Illustration",
            img: marketingIllustration,
            alt: "Illustration für Grafikdesign",
        },
        {
            title: "Bild & Text",
            text: "Fotografie, Textinhalte",
            img: marketingIllustration,
            alt: "Illustration für Bild & Text",
        },
        {
            title: "SEO & SEA",
            text: "Suchmaschinenoptimierung, Suchmaschinenwerbung",
            img: marketingIllustration,
            alt: "Illustration für SEO und SEA",
        },
    ],
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
