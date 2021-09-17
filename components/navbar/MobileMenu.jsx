import React from "react";
import styles from "../../styles/navbar/MobileMenu.module.css";
import NavbarLinks from "./NavbarLinks";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={
                styles.mobileMenu + (menuOpen ? " " + styles.menuOpen : "")
            }
        >
            <NavbarLinks setMenuOpen={setMenuOpen} />
        </div>
    );
};

export default MobileMenu;
