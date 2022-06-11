import "../styles/index.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/Header/MobileHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <MobileHeader />
      <Footer />
    </>
  );
}

export default MyApp;
