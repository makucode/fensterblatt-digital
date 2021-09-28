import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../../components/svgs/ArrowIcon";
import Tags from "../../components/Tags";
import styles from "../../styles/SingleProjekt.module.css";
import { projekte } from "../../public/text_content/projekte";

function SingleProjektPage(props) {
    const [projekt, setProjekt] = useState(props.projekt);
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Projekte</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subPageContent">
                <section className={styles.projektHeading}>
                    <h1 className="subH1">{projekt.name}</h1>
                    <p>{projekt.text1}</p>
                    <Link scroll={false} href={projekt.href} passHref>
                        <a className="thin">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>Zur Live-Webseite</span>
                        </a>
                    </Link>
                </section>
                <div className={styles.infoContainer}>
                    <section
                        className={
                            styles.projektInfo + " " + styles.projektInfo1
                        }
                    >
                        <h2>{projekt.subHeading1}</h2>
                        <p>{projekt.subText1}</p>
                    </section>
                    <section className={styles.projektInfo}>
                        <h2>{projekt.subHeading2}</h2>
                        <p>{projekt.subText2}</p>
                    </section>
                    <section className={styles.projektTags}>
                        <Tags tags={projekt.tags} />
                    </section>
                    <section className={styles.projektImgs}>
                        <div className={styles.imgContainer}>
                            <Image src={projekt.img} alt={projekt.alt} />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image src={projekt.img} alt={projekt.alt} />
                        </div>
                    </section>
                    <section className={styles.link}>
                        <Link scroll={false} href="/projekte" passHref>
                            <a className="thin">
                                <div className="arrow"></div>

                                <ArrowIcon />
                                <span>Zurück zur Projektübersicht</span>
                            </a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths = () => {
    const paths = [
        { params: { name: "mediation-vonberg" } },
        { params: { name: "meta-objects" } },
    ];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = (context) => {
    const curProjekt = projekte.filter(
        (projekt) => projekt.slug === context.params.name
    );

    return {
        props: {
            projekt: curProjekt[0],
        },
    };
};

export default SingleProjektPage;
