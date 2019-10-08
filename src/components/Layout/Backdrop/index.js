import React from "react";
import { StyledBackdrop } from "./styled";

export const Backdrop = props => {
  return (
    <StyledBackdrop
      active={props.activeBurger}
      onClick={() => props.setBurgerActive(false)}
    ></StyledBackdrop>
  );
};
