import React from "react";
import { AppProps } from "next/app";
import Indicator from "../components/Indicator";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          body: 0;
        }
        body {
          height: 100%;
          width: 100%;
          scroll-snap-type: y mandatory;
        }
        .block {
          width: 100vw;
          height: 100vh;
          border: 5px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 40px;
          scroll-snap-align: start;
        }
      `}</style>
    </>
  );
};
export default App;
