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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            {`html, body {
              margin: 0;
              padding: 0;
              width: 100%;
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
          <script dangerouslySetInnerHTML={{
            __html: `var docLog = function() {
            if (!docLog._div) { docLog.createDiv(); }
            var logEntry = document.createElement('span');
            for (var i=0; i < arguments.length; i++) {
            logEntry.innerHTML += docLog.toJson(arguments[i]);
            }
            logEntry.innerHTML += '<br />';
            docLog._div.appendChild(logEntry);
            };
            docLog.createDiv = function() {
            docLog._div = document.body.appendChild(document.createElement('div'));
            var props = {
            position:'absolute',
            top:'0px',
            right:'0px',
            background:'#333',
            padding: '10px',
            opacity: 0.7,
            color: 'white',
            width: '70%',
            'max-width': '400px',
            height: '300px',
            overflow: 'auto',
            fontFamily: 'courier new',
            fontSize: '11px',
            whiteSpace: 'nowrap'
            }
            for (var key in props) { docLog._div.style[key] = props[key]; }
            }
            docLog.toJson = function(obj) {
            if (typeof window.uneval == 'function') { return uneval(obj); }
            if (typeof obj == 'object') {
            if (!obj) { return 'null'; }
            var list = [];
            if (obj instanceof Array) {
            for (var i=0;i < obj.length;i++) { list.push(this.toJson(obj[i])); }
            return '[' + list.join(',') + ']';
            } else {
            for (var prop in obj) { list.push('"' + prop + '":' + this.toJson(obj[prop])); }
            return '{' + list.join(',') + '}';
            }
            } else if (typeof obj == 'string') {
            return '"' + obj.replace(/(["'])/g, '$1') + '"';
            } else {
            return new String(obj);
            }
            }`
          }} />
        </body>
      </html>
    );
  }
};
