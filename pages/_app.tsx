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
          nftStorageToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVkMjJDZDg2M2Y2NUVBN0ZjZjI3MEE5MUY2NTE5Nzc4OGRhRjU4NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDUzMDk3NzkwNiwibmFtZSI6Ik9wZW5ncmFtIn0.FODpTH2Y8KlFqzaTJOnwiJmPzb5kyhv4WKcStmwejc0",
        }}
      >
        <Component {...pageProps} />
      </OpenFormatProvider>
    </>
  );
}

export default MyApp;
