import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useKeepStyles from "../hooks/useKeepStyles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import useWindowDimensions from "../hooks/useWindowDimensions.js";
import MobileMenu from "../components/navbar/MobileMenu.jsx";
import BurgerBtn from "../components/navbar/BurgerBtn.jsx";
import Scroller from "../components/Scroller.jsx";

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
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (height / width >= 1 || width <= 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [height, width]);

    //FIX FOR FLASHING UNSTYLED COMPONENTS ON PAGE CHANGE
    useKeepStyles();

    return (
        <>
            <Navbar
                isMobile={isMobile}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <Scroller>
                {isMobile && (
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                )}
                {isMobile && (
                    <BurgerBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                )}
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
                    </motion.div>
                </AnimatePresence>
                <Footer />
            </Scroller>
        </>
    );
}

export default MyApp;
