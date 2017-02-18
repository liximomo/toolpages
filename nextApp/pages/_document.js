import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx);

    // const { req } = ctx;
    // const isServer = !!req;
    // const userAgent = isServer
    //   ? req.headers['user-agent']
    //   : navigator.userAgent;

    return {
      ...props,
    };
  }

  render () {
    return (
      <html>
        <Head>
          <style>
            {`html, body {
              margin: 0;
              padding: 0;
            }`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
