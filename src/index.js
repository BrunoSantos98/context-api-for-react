import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {AuthProvider} from './state/auth'

import './index.css'

const theme = createTheme({
  palette:{
    primary:{
      main: '#4169e1'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

