import React, { useState, useEffect } from "react";
import Image from "next/image";
import boxImage from "../../public/imgs/hero.png";
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
                    transform: `translateY(${offsetY * 0.6}px) scale(${
                        1 - Math.abs(offsetY / height)
                    })`,
                    opacity: 1 - Math.abs(offsetY / (height / 2)),
                    filter: `blur(${Math.abs(offsetY) / 5}px)`,
                }}
            >
                <Image src={boxImage} alt="Foto von einer Pflanze" />
            </div>
            <div
                style={{
                    transform: `translateY(${
                        offsetY ? offsetY * 1 - 30 : -30
                    }px) scale(${
                        offsetY ? 1 - Math.abs(offsetY / height) : 1
                    })`,
                    opacity: 1 - Math.abs(offsetY / (height / 2)),
                    filter: `blur(${Math.abs(offsetY) / 5}px)`,
                }}
            >
                <Image src={boxImage} alt="Foto von einer Pflanze" />
            </div>
        </div>
    );
};

export default ImgBoxes;
