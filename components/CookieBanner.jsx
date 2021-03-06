import React from "react";
import Link from "next/link";
import cookieCutter from "cookie-cutter";
import styles from "../styles/CookieBanner.module.css";

const CookieBanner = ({ bannerIn, setBannerIn }) => {
    const handleCookieConsent = () => {
        setBannerIn(false);
        cookieCutter.set("consent", "true", {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            sameSite: "strict",
            secure: true,
        });
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
                <span className={styles.bannerLeftLink}>
                    <span>
                        Weitere Informationen finden Sie in unserer
                        {"\xa0"}
                        <Link href="/datenschutz" passHref>
                            <a>Datenschutzerkl√§rung.</a>
                        </Link>
                    </span>
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
