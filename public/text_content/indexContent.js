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
    text1: "Wir entwickeln digitale Lösungen für Selbstständige, kleine und mittelständische Unternehmen.",
    linkText1: "Schreiben Sie uns",
};

export const about = {
    heading: "Qualität und Nachhaltigkeit",
    text1: "Wir können einzigartige Webseiten zu bezahlbaren Preisen anbieten, da wir ein effizientes und leidenschaftliches Team sind. Was uns außerdem besonders am Herzen liegt ist der Umweltschutz, weshalb wir verschiedene nachhaltige Projekte fördern.",
    linkText1: "Mehr über uns",
};

export const leistungen = {
    heading: "Was wir machen",
    linkText1: "Mehr zu unseren Leistungen",
    items: [
        {
            title: "Strategie",
            text: "Beratung, Ziele, Webstrategie",
            img: strategieIllustration,
            alt: "Illustration für Strategie",
        },
        {
            title: "Webdesign",
            text: "User Interface, User Experience, Prototyping",
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
            text: "Branding, Corporate Design, Logodesign",
            img: grafikdesignIllustration,
            alt: "Illustration für Grafikdesign",
        },
        {
            title: "Bild & Text",
            text: "Fotografie, Video, Textinhalte",
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
                "Webdesign",
                "Webentwicklung",
                "Corporate Design",
                "Fotografie",
                "SEO",
            ],
            img: projektVonBerg,
            alt: 'Screenshot der Internetseite von "Mediation von Berg"',
            align: "left",
            href: "/projekte/mediation-vonberg",
        },
        {
            heading: "Meta-objects",
            tags: ["Webdesign", "Fotografie", "Branding"],
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
            heading: "Wie läuft ein Projekt ab?",
            text1: "Zu Beginn jedes neuen Projekts sprechen wir zunächst ausführlich mit Ihnen, um ihre Anforderungen und Ziele zu verstehen und Zeitrahmen und Kosten zu vereinbaren. Anschließend entwerfen wir auf dieser Grundlage einen visuellen Prototypen, welchen wir Ihnen präsentieren. Sind mit diesem alle zufrieden, findet im nächsten Schritt die technische Entwicklung statt. Abschließend übergeben wir die Seite oder stellen sie für Sie online. Falls nach Abschluss eines Projekts Fragen, Probleme oder weitere Wünsche aufkommen, sind wir selbstverständlich immer erreichbar.",
        },
        {
            heading: "Was kostet eine Webseite?",
            text1: "Eine pauschale Antwort lässt sich darauf natürlich nicht geben, da Webseiten in Umfang und Komplexität stark variieren. Erst nach einem Gespräch können wir genau einschätzen, wie umfangreich ein Projekt sein wird. Um Ihnen aber eine ungefähre Vorstellung zu geben: Sehr simple Projekte, wie z. B. eine Landingpage, setzen wir bereits für einige hundert Euro um, während ein sehr umfangreicher Online-Shop einige Tausend Euro kosten kann.",
        },
        {
            heading: "Wie lange dauert das?",
            text1: "Wir arbeiten am liebsten schnell und effektiv. Ein durchschnittliches Projekt dauert bei uns, je nach Umfang, ungefähr drei bis acht Wochen.",
        },
        {
            heading:
                "Ich habe schon eine Webseite, könnt ihr diese überarbeiteten?",
            text1: "In den meisten Fällen ist es effizienter und kostengünstiger, eine Webseite von Grund auf neu zu entwickeln. Falls Ihre bestehende Seite sich aber tatsächlich eignen sollte, darauf aufzubauen, sind wir natürlich dazu bereit, z. B. falls die Seite um eine Funktionalität erweitert oder grafisch neu gestaltet werden soll.",
        },
    ],
};

export const kontakt = {
    heading: "Interessiert?",
    subHeading1: "Schreiben Sie uns!",
    linkText1: "Zum Kontaktformular",
};
