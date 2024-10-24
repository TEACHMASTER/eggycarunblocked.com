import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer";
export default function Document() {

  return (
    <Html lang="en">
      <Head>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
