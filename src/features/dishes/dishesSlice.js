import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useGetDishesByFilterQuery } from "../../services/apiSlice";

const initialState = {
  dishes: [],
  dish: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    getRandom: (state, { payload }) => {
      console.log("getting random");

      const shuffled = [...payload].sort(() => 0.5 - Math.random());
      state.dishes = shuffled.slice(0, 9);
    },
    getDishes: (state, { payload }) => {
      state.dishes = payload;
    },
    getDish: (state, { payload }) => {
      state.dish = payload;
    },
  },
});
export const { getRandom, getDishes, getDish } = dishesSlice.actions;
export default dishesSlice.reducer;
