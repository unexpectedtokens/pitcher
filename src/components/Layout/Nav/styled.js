import styled from "styled-components";

export const NavCointainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  padding: 1rem 2rem;
  pointer-events: all;
`;

export const Logo = styled.h1`
  color: #333;
  font-size: 4rem;
  padding-top: 1rem;
  letter-spacing: 8px;
  font-weight: 100;
`;
