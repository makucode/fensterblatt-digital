import { v4 as uuid } from "uuid";
import styles from "../styles/Tags.module.css";

function Tags(props) {
    const renderTags = () => {
        return props.tags.map((tag) => <li key={uuid()}>{tag}</li>);
    };

    return <ul className={styles.Tags}>{renderTags()}</ul>;
}

export default Tags;
