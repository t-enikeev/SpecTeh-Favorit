import React from "react";
import styles from "./Input.module.css";

function Input({ placeholder, handleChange, label }) {
  return (
    <label className={styles.Label}>
      {label ?? ""}
      <input
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.Input}
      ></input>
    </label>
  );
}

export default Input;
