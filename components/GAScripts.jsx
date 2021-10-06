import React from "react";
import Script from "next/script";

const GAScripts = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={
                    "https://googletagmanager.com/gtag/js?id=" + "G-D3N0LTZ4QF"
                }
            />
            <Script id="GA" strategy="lazyOnload">
                {`
        window.dataLayer = window.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag("js", new Date())

        gtag("config", "G-D3N0LTZ4QF")
    `}
            </Script>
        </>
    );
};

export default GAScripts;
