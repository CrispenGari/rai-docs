import { Html, Head as DocumentHead, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <DocumentHead />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
