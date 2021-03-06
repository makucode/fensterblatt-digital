import Image from "next/image";
import styles from "../../styles/index/LeistungenItem.module.css";

function LeistungenItem(props) {
    return (
        <div className={styles.LeistungenItem}>
            <div className={styles.leistungenImg}>
                <Image
                    src={props.img.src}
                    alt={props.alt}
                    width="180px"
                    height="180px"
                    priority
                />
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default LeistungenItem;
