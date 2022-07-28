import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
});

export default restaurantsSlice.reducer;
