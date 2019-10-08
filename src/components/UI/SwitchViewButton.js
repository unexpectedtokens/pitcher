import styled, { css } from "styled-components";
import React from "react";
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  width: 20rem;

  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #1e8896;
  z-index: 999;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 900px) {
    right: 2rem;
  }
`;
const activeButtonStyle = css`
  background: #1e8896;
  color: #fff;
`;
const Button = styled.button`
  color: #1e8896;
  padding: 0.5rem 0;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s, background 0.3s;
  background: #fff;
  ${props => (props.active ? activeButtonStyle : null)}
`;

export const SwitchViewButton = props => {
  return (
    <ButtonContainer>
      <Button onClick={() => props.click("map")} active={props.view === "map"}>
        Map
      </Button>
      <Button
        onClick={() => props.click("list")}
        active={props.view === "list"}
      >
        List
      </Button>
    </ButtonContainer>
  );
};
