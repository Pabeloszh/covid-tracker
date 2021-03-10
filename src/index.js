import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CountriesProvider } from "./context/CountriesContext";
import { AbbrevProvider } from "./context/AbbrevContext";

ReactDOM.render(
  <CountriesProvider>
    <AbbrevProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AbbrevProvider>
  </CountriesProvider>,
  document.getElementById("root")
);
