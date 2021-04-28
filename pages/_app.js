import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const title = `{'0'} KoalaDigital | Ecommerce & Web Developer Freelancer in Ryde Sydney, Australia`;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            content="Based in Ryde Sydney Australia, we help your business GROW by creating bespoke Ecommerce Stores and Smart Cross-device Apps."
            name="description"
          />
          <meta content={title} property="og:title" />
          <meta content={title} property="twitter:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/tailwind.css" rel="stylesheet" type="text/css" />
          <script src="/js/gosquared.js" type="text/javascript" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
