import Head from "next/head";
import { v4 as uuid } from "uuid";
import styles from "../styles/pages/Projekte.module.css";
import ProjektItem from "../components/ProjektItem";
import { heading, projekte } from "../public/text_content/projekteContent";
import PageHeading from "../components/PageHeading";

function Projekte() {
    const renderProjekte = () => {
        return projekte.map((projekt, idx) => (
            <ProjektItem key={uuid()} index={idx} {...projekt} />
        ));
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Projekte</title>
                <meta
                    name="description"
                    content="Hier finden sie eine Übersicht unserer abgeschlossenen Projekten."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subPageContent">
                <section className={styles.projekteHeading}>
                    <PageHeading text={heading.heading} />
                    <p>{heading.text1}</p>
                </section>
                <section className={styles.projekteProjekte}>
                    {renderProjekte()}
                </section>
            </div>
        </div>
    );
}

export default Projekte;
