import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./layout.module.scss";
import Head from "next/head";

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Báo mới</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://baomoi-static.zadn.vn/favicons/favicon-32x32.png"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
