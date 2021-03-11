import React, { useEffect, useContext } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { AbbrevContext } from "../../context/AbbrevContext";
import {SearchContext } from "../../context/SearchContext"
import { MapContainer } from "./Map.style";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  const [abbrev, setAbbrev] = useContext(AbbrevContext);
  const [searchInput, searchInputValue] = useContext(SearchContext);

  const toggleMap = (e) => {
    searchInputValue("");
    document.querySelector('.search input').value = "";
    setAbbrev(e.target.getAttribute("map-abbrev"));
  };
  return (
    <MapContainer>
      <ComposableMap projectionConfig={{ scale: 137 }}>
        <Graticule />
        <Sphere />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  map-abbrev={geo.properties.ISO_A2}
                  geography={geo}
                  onClick={toggleMap}
                    fill={
                      geo.properties.ISO_A2 === abbrev
                        ? "red"
                        : "#000"
                    }
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </MapContainer>
  );
};

export default Map;
