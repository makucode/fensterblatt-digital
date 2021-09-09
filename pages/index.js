import Head from "next/head";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "../styles/Home.module.css";
import {
    hero,
    about,
    leistungen,
    projekte,
    faq,
    kontakt,
} from "../public/text_content/indexContent";
import Separator from "../components/Separator";
import LeistungenItem from "../components/index/LeistungenItem";
import ProjektItem from "../components/ProjektItem";
import FaqItem from "../components/index/FaqItem";
import ArrowIcon from "../components/ArrowIcon";
import SectionHeading from "../components/index/SectionHeading";

export default function Home() {
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
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.indexContent}>
                <section className={styles.indexHero}>
                    <h1 className={styles.headingHero}>{hero.heading}</h1>
                    <p className={styles.headingHeroSub}>{hero.text1}</p>
                    <Link href="/kontakt" passHref>
                        <a className="bold">
                            <ArrowIcon />
                            {hero.linkText1}
                        </a>
                    </Link>
                </section>
                <section className={styles.indexAbout}>
                    <div className={styles.indexAboutLeft}>
                        <h3>{about.heading}</h3>
                        <Link href="/about" passHref>
                            <a className="thin">
                                <ArrowIcon />
                                {about.linkText1}
                            </a>
                        </Link>
                    </div>
                    <p>{about.text1}</p>
                </section>
                <Separator />
                <section className={styles.indexLeistungen}>
                    <SectionHeading text={leistungen.heading} />
                    <Link href="/leistungen" passHref>
                        <a className="thin">
                            <ArrowIcon />
                            {leistungen.linkText1}
                        </a>
                    </Link>
                    <div className={styles.LeistungenItems}>
                        <LeistungenItem
                            heading={leistungen.subHeading1}
                            text={leistungen.text1}
                            img={leistungen.img1}
                            alt={leistungen.alt1}
                        />
                        <LeistungenItem
                            heading={leistungen.subHeading2}
                            text={leistungen.text2}
                            img={leistungen.img1}
                            alt={leistungen.alt1}
                        />
                        <LeistungenItem
                            heading={leistungen.subHeading3}
                            text={leistungen.text3}
                            img={leistungen.img1}
                            alt={leistungen.alt1}
                        />
                    </div>
                </section>
                <Separator />
                <section className={styles.indexProjekte}>
                    <SectionHeading text={projekte.heading} />
                    <Link href="/projekte" passHref>
                        <a className="thin">
                            <ArrowIcon />
                            {projekte.linkText1}
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
                    <SectionHeading text={kontakt.subHeading1} />
                    <div>
                        <a
                            className={styles.kontaktMail}
                            href="mailto:kontakt@fensterblatt.digital"
                        >
                            kontakt@fensterblatt.digital
                        </a>
                    </div>
                    <Link href="/kontakt" passHref>
                        <a className="bold">
                            <ArrowIcon />
                            {kontakt.linkText1}
                        </a>
                    </Link>
                </section>
            </div>
        </div>
    );
}
