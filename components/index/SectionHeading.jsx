import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../../styles/index/SectionHeading.module.css";

function SectionHeading(props) {
    const heading = useRef();
    const isVisible = useOnScreen(heading);

    return (
        <h2
            className={
                styles.SectionHeading +
                " " +
                (isVisible ? styles.SectionHeadingIn : "")
            }
            ref={heading}
        >
            {props.text}
        </h2>
    );
}

export default SectionHeading;
