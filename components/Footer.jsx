import Image from "next/image";
import Link from "next/link";
import logo from "../public/imgs/logo_schwarz.png";
import styles from "../styles/Footer.module.css";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterLeft}>
                <Link scroll={false} href="/datenschutz" passHref>
                    <a>Datenschutz</a>
                </Link>
                <Link scroll={false} href="/impressum" passHref>
                    <a>Impressum</a>
                </Link>
            </div>
            <div className={styles.FooterRight}>
                <Link scroll={false} href="/" passHref>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
