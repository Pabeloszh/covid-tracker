import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
    const [searchInput, searchInputValue] = useState("");

  return (
    <SearchContext.Provider value={[searchInput, searchInputValue]}>
      {props.children}
    </SearchContext.Provider>
  );
};