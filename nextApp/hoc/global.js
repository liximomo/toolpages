import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createTheme from '../theme/normal';

export default function injectGlobal(WrappedComponent, getInitProps, withRef = false) {
  return class GlobalComponent extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx;
      const isServer = !!req;
      const userAgent = isServer
        ? req.headers['user-agent']
        : navigator.userAgent;

      let props = {};
      if (getInitProps) {
        props = await getInitProps(ctx);
      }

      return {
        ...props,
        theme: createTheme(userAgent)
      };
    }

    render () {
      let renderElement;
      if (withRef) {
        renderElement = React.createElement(WrappedComponent, {
          ...this.props,
          ref: 'wrappedInstance'
        });
      } else {
        renderElement = React.createElement(WrappedComponent,
          this.props
        );
      }
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(this.props.theme)} >
          {renderElement}
        </MuiThemeProvider>
      );
    }
  };
}
