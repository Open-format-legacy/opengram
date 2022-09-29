import { OpenFormatProvider } from "@simpleweb/open-format-react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OpenFormatProvider
        config={{
          network: "mumbai",
          factory: "c94972f0-b156-4cc8-b390-22d2b04cd0d7",
        }}
      >
        <Component {...pageProps} />
      </OpenFormatProvider>
    </>
  );
}

export default MyApp;
