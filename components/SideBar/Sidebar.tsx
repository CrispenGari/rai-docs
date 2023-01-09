import React from "react";
import styles from "./Sidebar.module.css";
interface Props {}
export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className={styles.side__bar}>
      <h1>React Activity Indicators</h1>
    </div>
  );
};
