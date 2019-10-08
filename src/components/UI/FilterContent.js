import styled, { css } from "styled-components";
import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/locations";

const FilterContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  border: 1px solid #1e8896;
  background: #fff;
  border-radius: 3px;
  transition: all 0.3s;
  text-indent: 0.5rem;
  color: #999;
  margin-bottom: 5rem;
  font-size: 1.2rem;
  :focus {
    border: 1px solid #197687;
  }
`;

const activeButtons = css`
  background: #1e8896;
  color: #fff;
`;
const FilterButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
`;
const FilterButton = styled.button`
  padding: 1rem 0;
  cursor: pointer;
  background: #fff;
  border: 1px solid #1e8896;
  color: #1e8896;
  transition: all 0.3s;
  :first-of-type {
    border-radius: 3px 0 0 3px;
  }
  :last-of-type {
    border-radius: 0 3px 3px 0;
  }
  :hover {
    ${activeButtons}
  }
  ${props => (props.active ? activeButtons : null)}
`;

const FilterContent = props => {
  const { onAddNewFilter, filter } = props;
  return (
    <FilterContainer>
      <FilterInput
        placeholder="Filter by country, name or city..."
        onChange={e => {
          onAddNewFilter({ category: "string", val: e.target.value });
        }}
      ></FilterInput>
      <h2>LOCATION TYPES</h2>
      <FilterButtons active={() => filter.type === "climbing"}>
        <FilterButton
          active={filter.type === "all"}
          onClick={() => onAddNewFilter({ category: "type", val: "all" })}
        >
          All types
        </FilterButton>
        <FilterButton
          active={filter.type === "boulder"}
          onClick={() => onAddNewFilter({ category: "type", val: "boulder" })}
        >
          Boulder
        </FilterButton>
        <FilterButton
          active={filter.type === "climbing"}
          onClick={() => onAddNewFilter({ category: "type", val: "climbing" })}
        >
          Climbing
        </FilterButton>
      </FilterButtons>
      {/* <p
        onClick={() =>
          onAddNewFilter({
            category: "type",
            val: "boulder"
          })
        }
      >
        boulder
      </p>
      <p
        onClick={() =>
          onAddNewFilter({
            category: "type",
            val: "climbing"
          })
        }
      >
        climbing
      </p> */}
    </FilterContainer>
  );
};

const mapStateToProps = state => ({
  filter: state.location.filter,
  locations: state.location.locations.map(loc => ({
    name: loc.name,
    city: loc.city,
    country: loc.country,
    boulder: loc.boulder,
    climbing: loc.climbing
  }))
});
const mapDispatchToProps = dispatch => ({
  onAddNewFilter: data => dispatch(actionCreators.addFilter(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContent);
