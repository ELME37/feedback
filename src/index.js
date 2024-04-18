import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import { GlobalStyle } from './assets/styles/globalStyles.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle/>
      <Router />
  </BrowserRouter>
);
