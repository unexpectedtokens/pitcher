import React from "react";
import { StyledLegend, LegendLine } from "./styled";

export const Legend = props => {
  return (
    <StyledLegend>
      {props.items.map((item, index) => (
        <LegendLine key={index}>
          <img src={item.icon} alt="Legend Icon" />
          <h5>{item.name}</h5>
        </LegendLine>
      ))}
    </StyledLegend>
  );
};
