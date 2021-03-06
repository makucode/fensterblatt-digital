import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import ArrowIcon from "../../components/svgs/ArrowIcon";
import Tags from "../../components/Tags";
import styles from "../../styles/pages/SingleProjekt.module.css";
import { projekte } from "../../public/text_content/projekte";

function SingleProjektPage({ projekt }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Projekte</title>
                <meta
                    name="description"
                    content={
                        "Informationen zu unserem Projekt " +
                        projekt.name +
                        ". Hier können sie sich ein genauer Bild von unserer Arbeitsweise machen."
                    }
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
                        {projekt.subText2p2 && (
                            <>
                                <p style={{ marginTop: "1vh" }}>
                                    {projekt.subText2p2}
                                </p>
                            </>
                        )}
                    </section>
                    <section className={styles.projektTags}>
                        <Tags tags={projekt.tags} />
                    </section>
                    <section className={styles.projektImgs}>
                        {projekt.imgs &&
                            projekt.imgs.map((img) => (
                                <div
                                    key={uuid()}
                                    className={styles.imgContainer}
                                >
                                    <Image
                                        src={img.img}
                                        alt={img.alt}
                                        width="1900px"
                                        height="936px"
                                        loading="eager"
                                        layout="responsive"
                                    />
                                </div>
                            ))}
                    </section>
                    <section
                        className={
                            styles.projektInfo + " " + styles.projektInfo3
                        }
                    >
                        <h3>{projekt.subHeading3}</h3>
                        <p>{projekt.subText3}</p>
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
