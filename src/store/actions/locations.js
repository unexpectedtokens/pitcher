import * as types from "./actionTypes";
export const addFilter = data => {
  return {
    type: types.addFilter,
    catg: data.category,
    val: data.val
  };
};
