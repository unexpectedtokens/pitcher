import styled from "styled-components";
import React from "react";
const MenuContainer = styled.ul`
    width: 90%
    margin: 11rem auto;
    list-style: none;
`;
const MenuItem = styled.li`
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  display: block;
  padding: 1rem 0.1rem;
  color: #555;
  cursor: pointer;
  transition: background 0.3s;
  :hover {
    color: #222;
  }
`;

export const MenuComponent = props => {
  const goTo = u => console.log(u);

  const items = [
    { text: "Sign in", do: () => goTo("/"), key: 1 },
    { text: "Add Gym", do: () => goTo("/"), key: 2 },
    { text: "Map", do: () => goTo("/"), key: 3 }
  ];

  return (
    <MenuContainer>
      {items.map(i => (
        <MenuItem key={i.key} onClick={i.do}>
          {i.text}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};
