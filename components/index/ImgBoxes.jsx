import React, { useState, useEffect } from "react";
import Image from "next/image";
import boxImage1 from "../../public/imgs/hero/1a.png";
import boxImage2 from "../../public/imgs/hero/1b.png";
import boxImage3 from "../../public/imgs/hero/1c.png";
import boxImage4 from "../../public/imgs/hero/2a.png";
import boxImage5 from "../../public/imgs/hero/2b.png";
import boxImage6 from "../../public/imgs/hero/2c.png";
import boxImage7 from "../../public/imgs/hero/3a.png";
import boxImage8 from "../../public/imgs/hero/3b.png";
import boxImage9 from "../../public/imgs/hero/3c.png";
import boxImage10 from "../../public/imgs/hero/4a.png";
import boxImage11 from "../../public/imgs/hero/4b.png";
import boxImage12 from "../../public/imgs/hero/4c.png";
import styles from "../../styles/index/ImgBoxes.module.css";

const ImgBoxes = () => {
    const imgs = [
        [boxImage1, boxImage2, boxImage3],
        [boxImage4, boxImage5, boxImage6],
        [boxImage7, boxImage8, boxImage9],
        [boxImage10, boxImage11, boxImage12],
    ];

    const boxImgs = imgs[Math.floor(Math.random() * imgs.length)];

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(Math.floor(-Math.abs(window.pageYOffset)));
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);

    return (
        <div className={styles.indexHeroBoxes}>
            <div
                style={{
                    transform: `translateY(${
                        offsetY ? offsetY * 0.4 + 140 : 140
                    }px)`,
                }}
            >
                <Image src={boxImgs[0]} alt="Foto von einer Pflanze" priority />
            </div>
            <div
                style={{
                    transform: `translateY(${offsetY * 0.3}px)`,
                }}
            >
                <Image src={boxImgs[1]} alt="Foto von einer Pflanze" priority />
            </div>
            <div
                style={{
                    transform: `translateY(${
                        offsetY ? offsetY * 0.5 + 280 : 280
                    }px)`,
                }}
            >
                <Image src={boxImgs[2]} alt="Foto von einer Pflanze" priority />
            </div>
        </div>
    );
};

export default ImgBoxes;
