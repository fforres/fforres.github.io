import type { AppProps } from "next/app";
import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { tabletMax } from "../components/style/breakpoints";
import TopBar from "../components/TopBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <Sidebar />
      <TopBar />
      <div className="pageContainer">
        <Component {...pageProps} />
        <Footer />
      </div>
      <style jsx>
        {`
        .root {
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .pageContainer {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
        }
        @media (max-width: ${tabletMax}px) {
          .root {
            flex-direction: column;
          }
        }
      `}
      </style>
    </div>
  );
}
