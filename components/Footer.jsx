import Image from "next/image";
import Link from "next/link";
import logo from "../public/imgs/logo_schwarz.png";
import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterLeft}>
                <p>© 2021 Copyright Fensterblatt</p>
                <Link href="/datenschutz" passHref>
                    <a>Datenschutz</a>
                </Link>
                <Link href="/impressum" passHref>
                    <a>Impressum</a>
                </Link>
            </div>
            <div className={styles.FooterRight}>
                <Link href="/" passHref>
                    <a>
                        <Image
                            src={logo}
                            alt="Logo von Fensterblatt Webdesign"
                        />
                    </a>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
