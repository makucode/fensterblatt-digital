import Image from "next/image";
import Tags from "../Tags";
import styles from "../../styles/leistungen/LeistungenItem.module.css";
import PageSubHeading from "../PageSubHeading";

function LeistungenItem(props) {
    return (
        <div
            className={
                styles.leistungenItem +
                (props.index % 2 !== 0 ? " " + styles.reverse : "")
            }
        >
            <div className={styles.itemImg}>
                <Image
                    src={props.img}
                    alt={props.alt}
                    width="250px"
                    height="250px"
                />
            </div>
            <div className={styles.itemInfo}>
                <PageSubHeading text={props.heading} size={"3.5rem"} />
                <p>{props.text1}</p>
                <div className={styles.itemTags}>
                    <Tags tags={props.tags} />
                </div>
            </div>
        </div>
    );
}

export default LeistungenItem;
