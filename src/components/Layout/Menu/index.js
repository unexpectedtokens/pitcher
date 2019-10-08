import React from "react";
import { Menu } from "./styled";
import { MenuComponent } from "../../UI/Menu";
export const MenuComp = React.memo(props => {
  return (
    <Menu active={props.activeBurger}>
      <MenuComponent></MenuComponent>
    </Menu>
  );
});
