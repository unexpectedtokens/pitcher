import styled from "styled-components";
export const StyledLegend = styled.div`
  width: 20rem;
  left: 5rem;
  bottom: 5rem;
  background: #fff;
  border-radius: 5px;
  z-index: 999;
  position: absolute;
  padding: 2rem;
  @media (max-width: 900px) {
    left: 2rem;
  }
`;

export const LegendLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 200;
  }
`;
