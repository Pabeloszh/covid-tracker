import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { CountriesProvider } from "./context/CountriesContext";
import { AbbrevProvider } from "./context/AbbrevContext";
import { SearchProvider } from "./context/SearchContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    background-color: #0E1F33;
  }
`;

ReactDOM.render(
  <CountriesProvider>
    <AbbrevProvider>
      <SearchProvider>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </SearchProvider>
    </AbbrevProvider>
  </CountriesProvider>,
  document.getElementById("root")
);
