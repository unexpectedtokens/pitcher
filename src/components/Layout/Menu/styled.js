import styled, { css } from "styled-components";

const activeStyle = css`
  left: 80%;
  opacity: 1;
  @media (max-width: 900px) {
    left: 0;
  }
`;

export const Menu = styled.div`
  pointer-events: all;
  width: 20%;
  left: 100%;
  opacity: 0;
  top: 0;
  position: absolute;
  height: 100%;
  background: #fff;
  transition: all 0.3s;
  z-index: 1000;
  ${props => (props.active ? activeStyle : null)}
  @media(max-width: 900px) {
    width: 100%;
  }
`;
