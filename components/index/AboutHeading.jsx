import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import styles from "../../styles/headings/AboutHeading.module.css";

const AboutHeading = (props) => {
    const heading = useRef();
    const isVisible = useOnScreen(heading);
    const splittedWords = props.text.split(" ");
    const splittedText = splittedWords.map((word) => [...word.split("")]);

    const getWords = () => {
        let counter = 10;
        return splittedText.map((word, idx) => {
            return (
                <div key={idx}>
                    {word.map((char, index) => {
                        counter++;
                        return (
                            <span
                                key={index}
                                style={{
                                    transitionDelay:
                                        " " + (counter / 100).toFixed(3) + "s",
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                    {"\u00A0"}
                </div>
            );
        });
    };

    return (
        <h3
            className={
                styles.aboutHeading +
                " " +
                (isVisible ? styles.aboutHeadingIn : "")
            }
            ref={heading}
        >
            {getWords()}
        </h3>
    );
};

export default AboutHeading;
