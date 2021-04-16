import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import ListElement from "./ListElement/ListElement";
import { FilteredLi } from "./FilteredList.style";
import { SearchContext } from "../../../context/SearchContext";

const FilteredList = () => {
  const [countries, setCountries] = useContext(CountriesContext);
  const [searchInput, searchInputValue] = useContext(SearchContext);

  return (
    <FilteredLi>
      {searchInput ? (
        countries.filter((c) => c.Country.startsWith(searchInput)).length !==
        0 ? (
          countries
            .filter((c) => c.Country.startsWith(searchInput))
            .map((fc, index) => {
              return <ListElement cData={fc} key={index} />;
            })
        ) : (
          <h3>No results for {searchInput}</h3>
        )
      ) : (
        countries.map((c, index) => {
          return <ListElement cData={c} key={index} />;
        })
      )}
    </FilteredLi>
  );
};

export default FilteredList;
