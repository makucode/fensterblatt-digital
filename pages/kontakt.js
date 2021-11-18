import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/pages/Kontakt.module.css";
import { info, form, link } from "../public/text_content/kontaktContent";
import ArrowIcon from "../components/svgs/ArrowIcon";
import PageHeading from "../components/PageHeading";
import MailIcon from "../components/svgs/MailIcon";
import TelIcon from "../components/svgs/TelIcon";
import XingIcon from "../components/svgs/XingIcon";

function KontaktPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isPopup, setIsPopup] = useState(false);

    const popUp = () => {
        setIsPopup(true);
        setTimeout(() => {
            setIsPopup(false);
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(
            "/api/mail",
            { name, email, msg },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setName("");
        setEmail("");
        setMsg("");
        popUp();
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Fensterblatt - Kontakt</title>
                <meta
                    name="description"
                    content="Schreiben sie uns! Helfen Sie uns, indem Sie Ihr Projekt möglichst genau beschreiben und uns gerne vorab ihr grobes Budget und Zeitfenster mitteilen."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subPageContent">
                <section className={styles.kontakt}>
                    <div className={styles.kontaktInfo}>
                        <PageHeading text={info.heading} />
                        <p>{info.text1}</p>
                        <div className={styles.kontaktInfoItems}>
                            <span>
                                <a href="mailto:kontakt@fensterblatt.digital">
                                    <MailIcon />
                                    kontakt@fensterblatt.digital
                                </a>
                            </span>
                            <span>
                                <a href="mailto:kontakt@fensterblatt.digital">
                                    <TelIcon />
                                    0511 444 530 5
                                </a>
                            </span>
                            <span>
                                <a href="https://xing.com/">
                                    <XingIcon />
                                    Xing
                                </a>
                            </span>
                        </div>
                    </div>
                    <form
                        className={styles.kontaktForm}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="name">{form.labelName}</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder={form.placeholderName}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email">{form.labelMail} </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={form.placeholderMail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="msg">{form.labelMsg}</label>
                        <textarea
                            id="msg"
                            name="msg"
                            type="msg"
                            rows="12"
                            placeholder={form.placeholderMsg}
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        ></textarea>
                        <button className="bold" type="submit">
                            <div className="arrow"></div>
                            <ArrowIcon />
                            <span>{link.linkText1}</span>
                            <div
                                className={
                                    styles.submitPopup +
                                    (isPopup ? " " + styles.submitPopupIn : "")
                                }
                            >
                                Erfolgreich
                                <br />
                                abgeschickt!
                            </div>
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default KontaktPage;
