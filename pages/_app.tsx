import "../styles/globals.css";
import "@crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
