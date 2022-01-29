import React, { useState } from "react";
import styles from "./Filter.module.css";
import Input from "../../components/input";

function Filter() {
  const [filterStatus, toggleFilterStatus] = useState(false);
  return (
    <div className={`${styles.Filter} ${filterStatus && styles.expanded}`}>
      <div className={styles.TitleWrapper}>
        <span>FILTER BLOCK</span>
        <button
          className={styles.TitleButton}
          onClick={() => toggleFilterStatus(!filterStatus)}
        ></button>
      </div>
      <div className={styles.FilterItems}>
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
        <Input placeholder={"test"} />
      </div>
    </div>
  );
}

export default Filter;
