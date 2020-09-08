import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { HashRouter} from 'react-router-dom';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import Content from './Content';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';

let theme = createMuiTheme({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: {
      main: '#45B0D2',
      dark: '#004680',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d7efff',
      dark: '#d4e6f2',
      contrastText: '#0176B8',
    },
  },
  typography: {
    fontFamily: [
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      'Helvetica',
      'Neue',
      'Helvetica',
      'sans-serif'
    ].join(','),
  },
  overrides: {
  }
  ,
})
  ;
theme.zIndex.appBar = theme.zIndex.drawer + 1;
theme = responsiveFontSizes(theme);

const Application = () => {
  return (
    <HashRouter>
      <Content/>
    </HashRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Application />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
