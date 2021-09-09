import { useRouter } from "next/router";
import styles from "../../styles/Seperator.module.css";

function SingleProjektPage(props) {
    const router = useRouter();
    const projekt = router.query.name;

    return (
        <div>
            <h1>{projekt}</h1>
        </div>
    );
}

export default SingleProjektPage;
