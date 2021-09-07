import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import logo from "../public/imgs/logo_schwarz.png";

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Image src={logo} alt="Logo von Fensterblatt Webdesign" />
            <div className={styles.NavbarLinks}>
                <Link passHref href="/projekte">
                    <a>Projekte</a>
                </Link>
                <Link passHref href="/leistungen">
                    <a>Leistungen</a>
                </Link>
                <Link passHref href="/about">
                    <a>Über uns</a>
                </Link>
                <Link passHref href="/kontakt">
                    <a>Kontakt</a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
