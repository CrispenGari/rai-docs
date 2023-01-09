import React from "react";
import styles from "./Main.module.css";
interface Props {}
export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={styles.main}>
      <h1>Hello from Main</h1>
    </div>
  );
};