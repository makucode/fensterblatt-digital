import React from "react";
import styles from "../../styles/navbar/MobileMenu.module.css";
import BurgerBtn from "./BurgerBtn";
import NavbarLinks from "./NavbarLinks";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={
                styles.mobileMenu + (menuOpen ? " " + styles.menuOpen : "")
            }
        >
            <div className={styles.mobileMenuLinks}>
                <NavbarLinks setMenuOpen={setMenuOpen} />
            </div>
            <BurgerBtn menuOpen={true} setMenuOpen={setMenuOpen} />
        </div>
    );
};

export default MobileMenu;
