import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import { AuthContextProvider } from './context/authContext';
import { GlobalStyle } from './assets/styles/globalStyles.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <GlobalStyle/>
        <Router />
    </BrowserRouter>
  </AuthContextProvider>
);
