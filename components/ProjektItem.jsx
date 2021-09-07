import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjektItem.module.css";
import ArrowIcon from "./ArrowIcon";
import Tags from "./Tags";

function ProjektItem(props) {
    return (
        <div
            className={
                styles.ProjektItem +
                " " +
                (props.align === "left" ? styles.alignLeft : styles.alignRight)
            }
        >
            <div className={styles.Content}>
                <h3>{props.heading}</h3>
                <Tags tags={props.tags} />
                <Link href={props.href} passHref>
                    <a className="thin">
                        <ArrowIcon />
                        Projekt ansehen
                    </a>
                </Link>
            </div>
            <div className={styles.Img}>
                <Image src={props.img} alt={props.alt} />
            </div>
        </div>
    );
}

export default ProjektItem;
