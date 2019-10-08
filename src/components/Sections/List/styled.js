import styled from "styled-components";
import React from "react";

export const ListGrid = styled.div`
  width: 80%;
  max-width: 114rem;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #fff;
  grid-gap: 5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  background: #fff;
  box-shadow: 0 1rem 1rem #e6e6e6;
  border-radius: 10px;
  padding: 3rem 1rem;
  transition: transform 0.3s;
  cursor: pointer;
  text-align: center;
  :hover {
    transform: scale(1.03);
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  p {
    font-weight: 200;
    margin-bottom: 0.5rem;
  }
`;
export const ListItem = props => {
  return (
    <Item onClick={props.click}>
      <h5>{props.name}</h5>
      <p>{props.city}</p>
    </Item>
  );
};
