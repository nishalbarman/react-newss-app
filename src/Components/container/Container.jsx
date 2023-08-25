import React from "react";
import styles from "./Container.module.css";

export default function Container({ children, style }) {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
}
