import React, { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
