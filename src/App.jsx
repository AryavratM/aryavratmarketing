import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img src="/logo.png" style={{ width: "25%" }} />
        <img src="/logoText.png" style={{ width: "25%" }} />
      </div>
      <p style={{ fontFamily: "Poppins", color: "white" }}>
        Goa's No.1
        <span
          style={{ color: "#ad2a30", fontWeight: 800, fontFamily: "Poppins" }}>
          {" "}
          Premium{" "}
        </span>
        Out-of-Home (ooh) Advertising Company
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins",
          fontWeight: 600,
        }}>
        <span className="mainTitle">DESIGNING A WEBSITE AS EYE-CATCHING</span>
        <span className="mainTitle">AS OUR BOARDS</span>
        <span className="mainTitle">STAY TUNED!</span>
      </div>

      <div className="linksContainer">
        <div className="links">
          <IoMdMail color="#ad2a30" size={30} />
          <a
            className="alink"
            style={{ color: "white", fontFamily: "Nunito" }}
            href="mailto:hello@aryavratmarketing.com"
            target="_blank">
            hello@aryavratmarketing.com
          </a>
        </div>

        <div className="links">
          <AiFillInstagram color="#ad2a30" size={30} />
          <a
            className="alink"
            style={{ color: "white", fontFamily: "Nunito" }}
            href="https://www.instagram.com/aryavrat.marketing/"
            target="_blank">
            @aryavrat.marketing
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
