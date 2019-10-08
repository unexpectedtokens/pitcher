import * as types from "../actions/actionTypes";
import { updateObject } from "../utility";
const inititalState = {
  location: {},
  locations: [
    {
      name: "Radium Boulders",
      coordinates: [5.6823773, 50.8566072],
      city: "Maastricht",
      country: "Netherlands",
      boulder: true,
      climbing: false,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    },
    {
      name: "Het Lab",
      coordinates: [4.851343, 52.39238460000001],
      city: "Amsterdam",
      country: "Netherlands",
      boulder: true,
      climbing: false,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    },
    {
      name: "Vertigo climbing wall",
      coordinates: [-9.102005999999999, 38.739997],
      city: "Lisbon",
      country: "Portugal",
      boulder: true,
      climbing: false,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    },
    {
      name: "Mile End Climbing Wall",
      coordinates: [-0.0386494, 51.5291879],
      city: "London",
      country: "England",
      boulder: true,
      climbing: false,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    },
    {
      name: "Magic Mountain",
      coordinates: [13.3830962802915, 52.5500227302915],
      city: "Berlin",
      country: "Germany",
      boulder: true,
      climbing: true,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    },
    {
      name: "Neoliet",
      coordinates: [6.0075985, 50.8793841],
      city: "Heerlen",
      country: "Netherlands",
      boulder: false,
      climbing: true,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima mollitia voluptatem, ut soluta nisi sit ducimus iure illum accusantium molestias non veritatis quis, consequatur quibusdam corrupti et nostrum sint? Eum!"
    }
  ],
  filter: {
    type: "all",
    string: ""
  }
};

export const locationReducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.addFilter:
      return updateObject(
        { ...state },
        { filter: updateObject(state.filter, { [action.catg]: action.val }) }
      );
    case types.selectLocation:
      return updateObject({ ...state }, { location: action.val });
    case types.unSelectLocation:
      return updateObject({ ...state }, { location: {} });
    default:
      return state;
  }
};
