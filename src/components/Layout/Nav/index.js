import React from "react";
import { NavCointainer, Logo } from "./styled";
import { HamburgerComp } from "../../UI/Hamburger";
import { FilterButton } from "../../UI/FilterButton";
export const Navigation = React.memo(props => {
  const {
    activeFilter,
    activeBurger,
    setBurgerActive,
    setFilterActive
  } = props;
  return (
    <NavCointainer>
      <FilterButton
        onClick={() => setFilterActive(!activeFilter)}
        active={activeFilter}
      >
        {activeFilter ? <span>&lsaquo;</span> : <span>&rsaquo;</span>} Filter
      </FilterButton>
      <Logo>PITCHER</Logo>
      <HamburgerComp
        click={() => setBurgerActive(!activeBurger)}
        active={activeBurger}
      ></HamburgerComp>
    </NavCointainer>
  );
});
