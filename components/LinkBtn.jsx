import styles from "../styles/LinkBtn.module.css";

function LinkBtn(props) {
    return (
        <a className={props.isBold ? styles.bold : styles.thin}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.933"
                height="19.614"
                viewBox="0 0 28.933 19.614"
            >
                <g
                    id="Gruppe_12"
                    data-name="Gruppe 12"
                    transform="translate(-449.5 -1358.693)"
                >
                    <line
                        id="Linie_1"
                        data-name="Linie 1"
                        x2="27.519"
                        transform="translate(449.5 1368.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                    />
                    <g
                        id="Gruppe_1"
                        data-name="Gruppe 1"
                        transform="translate(467.919 1359.4)"
                    >
                        <path
                            id="Pfad_15"
                            data-name="Pfad 15"
                            d="M657.859,1354.288l9.1,9.1-9.1,9.1"
                            transform="translate(-657.859 -1354.288)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth={2}
                        />
                    </g>
                </g>
            </svg>
            {props.text}
        </a>
    );
}

export default LinkBtn;
