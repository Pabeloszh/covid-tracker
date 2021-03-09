import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CountriesProvider} from "./context/CountriesContext"


ReactDOM.render(
  <CountriesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CountriesProvider>,
  document.getElementById('root')
);

