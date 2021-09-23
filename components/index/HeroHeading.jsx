import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../../styles/headings/HeroHeading.module.css";

function HeroHeading(props) {
    const heading = useRef();
    const isVisible = useOnScreen(heading);
    const splittedText = props.text.split("");

    return (
        <div className={styles.HeroHeadingContainer}>
            <h1
                className={
                    styles.HeroHeading +
                    " " +
                    (isVisible ? styles.HeroHeadingIn : "")
                }
                ref={heading}
            >
                {splittedText.map((char, idx) =>
                    char === " " ? (
                        <span key={idx}>{"\u00A0"}</span>
                    ) : (
                        <span
                            className={styles.Heading}
                            key={idx}
                            style={{
                                transitionDelay:
                                    " " + (idx / 100 + 0.01).toFixed(2) + "s",
                            }}
                        >
                            {char}
                        </span>
                    )
                )}
            </h1>
        </div>
    );
}

export default HeroHeading;
