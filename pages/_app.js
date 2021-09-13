import { AnimatePresence, motion } from "framer-motion";
import useKeepStyles from "../hooks/useKeepStyles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
    const animations = {
        pageInitial: {
            filter: "blur(3px)",
            opacity: 0,
        },
        pageAnimate: {
            filter: "blur(0px)",
            opacity: 1,
        },
        pageExit: {
            filter: "blur(3px)",
            opacity: 0,
        },
    };

    //FIX FOR FLASHING UNSTYLED COMPONENTS ON PAGE CHANGE
    useKeepStyles();

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
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
        </>
    );
}

export default MyApp;
