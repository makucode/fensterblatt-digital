import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../../styles/index/SectionHeading.module.css";

function SectionHeading(props) {
    const heading = useRef();
    const isVisible = useOnScreen(heading);
    const splittedText = props.text.split("");

    return (
        <h2
            className={
                styles.SectionHeading +
                " " +
                (isVisible ? styles.SectionHeadingIn : "")
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
        </h2>
    );
}

export default SectionHeading;
