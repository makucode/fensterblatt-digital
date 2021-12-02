import Head from "next/head";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import styles from "../styles/pages/About.module.css";
import {
    about,
    umweltschutz,
    tracker,
    img,
} from "../public/text_content/aboutContent";
import Tracker from "../components/about/Tracker";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";

function About() {
    const renderTrackers = () => {
        return tracker.map((tracker) => <Tracker key={uuid()} {...tracker} />);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Über uns</title>
                <meta
                    name="description"
                    content="Wir wollen das Internet um uns herum schöner und einfacher zu gestalten. Zeitgemäßes Webdesign und aktuellste Technik sind unsere Spezialität."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"subPageContent"}>
                <section
                    className={styles.aboutSection + " " + styles.aboutSection1}
                >
                    <div className={styles.aboutInfo}>
                        <PageHeading text={about.heading} />
                        <p>
                            {about.text1}
                            <br />
                            <br />
                            {about.text2}
                        </p>
                    </div>
                    <div className={styles.aboutInfoImg}>
                        <Image
                            src={img.img}
                            alt={img.alt}
                            loading="eager"
                            layout="responsive"
                        />
                    </div>
                </section>
                <section className={styles.aboutSection}>
                    <div className={styles.aboutUmweltschutz}>
                        <PageSubHeading
                            text={umweltschutz.heading}
                            size="3.5rem"
                        />
                        <p>{umweltschutz.text1}</p>
                        <p>{umweltschutz.text2}</p>
                    </div>
                    <div className={styles.aboutTracker}>
                        {renderTrackers()}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
