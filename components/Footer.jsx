import Link from "next/link";
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
            <div
                className={styles.FooterRight}
                onClick={() => window.scrollTo(0, 0)}
            >
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;
