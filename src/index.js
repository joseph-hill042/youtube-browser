import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/App.jsx';

const theme = createMuiTheme();

ReactDOM.render(
    <MuiThemeProvider theme={theme} >
    <App />
    </MuiThemeProvider>,
    document.querySelector('#root')
);

if(module.hot) module.hot.accept();