import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { CustomMarker } from "./styled";
import { connect } from "react-redux";

// const maxBounds = [[-12.033695, 35.079562], [29.436474, 61.430522]];

const Map = ({ locations, filter, onSelectLocation, onUnselectLocation }) => {
  const [viewPort, setViewport] = useState({
    latitude: 49.90351,
    longitude: 7.256218,
    width: "100vw",
    height: "100vh",
    zoom: 4.5
  });
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        onUnselectLocation();
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [onUnselectLocation]);
  let filtereredLocations = [...locations].filter(loc => {
    const string = filter.string.toLowerCase();
    const type = filter.type;
    let bool = true;
    if (filter.string !== "") {
      bool =
        (loc.name.toLowerCase().includes(string) ||
          loc.city.toLowerCase().includes(string) ||
          loc.country.toLowerCase().includes(string)) &&
        bool;
    }
    switch (type) {
      case "boulder":
        bool = loc.boulder && bool;
        break;
      case "climbing":
        bool = loc.climbing && bool;
        break;
      default:
        return bool;
    }
    return bool;
  });

  // const filteredData = filter ? [...locations].filter(loc=>{
  //   loc[countryfilter] ===
  // })

  return (
    <ReactMapGL
      {...viewPort}
      mapStyle="mapbox://styles/dannyboy69/ck1gql4tc3emw1dnwb2x5zcxc"
      mapboxApiAccessToken="pk.eyJ1IjoiZGFubnlib3k2OSIsImEiOiJjazE5ZXI4NWIwM2lqM2lyNTc1aXZsMXloIn0.1nlWoOtPjYdL36v7dmiEmA"
      onViewportChange={viewport => setViewport(viewport)}
    >
      {locations &&
        filtereredLocations.map((loc, index) => (
          <Marker
            key={index}
            latitude={loc.coordinates[1]}
            longitude={loc.coordinates[0]}
            anchor="bottom"
            offsetLeft={-25}
            offsetTop={-25}
          >
            <CustomMarker
              onClick={e => {
                e.preventDefault();
                onSelectLocation(loc);
                setViewport({
                  ...viewPort,
                  latitude: loc.coordinates[1],
                  longitude: loc.coordinates[0],
                  zoom: 12,
                  transitionDuration: 2000
                });
              }}
              src={
                loc.boulder && !loc.climbing
                  ? "img/climb1.svg"
                  : !loc.boulder && loc.climbing
                  ? "img/climb2.svg"
                  : "img/climb3.svg"
              }
            ></CustomMarker>
          </Marker>
        ))}
    </ReactMapGL>
  );
};

const mapStateToProps = state => ({
  locations: state.location.locations,
  filter: state.location.filter
});
const mapDispatchToProps = dispatch => ({
  onSelectLocation: loc => dispatch({ type: "SELECT_LOCATION", val: loc }),
  onUnselectLocation: () => dispatch({ type: "UNSELECT_LOCATION" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
