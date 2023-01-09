import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { AiFillGithub } from "react-icons/ai";
interface Props {}
export const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Image src="/cover.png" alt="cover" />
      </div>
      <div className={styles.header__right}>
        <Link href={"https://github.com/CrispenGari/RAI"}>
          <AiFillGithub />
        </Link>
      </div>
    </div>
  );
};
