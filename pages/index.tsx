import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/SideBar/Sidebar";
import styles from "../styles/Home.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { DoubleCircularIndicator } from "@crispengari/react-activity-indicators";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
const extensions = [javascript({ jsx: true })];

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <NavBar />
      <div className={styles.home__main}>
        <Sidebar />
        <div className={styles.home__main__main}>
          <h1>React Activity Indicators (RAI)</h1>
          <p>
            This is a simple component library for rendering activity indicators
            in a <span>react</span> component.
          </p>
          <Image src="/cover.png" alt="cover" />
          <p>
            All you need to do to get started is installing
            <span>@crispengari/react-activity-indicators</span> and setup for
            your
            <span>next.js</span> or <span>react.js</span> project.
          </p>
          <h2>Example</h2>
          <CodeMirror
            value={`
import React from 'react'
import {DoubleCircularIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <DoubleCircularIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />

          <h2>Output</h2>
          <div className={styles.home__main__main__canvas}>
            <DoubleCircularIndicator size="small" />
          </div>
          <div className={styles.home__main__main__nav}>
            <Link href={"/getting_stated"}>Getting Stated</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
