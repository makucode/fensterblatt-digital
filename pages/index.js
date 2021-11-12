import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "../styles/pages/Home.module.css";
import {
    hero,
    about,
    leistungen,
    projekte,
    faq,
    kontakt,
} from "../public/text_content/indexContent";
import Separator from "../components/index/Separator";
import LeistungenItem from "../components/index/LeistungenItem";
import ProjektItem from "../components/ProjektItem";
import FaqItem from "../components/index/FaqItem";
import ArrowIcon from "../components/svgs/ArrowIcon";
import SectionHeading from "../components/SectionHeading";
import ImgBoxes from "../components/index/ImgBoxes";
import HeroHeading from "../components/index/HeroHeading";
import AboutHeading from "../components/index/AboutHeading";
import KontaktMail from "../components/index/KontaktMail";

export default function Home() {
    const [curHero, setCurHero] = useState(Math.floor(Math.random() * 4));

    const renderProjects = () => {
        return projekte.projekte.map((projekt, idx) => (
            <ProjektItem key={uuid()} index={idx} {...projekt} />
        ));
    };

    const renderFaqs = () => {
        return faq.items.map((item) => <FaqItem key={uuid()} {...item} />);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt Digital</title>
                <meta
                    name="description"
                    content="Wir, zwei Design- und Technikbegeisterte aus Hannover, haben uns zum Ziel gesetzt, die digitale Welt um uns herum etwas schöner zu gestalten."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="google-site-verification"
                    content="BlLDjU2by3mgocoAg_N2AQJJNF8lBObcDBvMRmm0Z-Q"
                />
            </Head>
            <div className={styles.indexContent}>
                <section className={styles.indexHero}>
                    <ImgBoxes cur={curHero} />
                    <HeroHeading text={hero.heading} />
                    <p className={styles.headingHeroSub}>{hero.text1}</p>
                    <Link scroll={false} href="/kontakt" passHref>
                        <a className="bold">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>{hero.linkText1}</span>
                        </a>
                    </Link>
                </section>
                <section className={styles.indexAbout}>
                    <div className={styles.indexAboutLeft}>
                        <AboutHeading text={about.heading} />
                        <Link scroll={false} href="/about" passHref>
                            <a className="thin">
                                <div className="arrow"></div>
                                <ArrowIcon />
                                <span>{about.linkText1}</span>
                            </a>
                        </Link>
                    </div>
                    <p>{about.text1}</p>
                </section>
                <Separator />
                <section className={styles.indexLeistungen}>
                    <SectionHeading text={leistungen.heading} />
                    <Link scroll={false} href="/leistungen" passHref>
                        <a className="thin">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>{leistungen.linkText1}</span>
                        </a>
                    </Link>
                    <div className={styles.LeistungenItems}>
                        {leistungen.items.map((item) => (
                            <LeistungenItem
                                key={uuid()}
                                heading={item.title}
                                text={item.text}
                                img={item.img}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </section>
                <Separator />
                <section className={styles.indexProjekte}>
                    <SectionHeading text={projekte.heading} />
                    <Link scroll={false} href="/projekte" passHref>
                        <a className="thin">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>{projekte.linkText1}</span>
                        </a>
                    </Link>
                    <div className={styles.indexProjekteItems}>
                        {renderProjects()}
                    </div>
                </section>
                <Separator />
                <section className={styles.indexFaq}>
                    <SectionHeading text={faq.heading} />
                    <div className={styles.indexFaqItems}>{renderFaqs()}</div>
                </section>
                <Separator />
                <section className={styles.indexKontakt}>
                    <SectionHeading text={kontakt.heading} />
                    <div className={styles.indexKontaktInfo}>
                        <p>{kontakt.text1}</p>
                    </div>
                    <div>
                        <a
                            className={styles.kontaktMail}
                            href="mailto:kontakt@fensterblatt.digital"
                        >
                            <KontaktMail text="kontakt@fensterblatt.digital" />
                        </a>
                    </div>
                    <Link scroll={false} href="/kontakt" passHref>
                        <a className="bold">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>{kontakt.linkText1}</span>
                        </a>
                    </Link>
                </section>
            </div>
        </div>
    );
}
