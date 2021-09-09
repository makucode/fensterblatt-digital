import Image from "next/image";
import Link from "next/link";
import { useScrollDirection } from "react-use-scroll-direction";
import styles from "../styles/Navbar.module.css";
import logo from "../public/imgs/logo_schwarz.png";
import { useEffect, useState } from "react";

function Navbar() {
    const {
        isScrolling,
        isScrollingX,
        isScrollingY,
        isScrollingUp,
        isScrollingDown,
        isScrollingLeft,
        isScrollingRight,
        scrollDirection,
    } = useScrollDirection();

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        if (scrollDirection === "DOWN") {
            setShowNav(false);
        } else if (scrollDirection === "UP") {
            setShowNav(true);
        }
    }, [scrollDirection]);

    return (
        <nav className={styles.Navbar + (!showNav ? " " + styles.Hidden : "")}>
            <Link href="/" passHref>
                <a>
                    <Image src={logo} alt="Logo von Fensterblatt Webdesign" />
                </a>
            </Link>

            <div className={styles.NavbarLinks}>
                <Link passHref href="/projekte">
                    <a className={styles.NavbarLink}>Projekte</a>
                </Link>
                <Link passHref href="/leistungen">
                    <a className={styles.NavbarLink}>Leistungen</a>
                </Link>
                <Link passHref href="/about">
                    <a className={styles.NavbarLink}>Über uns</a>
                </Link>
                <Link passHref href="/kontakt">
                    <a className={styles.NavbarLink}>Kontakt</a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
