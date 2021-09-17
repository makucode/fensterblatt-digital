import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/navbar/NavbarLinks.module.css";

const NavbarLinks = ({ setMenuOpen }) => {
    const { pathname } = useRouter();
    const [isHovering, setIsHovering] = useState(false);

    const pages = ["projekte", "leistungen", "about", "kontakt"];

    const getLinks = () => {
        return pages.map((page) => (
            <Link key={page} passHref href={"/" + page}>
                <a
                    className={
                        styles.NavbarLink +
                        " " +
                        (pathname.includes(page) && !isHovering
                            ? styles.NavActive
                            : "")
                    }
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setMenuOpen(false)}
                >
                    {page}
                </a>
            </Link>
        ));
    };

    return <div className={styles.NavbarLinks}>{getLinks()}</div>;
};

export default NavbarLinks;
