import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import Wrapper from "../Wrapper";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScroll]);
  return (
    <header
      className={styles.header}
      style={{ background: scroll ? "rgb(37, 37, 37)" : "rgba(37,37,37,0.3)" }}
    >
      <Wrapper>
        <div className={styles.brandLogo}>
          <a href="/">
            <img src={logo} alt="Pexabay logo" />
            <h1 className={styles.titleLogo}>Pexabay</h1>
          </a>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
