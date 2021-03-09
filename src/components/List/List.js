import React, {useState} from 'react';
import {ListContainer} from "./List.style"
import NonFilteredList from './NonFilteredList/NonFilteredList';

const List = () => {
    const [searchInput, searchInputValue] = useState("");


    const adjustCase = (str) => {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    
    return (
        <ListContainer>
            <div className="search">
                <i class="fas fa-search"></i>
                <input onChange={(e) => searchInputValue(adjustCase(e.target.value))} type="text" placeholder='Search...'/>
            </div>
            {/* {searchInput ? <FilteredList/> : <NonFilteredList/>} */}
            <NonFilteredList/>
        </ListContainer>
    )
}

export default List
