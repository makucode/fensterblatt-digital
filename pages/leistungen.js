import Head from "next/head";
import { v4 as uuid } from "uuid";
import styles from "../styles/pages/Leistungen.module.css";
import { heading, items } from "../public/text_content/leistungenContent";
import LeistungenItem from "../components/leistungen/LeistungenItem";
import PageHeading from "../components/PageHeading";

function Leistungen() {
    const renderLeistungenItems = () => {
        return items.map((item, idx) => (
            <LeistungenItem key={uuid()} index={idx} {...item} />
        ));
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Leistungen</title>
                <meta
                    name="description"
                    content="Wir bieten eine weite Bandbreite von Leistungen, um Sie so umfassend wie möglich bei der Entwicklung Ihrer digitalen Präsenz unterstützen zu können."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subPageContent">
                <section className={styles.leistungenHeading}>
                    <PageHeading text={heading.heading} />
                    <p>{heading.text1}</p>
                </section>
                <section className={styles.leistungenItems}>
                    {renderLeistungenItems()}
                </section>
            </div>
        </div>
    );
}

export default Leistungen;
