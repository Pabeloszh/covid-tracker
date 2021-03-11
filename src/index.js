import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CountriesProvider } from "./context/CountriesContext";
import { AbbrevProvider } from "./context/AbbrevContext";
import {SearchProvider } from "./context/SearchContext"

ReactDOM.render(
  <CountriesProvider>
    <AbbrevProvider>
      <SearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </SearchProvider>
    </AbbrevProvider>
  </CountriesProvider>,
  document.getElementById("root")
);
