import { ListGrid, ListItem } from "./styled";
import React from "react";
import { connect } from "react-redux";

const List = ({ locations, onSelectLocation, filter }) => {
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
  return (
    <ListGrid>
      {locations &&
        filtereredLocations.map((loc, index) => (
          <ListItem
            key={index}
            name={loc.name}
            click={() => onSelectLocation(loc)}
          ></ListItem>
        ))}
    </ListGrid>
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
)(List);
