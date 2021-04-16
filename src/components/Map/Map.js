import React, { useState, useContext } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { AbbrevContext } from "../../context/AbbrevContext";
import { SearchContext } from "../../context/SearchContext";
import { MapContainer } from "./Map.style";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  const [abbrev, setAbbrev] = useContext(AbbrevContext);
  const [searchInput, searchInputValue] = useContext(SearchContext);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const toggleMap = (e) => {
    searchInputValue("");
    document.querySelector(".search input").value = "";
    setAbbrev(e.target.getAttribute("map-abbrev"));
  };

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };
  return (
    <MapContainer>
      <ComposableMap stroke='#0E1F33' projectionConfig={{ scale: 140 }}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Graticule stroke='#F1F1F3' />
          <Sphere stroke='#F1F1F3' />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => {
                return (
                  <Geography
                    map-abbrev={geo.properties.ISO_A2}
                    geography={geo}
                    onClick={toggleMap}
                    fill={
                      geo.properties.ISO_A2 === abbrev ? "#CEA434" : "#F1F1F3"
                    }
                    key={index}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className='buttons'>
        <button onClick={handleZoomOut}>
          <i className='fas fa-search-minus'></i>
        </button>
        <button onClick={handleZoomIn}>
          <i className='fas fa-search-plus'></i>
        </button>
      </div>
    </MapContainer>
  );
};

export default Map;
