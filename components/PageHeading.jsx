import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../styles/headings/PageHeading.module.css";

function PageHeading(props) {
    const heading = useRef();
    const isVisible = useOnScreen(heading);
    const splittedWords = props.text.split(" ");
    const splittedText = splittedWords.map((word) => [...word.split("")]);

    const getWords = () => {
        let counter = 0;
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
        <h1
            className={
                styles.PageHeading +
                " subH1 " +
                (isVisible ? styles.PageHeadingIn : "")
            }
            ref={heading}
        >
            {getWords()}
        </h1>
    );
}

export default PageHeading;
