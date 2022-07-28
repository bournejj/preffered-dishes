import { createSlice } from "@reduxjs/toolkit";
import { filterOptions } from "../../config/index.json";

const initialState = {
  filterOptions,
  query: "",
  searchQuery: "",
  apiQuery: "",
};

const filterOptionsSlice = createSlice({
  name: "filterOptions",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      console.log("yes");
      state.filterOptions = state.filterOptions.map((filter) =>
        filter.value === payload.value
          ? // transform the one with a matching value

            { ...filter, clicked: !payload.clicked }
          : // otherwise return original filter
            filter
      );
    },
    updateUrlQuery: (state) => {
      if (state.query.length > 0 && state.searchQuery.length > 0) {
        const filterQuery = state.query.slice(1);
        console.log(filterQuery);
        state.apiQuery = `?${state.searchQuery}&${filterQuery}`;
      } else if (state.query.length > 0) {
        state.apiQuery = state.query;
      } else if (state.searchQuery.length > 0) {
        state.apiQuery = `?${state.searchQuery}`;
      }
    },
    updateFilterQuery: (state, { payload }) => {
      console.log("updatingQuery");
      const q = [];
      const variable = payload;
      if (payload) {
        if (typeof variable === "string") {
          console.log("running1");
          // 👇️ this runs
          console.log("✅ type is string");
          q.push(`?${payload}`);
        } else {
          payload.forEach(function (each) {
            if (q.length <= 0) {
              console.log("running2");
              q.push(`?${each.value}`);
            } else {
              console.log("running3");
              q.push(`&${each.value}`);
            }
          });
        }
        state.query.filterOptions
          ? [...state.filterOptions, (state.query = q.join(""))]
          : (state.query = q.join(""));
      } else {
        console.log("updating search from filter");

        state.query = state.searchQuery;
      }
    },

    updateSearchQuery: (state, { payload }) => {
      let keys = Object.keys(payload).join("");
      const value = Object.values(payload).join("");
      keys += "?=";

      if (value.length > 1) {
        const search = (keys += value);
        state.searchQuery = search;
      } else {
        state.searchQuery = "";
      }
    },
  },
});

export const { update, updateFilterQuery, updateSearchQuery, updateUrlQuery } =
  filterOptionsSlice.actions;
export default filterOptionsSlice.reducer;
