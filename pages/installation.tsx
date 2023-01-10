import { Image } from "@chakra-ui/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";
import React from "react";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/SideBar/Sidebar";
import styles from "../styles/Installation.module.css";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const extensions = [javascript({ jsx: true })];
interface Props {}
const Installation: React.FC<Props> = ({}) => {
  return (
    <div className={styles.installation}>
      <Header />
      <NavBar />
      <div className={styles.installation__main}>
        <Sidebar />
        <div className={styles.installation__main__main}>
          <h1>Installation</h1>
          <p>
            To get started first you need to install{" "}
            <span>@crispengari/react-activity-indicators</span> as follows:
          </p>
          <Image src="/cover.png" alt="cover" />
          <h2>Using yarn</h2>
          <p>
            If you are using <span>yarn</span> as your package manager you
            install <span>@crispengari/react-activity-indicators</span> as
            follows:
          </p>
          <ReactCodeMirror
            value={`yarn add @crispengari/react-activity-indicators`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />

          <h2>Using npm</h2>
          <p>
            If you are using <span>npm</span> as your package manager you
            install <span>@crispengari/react-activity-indicators</span> as
            follows:
          </p>
          <ReactCodeMirror
            value={`npm install @crispengari/react-activity-indicators`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />

          <h2>Using pnpm</h2>
          <p>
            If you are using <span>pnpm</span> as your package manager you
            install <span>@crispengari/react-activity-indicators</span> as
            follows:
          </p>
          <ReactCodeMirror
            value={`pnpm install @crispengari/react-activity-indicators`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />

          <div className={styles.installation__main__main__nav}>
            <Link href={"/rai"}>
              <abbr title="Getting Started">Getting Started</abbr>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Installation;
