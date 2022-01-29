import React from "react";
import Input from "../../components/input";
import Logo from "../../components/logo";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.Header}>
      <Input placeholder={"Поиск..."} />
      <div className={styles.HeaderItem}>
        <h4>Петров В.А.</h4>
        <Logo alt={"В.А."} />
      </div>
    </div>
  );
}

export default Header;
