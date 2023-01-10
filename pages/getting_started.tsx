import { Image } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/SideBar/Sidebar";
import styles from "../styles/GettingStarted.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const extensions = [javascript({ jsx: true })];
interface Props {}
const GettingStarted: React.FC<Props> = ({}) => {
  return (
    <div className={styles.getting__started}>
      <Header />
      <NavBar />
      <div className={styles.getting__started__main}>
        <Sidebar />
        <div className={styles.getting__started__main__main}>
          <h1>Getting Started</h1>
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
          <CodeMirror
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
          <CodeMirror
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
          <CodeMirror
            value={`pnpm install @crispengari/react-activity-indicators`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h1></h1>
          <h1></h1>
          <p>
            You need to import{" "}
            <span>
              @crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css
            </span>
            as a global <span>css</span> file. We recommend to import this file
            in <span>index.tsx | index.js</span> in a react project that is
            created using <span>create react-app</span>. In a{" "}
            <span>nextjs</span> project we recommend you to import this file in
            the <span>_app.tsx|_app.js</span> as a global style file.
          </p>
          <h2>Next.js</h2>
          <p>
            If your project is a <span>next.js</span> project you need to import{" "}
            <span>
              @crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css
            </span>{" "}
            in <span>_app.tsx | _app.js</span>
            as follows{" "}
          </p>
          <CodeMirror
            value={`
import "../styles/globals.css";
import "@crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css";
import type { AppProps } from "next/app";
...
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />

          <h2>React.js</h2>
          <p>
            If your project is a <span>react.js</span> project you need to
            import{" "}
            <span>
              @crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css
            </span>{" "}
            in <span>index.tsx | index.js</span>
            as follows{" "}
          </p>
          <CodeMirror
            value={`
import "@crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <div className={styles.getting__started__main__main__nav}>
            <Link href={"/rai"}>
              <abbr title="React Activity Indicators">RAI</abbr>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingStarted;
