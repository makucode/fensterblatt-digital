import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <div className="page-wrapper">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
