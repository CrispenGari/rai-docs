import { NextPage } from "next";
import React from "react";
import styles from "../styles/NotFound.module.css";
interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <div className={styles.not__found}>
      <h1>Hello from 404</h1>
    </div>
  );
};

export default NotFound;
