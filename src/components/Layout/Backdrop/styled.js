import styled, { css } from "styled-components";

const activeStyle = css`
  opacity: 0.8;
  pointer-events: all;
  cursor: pointer;
  visibility: visible;
`;

export const StyledBackdrop = styled.div`
  opacity: 0;
  visibility: hidden;
  width: 80%;
  height: 100%;
  background: rgba(55, 44, 12, 0.29);
  transition: all 0.5s;
  right: 20%;
  top: 0;
  z-index: 999;
  pointer-events: none;
  position: absolute;
  ${props => (props.active ? activeStyle : null)}
  @media(max-width:900px) {
    display: none;
  }
`;
