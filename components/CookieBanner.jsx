import React from "react";
import styles from "../styles/CookieBanner.module.css";

const CookieBanner = () => {
    return (
        <div className={styles.CookieBanner}>
            <div className={styles.bannerLeft}>
                Diese Webseite verwendet Cookies und Google Analytics. Weitere
                Informationen finden Sie in unserer Datenschutzerklärung.
            </div>
            <div className={styles.bannerRight}></div>
        </div>
    );
};

export default CookieBanner;
