import styles from "../../styles/navbar/BurgerBtn.module.css";

import React from "react";

const BurgerBtn = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            onClick={() => setMenuOpen(!menuOpen)}
            className={
                styles.burgerContainer +
                " " +
                (menuOpen ? styles.burgerOpen : "")
            }
        >
            <div className={styles.burgerBtn}></div>
        </div>
    );
};

export default BurgerBtn;
