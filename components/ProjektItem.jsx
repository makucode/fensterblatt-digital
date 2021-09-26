import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjektItem.module.css";
import ProjektItemHeading from "./ProjektItemHeading";
import ArrowIcon from "./svgs/ArrowIcon";
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
                <ProjektItemHeading text={props.heading} />
                <Tags tags={props.tags} />
                <Link scroll={false} href={props.href} passHref>
                    <a className="thin">
                        <div className="arrow"></div>
                        <ArrowIcon />
                        <span>Projekt ansehen</span>
                    </a>
                </Link>
            </div>
            <Link scroll={false} href={props.href} passHref>
                <div className={styles.imgContainer}>
                    <Image src={props.img} alt={props.alt} />
                </div>
            </Link>
        </div>
    );
}

export default ProjektItem;
