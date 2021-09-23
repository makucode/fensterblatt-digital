import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import styles from "../../styles/index/KontaktMail.module.css";

const KontaktMail = (props) => {
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
        <span
            className={
                styles.KontaktMail +
                " " +
                (isVisible ? styles.KontaktMailIn : "")
            }
            ref={heading}
        >
            {getWords()}
        </span>
    );
};

export default KontaktMail;
