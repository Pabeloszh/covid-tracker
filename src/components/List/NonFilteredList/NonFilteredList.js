import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import ListElement from "../ListElement/ListElement";
import { NonFilteredLi } from "./NonFilteredList.style";

const NonFilteredList = () => {
  const [countries, setCountries] = useContext(CountriesContext);

  return (
    <NonFilteredLi>
      {countries.map((c) => {
        return <ListElement cData={c} />;
      })}
    </NonFilteredLi>
  );
};

export default NonFilteredList;
