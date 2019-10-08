import React from "react";
import { StyledFilter } from "./styled";
import FilterContent from "../../UI/FilterContent";
export const Filter = React.memo(props => {
  return (
    <StyledFilter active={props.activeFilter}>
      <FilterContent></FilterContent>
    </StyledFilter>
  );
});
