import bildTextIllustration from "../imgs/leistungen/bildtext.png";
import grafikdesignIllustration from "../imgs/leistungen/grafikdesign.png";
import seoseaIllustration from "../imgs/leistungen/seosea.png";
import strategieIllustration from "../imgs/leistungen/strategie.png";
import webdesignIllustration from "../imgs/leistungen/webdesign.png";
import webentwicklungIllustration from "../imgs/leistungen/webentwicklung.png";
import projektVonBerg from "../imgs/projects/projekt_screen_1.png";
import projektMetaObjects from "../imgs/projects/projekt_screen_2.png";

export const hero = {
    heading: "Webseiten, effektiv und kreativ",
    text1: "Wir entwickeln digitale Lösungen für Selbstständige, kleine und mittelständische Unternehmen. ",
    linkText1: "Schreiben Sie uns",
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
            img: strategieIllustration,
            alt: "Illustration für Strategie",
        },
        {
            title: "Webdesign",
            text: "User Interface Design, User Experience Design",
            img: webdesignIllustration,
            alt: "Illustration für Webdesign",
        },
        {
            title: "Webentwicklung",
            text: "Entwicklung, Administration, Langzeitwartung",
            img: webentwicklungIllustration,
            alt: "Illustration für Webentwicklung",
        },
        {
            title: "Grafikdesign",
            text: "Logodesign, Corporate Design, Illustration",
            img: grafikdesignIllustration,
            alt: "Illustration für Grafikdesign",
        },
        {
            title: "Bild & Text",
            text: "Fotografie, Textinhalte",
            img: bildTextIllustration,
            alt: "Illustration für Bild & Text",
        },
        {
            title: "SEO & SEA",
            text: "Suchmaschinenoptimierung, Suchmaschinenwerbung",
            img: seoseaIllustration,
            alt: "Illustration für SEO und SEA",
        },
    ],
};

export const projekte = {
    heading: "Ausgewählte Projekte",
    linkText1: "Zur vollständigen Projektübersicht",
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
            img: projektMetaObjects,
            alt: 'Screenshot der Internetseite von "Meta-Objects"',
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
    subHeading1: "Schreiben Sie uns!",
    linkText1: "Zum Kontaktformular",
};
