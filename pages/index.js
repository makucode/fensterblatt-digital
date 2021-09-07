import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
    hero,
    about,
    leistungen,
    projekte,
    faq,
    kontak,
} from "../public/text_content/indexContent";
import LinkBtn from "../components/LinkBtn";

export default function Home() {
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
                        <LinkBtn text={hero.linkText1} isBold />
                    </Link>
                </section>
            </div>
        </div>
    );
}
