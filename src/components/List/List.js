import React, { useEffect, useContext } from "react";
import { ListContainer } from "./List.style";
import FilteredList from "./FilteredList/FilteredList";
import { AbbrevContext } from "../../context/AbbrevContext";
import {SearchContext } from "../../context/SearchContext"

const List = () => {
  const [abbrev, setAbbrev] = useContext(AbbrevContext);
  const [searchInput, searchInputValue] = useContext(SearchContext);


  useEffect(()=>{
    if(searchInput !== ""){
      setAbbrev("");
    }
  },[searchInput])

  const adjustCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <ListContainer>
      <div className='search'>
        <i class='fas fa-search'></i>
        <input
          onChange={(e) => searchInputValue(adjustCase(e.target.value))}
          type='text'
          placeholder='Search...'
        />
      </div>
        <FilteredList/>
    </ListContainer>
  );
};

export default List;
