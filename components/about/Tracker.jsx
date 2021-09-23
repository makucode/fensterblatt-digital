import Link from "next/link";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import ArrowIcon from "../svgs/ArrowIcon";
import styles from "../../styles/about/Tracker.module.css";

function Tracker(props) {
    const [tracker, setTracker] = useState(0);
    const trackerDisplay = useRef();
    const isVisible = useOnScreen(trackerDisplay);

    return (
        <div className={styles.Tracker}>
            <h3 ref={trackerDisplay}>
                {isVisible && <CountUp end={props.tracker} duration={1} />}{" "}
                {props.heading}
            </h3>
            <p>{props.text1}</p>
            <Link href={props.link1} passHref>
                <a className="thin">
                    <div className="arrow"></div>
                    <ArrowIcon />
                    <span>{props.linkText1}</span>
                </a>
            </Link>
        </div>
    );
}

export default Tracker;
