import React, { useState, createContext } from "react";

export const AbbrevContext = createContext();

export const AbbrevProvider = (props) => {
  const [abbrev, setAbbrev] = useState("");

  return (
    <AbbrevContext.Provider value={[abbrev, setAbbrev]}>
      {props.children}
    </AbbrevContext.Provider>
  );
};
