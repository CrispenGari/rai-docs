import { Image } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer/Footer";
import styles from "../styles/NotFound.module.css";
interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <div className={styles.not__found}>
      <div className={styles.not__found__main}>
        <div>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h2>Page Not Found.</h2>
          <Image src="/cover.png" alt="cover" />
          <Link href={"/"}>RAI</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
