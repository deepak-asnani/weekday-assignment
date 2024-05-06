import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_FILTERS_VALUES } from "../constants";

const initialState = {
  filters: DEFAULT_FILTERS_VALUES,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter(state, action) {
      const { updatedFilters } = action.payload;
      state.filters = updatedFilters;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export const selectFilters = (state) => {
  console.log("state:- ", state);
  return state;
};

export default filtersSlice.reducer;
