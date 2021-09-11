import Head from "next/head";
import styles from "../styles/Impressum.module.css";

function Impressum() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Impressum</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.impressumContent}></div>
        </div>
    );
}

export default Impressum;