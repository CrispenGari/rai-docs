import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Sidebar } from "../components/SideBar/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__main}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
