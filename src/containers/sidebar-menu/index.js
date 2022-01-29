import React, { useState } from "react";
import styles from "./SidebarMenu.module.css";
import Logo from "../../components/logo";

function SidebarMenu() {
  const list = ["Главная", "Клиенты", "Сотрудники", "Аналитика"];
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <div
      className={`${styles.Container} ${isExpanded && styles.expanded}`}
      onClick={() => {
        toggleExpand(!isExpanded);
      }}
    >
      <div className={styles.LogoWrapper}>
        <Logo alt={"LOGO"} extraStyles={styles.Icon}></Logo>
        <div className={styles.ListItem__Description}>
          <span>COMPANY NAME</span>
        </div>
      </div>
      <ul className={styles.List}>
        {list.map((value, index) => (
          <li key={index} className={styles.ListItem}>
            <Logo alt={""} extraStyles={styles.Icon} />
            <div className={styles.ListItem__Description}>
              <span>{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
