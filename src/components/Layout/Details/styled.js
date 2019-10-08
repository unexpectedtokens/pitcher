import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  border-radius: 3px;
  top: 12rem;
  right: 5rem;
  background: #fff;
  padding: 4rem 2.5rem;
  position: absolute;
  z-index: 999;
  pointer-events: all;
  @media (max-width: 900px) {
    width: 100%;
    top: 7rem;
    left: 0;
    right: 0;
    height: 100%;
    padding: 7rem;
  }
`;
export const Name = styled.h3`
  font-size: 2.5rem;
  color: #555;
  font-weight: 200;
  margin-bottom: 2rem;
`;
export const SubTitle = styled.h5`
  font-size: 2rem;
  color: #555;
  font-weight: 200;
  margin-bottom: 2rem;
`;
export const Close = styled.span`
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  color: #555;
  position: absolute;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 4rem;
    top: 2rem;
    right: 2rem;
  }
`;
export const IconBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 2rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const Description = styled.p`
  color: #333;
  font-size: 1.3rem;
  width: 90%;
  margin-bottom: 2rem;
`;
export const Address = styled.p`
  color: #c9c9c9;
  font-size: 1.25rem;
  width: 40%;
`;
