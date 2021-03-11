import React, { useState, useEffect, useContext } from "react";
import { AbbrevContext } from "../../../context/AbbrevContext";
import { ListElContainer } from "./ListElement.style";

const ListElement = ({ cData }) => {
  const [abbrev, setAbbrev] = useContext(AbbrevContext);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (abbrev === cData.CountryCode) setSelected(true);
    else setSelected(false);
  }, [abbrev]);

  const toggleEl = () => {
    setAbbrev(cData.CountryCode)
  };

  return (
    <ListElContainer id={selected ? "selected" : ""} selected={selected} onClick={toggleEl}>
      <div className='desc'>
        <h3>{cData.Country}</h3>
        <p>
          {cData.TotalConfirmed} / {cData.TotalDeaths} / {cData.TotalRecovered}
        </p>
      </div>
      <div className='icon'>
        <i class='fas fa-chart-area'></i>
      </div>
    </ListElContainer>
  );
};

export default ListElement;
