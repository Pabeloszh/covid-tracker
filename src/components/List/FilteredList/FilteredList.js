import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import ListElement from "../ListElement/ListElement";
import { FilteredLi } from "./FilteredList.style";
import {SearchContext} from "../../../context/SearchContext"

const FilteredList = () => {
  const [countries, setCountries] = useContext(CountriesContext);
  const [searchInput, searchInputValue] = useContext(SearchContext);


  return (
    <FilteredLi>
      {searchInput ? countries
        .filter((c) => c.Country.startsWith(searchInput))
        .map((fc) => {
          return <ListElement cData={fc} />;
        }) : countries.map((c) => {
          return <ListElement cData={c} />;
        })}
    </FilteredLi>
  );
};

export default FilteredList;
