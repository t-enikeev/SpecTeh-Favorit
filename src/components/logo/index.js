import React from "react";
import styles from "./Logo.module.css";

function Logo({ imgHref, alt, extraStyles }) {
  return imgHref ? (
    <img className={styles.LogoImg} href={imgHref} alt={alt} />
  ) : (
    <div className={`${styles.LogoStubber} ${extraStyles}`}>
      <span className={styles.Text}>{alt}</span>
    </div>
  );
}

export default Logo;
