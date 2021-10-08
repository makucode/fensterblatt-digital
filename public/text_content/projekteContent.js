import projektVonBerg from "../imgs/projects/projekt_screen_1.png";
import projektMetaObjects from "../imgs/projects/projekt_screen_2.png";

export const heading = {
    heading: "Unsere Projekte",
    text1: "Werfen Sie gerne einen Blick auf unsere bisherigen Projekte.",
};

export const projekte = [
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
        href: "/projekte/mediation-vonberg",
    },
    {
        heading: "Meta-objects",
        tags: ["Webdesign", "Fotografie", "Branding"],
        img: projektMetaObjects,
        alt: 'Screenshot der Internetseite von "Meta-Objects"',
        href: "/projekte/meta-objects",
    },
];
