import React, { useRef, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Scroller.module.css";

const Scroller = ({ children, isMobile }) => {
    const { width, height } = useWindowDimensions();

    const app = useRef();
    const scrollContainer = useRef();

    useEffect(() => {
        if (!isMobile) {
            document.body.style.height =
                scrollContainer.current.getBoundingClientRect().height + "px";
            setTimeout(() => {
                document.body.style.height =
                    scrollContainer.current.getBoundingClientRect().height +
                    "px";
            }, 500);
        }
    });

    useEffect(() => {
        if (!isMobile) {
            document.body.style.height =
                scrollContainer.current.getBoundingClientRect().height + "px";
            setTimeout(() => {
                document.body.style.height =
                    scrollContainer.current.getBoundingClientRect().height +
                    "px";
            }, 500);
        }
    }, [width, height, isMobile]);

    useEffect(() => {
        if (!isMobile) {
            const skewConfigs = {
                ease: 0.1,
                current: 0,
                previous: 0,
                rounded: 0,
            };

            const skewScrolling = () => {
                skewConfigs.current = window.scrollY;
                skewConfigs.previous +=
                    (skewConfigs.current - skewConfigs.previous) *
                    skewConfigs.ease;
                skewConfigs.rounded =
                    Math.round(skewConfigs.previous * 100) / 100;

                scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`;

                requestAnimationFrame(() => skewScrolling());
            };

            setTimeout(() => {
                requestAnimationFrame(() => skewScrolling());
            }, 500);
        }
    }, [width, children, isMobile]);

    return (
        <div ref={app} className={styles.scroller}>
            <div ref={scrollContainer}>{children}</div>
        </div>
    );
};

export default Scroller;
