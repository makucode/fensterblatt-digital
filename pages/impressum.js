import Head from "next/head";
import PageHeading from "../components/PageHeading";
import styles from "../styles/pages/Impressum.module.css";

function Impressum() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Impressum</title>
                <meta
                    name="description"
                    content="Impressum von Fensterblatt Digital. Hier finden sie diverse rechtliche Informationen zu unserem Unternehmen."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subPageContent">
                <section className={styles.impressum}>
                    <PageHeading text={"Impressum"} />
                    <div className={styles.impressumContent}>
                        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                        <p>
                            Maximilian Friedrich
                            <br />
                            makucode
                            <br />
                            K&ouml;tnerholzweg 38
                            <br />
                            30451 Hannover
                        </p>

                        <h2>Kontakt</h2>
                        <p>
                            Telefon: 0176 646 335 26
                            <br />
                            E-Mail: maximilian.friedrich@fensterblatt.digital
                        </p>

                        <h2>
                            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                        </h2>
                        <p>
                            Wir sind nicht verpflichtet, an
                            Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>

                        <p>
                            Quelle:{" "}
                            <a href="https://www.e-recht24.de">eRecht24</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Impressum;
