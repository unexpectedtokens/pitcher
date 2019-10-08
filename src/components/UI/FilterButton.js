import styled, { css } from "styled-components";

const activeStyles = css`
  background: #1e8896;
  color: #fff;
`;

export const FilterButton = styled.p`
  transition: all 0.3s;
  display: inline-block;
  cursor: pointer;
  color: #1e8896;
  border: 2px solid #1e8896;
  border-radius: 3px;
  padding: 1rem 4rem 1rem 3rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${props => (props.active ? activeStyles : null)}
  :hover {
    ${activeStyles}
  }
  span {
    font-size: 2.5rem;
  }
  @media (max-width: 900px) {
    padding: 5px;
    span {
      display: none;
    }
  }
`;
