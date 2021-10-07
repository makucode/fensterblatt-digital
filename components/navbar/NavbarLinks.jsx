import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/navbar/NavbarLinks.module.css";

const NavbarLinks = ({ setMenuOpen }) => {
    const { pathname } = useRouter();
    const [isHovering, setIsHovering] = useState(false);

    const pages = ["Projekte", "Leistungen", "About", "Kontakt"];

    const getLinks = () => {
        return pages.map((page) => (
            <Link
                scroll={false}
                key={page}
                passHref
                href={"/" + page.toLowerCase()}
            >
                <a
                    className={
                        styles.NavbarLink +
                        " " +
                        (pathname.includes(page.toLowerCase()) && !isHovering
                            ? styles.NavActive
                            : "")
                    }
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setMenuOpen(false)}
                >
                    {page !== "About" ? page : "Über uns"}
                </a>
            </Link>
        ));
    };

    return <div className={styles.NavbarLinks}>{getLinks()}</div>;
};

export default NavbarLinks;
