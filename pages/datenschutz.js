import Head from "next/head";
import styles from "../styles/Datenschutz.module.css";

function Datenschutz() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Datenschutz</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.datenschutzContent}></div>
        </div>
    );
}

export default Datenschutz;
