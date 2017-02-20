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
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
            ::-webkit-scrollbar {
              height: 10px;
              width: 10px;
              overflow: visible; }

            ::-webkit-scrollbar-button {
              height: 0;
              width: 0; }

            ::-webkit-scrollbar-track {
              background-clip: padding-box;
              border: solid transparent;
              border-width: 0; }

            ::-webkit-scrollbar-track:horizontal {
              border-width: 0; }

            ::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.2);
              min-height: 28px;
              padding: 20px 0 0;
              box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }

            ::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0, 0, 0, 0.4);
              box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25); }

            ::-webkit-scrollbar-thumb:horizontal {
              border-width: 6px 1px 1px;
              padding: 0 0 0 100px;
              box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset -1px 0 0 rgba(0, 0, 0, 0.07); }

            ::-webkit-scrollbar-corner {
              background: transparent; }
            `}
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
