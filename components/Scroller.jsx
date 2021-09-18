import React, { useRef, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Scroller.module.css";

const Scroller = ({ children }) => {
    const { height, width } = useWindowDimensions();

    const app = useRef();
    const scrollContainer = useRef();

    useEffect(() => {
        setTimeout(() => {
            document.body.style.height =
                scrollContainer.current.getBoundingClientRect().height + "px";
        }, 500);
    });

    useEffect(() => {
        const skewConfigs = {
            ease: 0.1,
            current: 0,
            previous: 0,
            rounded: 0,
        };

        const skewScrolling = () => {
            skewConfigs.current = window.scrollY;
            skewConfigs.previous +=
                (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
            skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

            const difference = skewConfigs.current - skewConfigs.rounded;
            const acceleration = difference / width;
            const velocity = +acceleration;
            const skew = velocity * 7.5;

            scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`; //FOR SKEW skewY(${skew}deg)

            requestAnimationFrame(() => skewScrolling());
        };

        requestAnimationFrame(() => skewScrolling());
    }, [width]);

    return (
        <div ref={app} className={styles.scroller}>
            <div ref={scrollContainer}>{children}</div>
        </div>
    );
};

export default Scroller;
