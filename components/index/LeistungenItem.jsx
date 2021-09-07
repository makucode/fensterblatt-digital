import Image from "next/image";
import styles from "../../styles/index/LeistungenItem.module.css";

function LeistungenItem(props) {
    return (
        <div className={styles.LeistungenItem}>
            <Image
                src={props.img.src}
                alt={props.alt}
                width="162px"
                height="162px"
            />
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default LeistungenItem;
