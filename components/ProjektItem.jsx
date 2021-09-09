import Image from "next/image";
import Link from "next/link";
import Tilt from "react-tilt";
import styles from "../styles/ProjektItem.module.css";
import ArrowIcon from "./ArrowIcon";
import Tags from "./Tags";

function ProjektItem(props) {
    return (
        <div
            className={
                styles.ProjektItem +
                " " +
                (props.index % 2 === 0 ? styles.alignLeft : styles.alignRight)
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
            <Tilt options={{ max: 7, scale: 1 }}>
                <div className={styles.imgContainer}>
                    <Image src={props.img} alt={props.alt} />
                </div>
            </Tilt>
        </div>
    );
}

export default ProjektItem;
