import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/authContext';
import { GlobalStyle } from './assets/styles/globalStyles.styled';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <GlobalStyle/>
        <App />
    </BrowserRouter>
  </AuthContextProvider>
);
