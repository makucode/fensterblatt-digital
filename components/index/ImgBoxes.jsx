import React, { useState, useEffect } from "react";
import Image from "next/image";
import boxImage1 from "../../public/imgs/box1.png";
import boxImage2 from "../../public/imgs/box2.png";
import boxImage3 from "../../public/imgs/box3.png";
import styles from "../../styles/index/ImgBoxes.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ImgBoxes = () => {
    const [offsetY, setOffsetY] = useState(0);
    const { width, height } = useWindowDimensions();

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
                        offsetY ? offsetY * 0.4 + 80 : 80
                    }px)`,
                }}
            >
                <Image src={boxImage3} alt="Foto von einer Pflanze" />
            </div>
            <div
                style={{
                    transform: `translateY(${offsetY * 0.3}px)`,
                }}
            >
                <Image src={boxImage2} alt="Foto von einer Pflanze" />
            </div>
            <div
                style={{
                    transform: `translateY(${
                        offsetY ? offsetY * 0.5 + 160 : 160
                    }px)`,
                }}
            >
                <Image src={boxImage1} alt="Foto von einer Pflanze" />
            </div>
        </div>
    );
};

export default ImgBoxes;
