import { Navigation } from "./Nav";
import { Filter } from "./Filter";
import { UiContainer } from "./styled";
import { MenuComp } from "./Menu";
import { Backdrop } from "./Backdrop";
import Details from "./Details";
import React, { useState } from "react";
import { Legend } from "./Legend";

export const Layout = React.memo(({ children }) => {
  const [activeFilter, setFilterActive] = useState(false);
  const [activeBurger, setBurgerActive] = useState(false);
  const legendItems = [
    { name: "Boulder Gym", icon: "img/climb1.svg" },
    { name: "Climbing Gym", icon: "img/climb2.svg" },
    { name: "Boulder/Climbing Gym", icon: "img/climb3.svg" }
  ];
  return (
    <UiContainer>
      <Navigation
        setFilterActive={setFilterActive}
        setBurgerActive={setBurgerActive}
        activeFilter={activeFilter}
        activeBurger={activeBurger}
      ></Navigation>
      <Filter activeFilter={activeFilter}></Filter>
      <MenuComp activeBurger={activeBurger}></MenuComp>
      <Details></Details>

      <Backdrop
        activeBurger={activeBurger}
        setBurgerActive={setBurgerActive}
      ></Backdrop>
      {children}
      <Legend items={legendItems}></Legend>
    </UiContainer>
  );
});
