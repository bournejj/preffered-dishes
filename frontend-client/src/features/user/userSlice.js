import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  accessToken: [],
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action)  => 
    
    {
console.log(action.payload)
      const { user, token } = action.payload;

      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});
export const { setCredentials, logOut } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
