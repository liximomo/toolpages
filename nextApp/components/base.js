import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createTheme from '../theme/normal';
// injectTapEventPlugin();


export default class AppContainer extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={this.props.theme} >
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
