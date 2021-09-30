import Link from "next/link";
import { useScrollDirection } from "react-use-scroll-direction";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./navbar/NavbarLinks";
import BurgerBtn from "./navbar/BurgerBtn";

function Navbar({ isMobile, setMenuOpen }) {
    const { scrollDirection } = useScrollDirection();

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        if (scrollDirection === "DOWN" && window.pageYOffset > 0) {
            setShowNav(false);
        } else if (scrollDirection === "UP" || window.pageYOffset <= 0) {
            setShowNav(true);
        }
    }, [scrollDirection]);

    return (
        <nav className={styles.Navbar + (!showNav ? " " + styles.Hidden : "")}>
            <Link scroll={false} href="/" passHref>
                <a>
                    <Logo />
                </a>
            </Link>
            {!isMobile ? (
                <NavbarLinks setMenuOpen={setMenuOpen} />
            ) : (
                <BurgerBtn menuOpen={false} setMenuOpen={setMenuOpen} />
            )}
        </nav>
    );
}

export default Navbar;
