import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";
interface Props {}
const NavBar: React.FC<Props> = ({}) => {
  const location = useRouter();
  return (
    <div className={styles.nav__bar}>
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

export default NavBar;
