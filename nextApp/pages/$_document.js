import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createTheme from '../theme/normal';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx);

    const { req } = ctx;
    const isServer = !!req;
    const userAgent = isServer
      ? req.headers['user-agent']
      : navigator.userAgent;

    return {
      ...props,
      theme: getMuiTheme(createTheme(userAgent))
    };
  }

  render () {
    return (
      <html>
        <Head />
        <body>
          <MuiThemeProvider muiTheme={this.props.theme} >
            <Main />
          </MuiThemeProvider>
          <NextScript />
        </body>
      </html>
    );
  }
};
