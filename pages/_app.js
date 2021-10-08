import { useState, useEffect } from "react";
import Head from "next/head";
import cookieCutter from "cookie-cutter";
import { AnimatePresence, motion } from "framer-motion";
import useKeepStyles from "../hooks/useKeepStyles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import useWindowDimensions from "../hooks/useWindowDimensions.js";
import MobileMenu from "../components/navbar/MobileMenu.jsx";
import Scroller from "../components/Scroller.jsx";
import CookieBanner from "../components/CookieBanner";
import GAScripts from "../components/GAScripts";

function MyApp({ Component, pageProps, router }) {
    const animations = {
        pageInitial: {
            filter: "blur(3px)",
            opacity: 0,
            scale: 0.995,
        },
        pageAnimate: {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
        },
        pageExit: {
            filter: "blur(3px)",
            opacity: 0,
        },
    };

    const { height, width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(true);
    const [isConsent, setIsConsent] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [bannerIn, setBannerIn] = useState(false);

    useEffect(() => {
        if (height / width >= 1 || width <= 1280) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [height, width]);

    useEffect(() => {
        if (!cookieCutter.get("consent")) {
            setBannerIn(true);
        } else {
            setIsConsent(true);
        }
    }, []);

    //FIX FOR FLASHING UNSTYLED COMPONENTS ON PAGE CHANGE
    useKeepStyles();

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            {isConsent && <GAScripts />}
            <Navbar isMobile={isMobile} setMenuOpen={setMenuOpen} />
            <CookieBanner bannerIn={bannerIn} setBannerIn={setBannerIn} />
            {isMobile && (
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            )}
            <Scroller isMobile={isMobile}>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div
                        key={router.route}
                        transition={{ duration: 0.5 }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        <div className="page-wrapper">
                            <Component {...pageProps} />
                        </div>
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </Scroller>
        </>
    );
}

export default MyApp;
