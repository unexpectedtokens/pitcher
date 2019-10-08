import styled, { css } from "styled-components";
const activeStyle = css`
  right: 70%;
  opacity: 1;
  @media (max-width: 900px) {
    right: 0;
  }
`;

export const StyledFilter = styled.div`
  pointer-events: all;
  transition: right 0.3s, opacity 0.3s;
  position: absolute;
  right: 100%;
  opacity: 0;
  padding-top: 2rem;
  background: #fff;
  height: calc(100% - 6.7rem);
  width: 30%;
  top: 7rem;
  z-index: 99;
  ${props => (props.active ? activeStyle : null)}
  @media (max-width: 900px) {
    width: 100%;
  }
`;
