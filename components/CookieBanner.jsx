import React from "react";
import styles from "../styles/CookieBanner.module.css";

const CookieBanner = ({ bannerIn, setBannerIn }) => {
    const handleCookieConsent = () => {
        setBannerIn(false);
    };

    return (
        <div
            className={
                styles.CookieBanner + (bannerIn ? "" : " " + styles.bannerOut)
            }
        >
            <div className={styles.bannerLeft}>
                <span>
                    Diese Webseite verwendet Cookies und Google Analytics.
                    {"\xa0"}
                </span>

                <span>
                    Weitere Informationen finden Sie in unserer
                    Datenschutzerklärung.
                </span>
            </div>
            <div className={styles.bannerRight}>
                <span
                    className={styles.bannerButton}
                    onClick={handleCookieConsent}
                >
                    Ok
                </span>
                <span
                    className={styles.bannerButton}
                    onClick={() => setBannerIn(false)}
                >
                    Nein
                </span>
            </div>
        </div>
    );
};

export default CookieBanner;
