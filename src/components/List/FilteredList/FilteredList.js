import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import ListElement from "../ListElement/ListElement";
import { FilteredLi } from "./FilteredList.style";

const FilteredList = ({ searchInput }) => {
  const [countries, setCountries] = useContext(CountriesContext);

  return (
    <FilteredLi>
      {countries
        .filter((c) => c.Country.startsWith(searchInput))
        .map((fc) => {
          return <ListElement cData={fc} />;
        })}
    </FilteredLi>
  );
};

export default FilteredList;
