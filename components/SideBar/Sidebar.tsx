import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
interface Props {}
export const Sidebar: React.FC<Props> = ({}) => {
  const location = useRouter();
  return (
    <div className={styles.side__bar}>
      <h1>React Activity Indicators</h1>
      <Link
        className={
          location?.pathname === "/getting_started" ? styles.active : ""
        }
        href={"/getting_started"}
      >
        Getting started
      </Link>
      <Link
        className={location?.pathname === "/installation" ? styles.active : ""}
        href={"/installation"}
      >
        Installation
      </Link>
      <Link
        className={location?.pathname === "/rai" ? styles.active : ""}
        href={"/rai"}
      >
        RAI
      </Link>
    </div>
  );
};
