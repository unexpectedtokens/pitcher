import styled, { css } from "styled-components";
import React from "react";

const activeStyles = css`
  div {
    background: transparent;
    :after {
      top: 0;
      transform: rotate(calc(180deg - 45deg));
    }
    :before {
      top: 0;
      transform: rotate(calc(-180deg + 45deg));
    }
  }
  :hover {
    div {
      :after {
        top: 0rem;
      }
      :before {
        top: 0rem;
      }
    }
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  padding: 1.1rem;
  z-index: 1200;
  div {
    position: relative;
    width: 3rem;
    background: #333;
    height: 3px;
    transition: all 0.3s;
    :after,
    :before {
      position: absolute;
      width: 3rem;
      height: 3px;
      background: #333;
      content: "";
      transition: all 0.3s;
    }
    :after {
      top: -1rem;
    }
    :before {
      top: 1rem;
    }
  }
  :hover {
    div {
      :after {
        top: -1.2rem;
      }
      :before {
        top: 1.2rem;
      }
    }
  }
  ${props => (props.active ? activeStyles : null)}
`;

export const HamburgerComp = props => {
  return (
    <Hamburger onClick={props.click} active={props.active}>
      <div></div>
    </Hamburger>
  );
};
