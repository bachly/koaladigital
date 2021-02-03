import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const title = `KoalaDigital 🐨 | Custom Website & Shopify Developer in Ryde
    Sydney, Australia`;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            content="Bespoke website and Shopify store design service • System integration
            • Simple pricing and flat-fee quote • Experience & knowledge from established Australian companies"
            name="description"
          />
          <meta content={title} property="og:title" />
          <meta content={title} property="twitter:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/tailwind.css" rel="stylesheet" type="text/css" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
