import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollDirection } from "react-use-scroll-direction";
import styles from "../styles/Navbar.module.css";
import logo from "../public/imgs/logo_schwarz.png";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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

    const { pathname } = useRouter();

    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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
                    <Logo />
                </a>
            </Link>
            <div className={styles.NavbarLinks}>
                <Link passHref href="/projekte">
                    <a
                        className={
                            styles.NavbarLink +
                            " " +
                            (pathname.includes("projekte")
                                ? styles.NavActive
                                : "")
                        }
                    >
                        Projekte
                    </a>
                </Link>
                <Link passHref href="/leistungen">
                    <a
                        className={
                            styles.NavbarLink +
                            " " +
                            (pathname === "/leistungen" ? styles.NavActive : "")
                        }
                    >
                        Leistungen
                    </a>
                </Link>
                <Link passHref href="/about">
                    <a
                        className={
                            styles.NavbarLink +
                            " " +
                            (pathname === "/about" ? styles.NavActive : "")
                        }
                    >
                        Über uns
                    </a>
                </Link>
                <Link passHref href="/kontakt">
                    <a
                        className={
                            styles.NavbarLink +
                            " " +
                            (pathname === "/kontakt" ? styles.NavActive : "")
                        }
                    >
                        Kontakt
                    </a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
