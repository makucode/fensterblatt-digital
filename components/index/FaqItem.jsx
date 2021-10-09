import { useEffect, useRef, useState } from "react";
import styles from "../../styles/index/FaqItem.module.css";

function FaqItem(props) {
    const [isOpen, setIsOpen] = useState(false);
    const collapsible = useRef(null);

    const handleFaqClick = (e) => {
        const item = collapsible.current;
        if (isOpen) {
            item.style.height = null;
        } else {
            item.style.height = item.scrollHeight + "px";
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideFaqs = () => {
            if (document.body.scrollHeight - window.innerHeight === scrollY) {
                const item = collapsible.current;
                if (item && item.style.height !== null)
                    item.style.height = null;
                setIsOpen(false);
            }
        };

        document.addEventListener("scroll", hideFaqs);
    });

    return (
        <div
            onClick={handleFaqClick}
            className={styles.FaqItem + (isOpen ? " " + styles.Open : "")}
        >
            <div className={styles.btnContainer}>
                <div className={styles.btn}></div>
            </div>
            <div className={styles.FaqItemContent}>
                <h3>{props.heading}</h3>
                <div ref={collapsible} className={styles.Collapsible}>
                    <p>{props.text1}</p>
                </div>
            </div>
        </div>
    );
}

export default FaqItem;
