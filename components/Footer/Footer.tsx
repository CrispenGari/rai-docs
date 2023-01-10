import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import styles from "./Footer.module.css";
interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <p className={styles.footer}>
      Copyright © {new Date().getFullYear()} RAI Inc. All rights reserved.{" "}
      <Link href={"https://github.com/CrispenGari/RAI"}>
        <AiFillGithub />
      </Link>
    </p>
  );
};

export default Footer;
