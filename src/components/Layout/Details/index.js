import React from "react";
import {
  Container,
  Close,
  Name,
  SubTitle,
  IconBar,
  Description,
  Address
} from "./styled";
import { connect } from "react-redux";

const Details = ({ location, onUnselectLocation }) => {
  if (location && Object.keys(location).length > 0) {
    return (
      <Container>
        <Name>{location.name}</Name>
        <SubTitle>Type of Gym</SubTitle>
        <IconBar>
          {location.boulder && !location.climbing ? (
            <img src="img/climb1.svg" alt="detail icon" />
          ) : location.climbing && !location.boulder ? (
            <img src="img/climb2.svg" alt="detail icon" />
          ) : (
            <img src="img/climb3.svg" alt="detail icon" />
          )}
        </IconBar>
        <SubTitle>Short description</SubTitle>
        <Description>{location.description}</Description>
        <SubTitle>Address</SubTitle>
        <Address>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam
          consequatur soluta officiis nostrum? Nobis, earum? Culpa veniam
          molestias, amet veritatis, molestiae error deserunt deleniti vel
          voluptas delectus alias animi!
        </Address>
        <Close onClick={onUnselectLocation}>&times;</Close>
      </Container>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  location: state.location.location
});
const mapDispatchToProps = dispatch => ({
  onUnselectLocation: () => dispatch({ type: "UNSELECT_LOCATION" })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
