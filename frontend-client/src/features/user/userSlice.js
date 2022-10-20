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

      const { user, token } = action.payload;
  
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.token;
     
    },
    logOutUser: (state, action) => {

      state.user = '';
      state.accessToken = '';

    },
  },
});
export const { setCredentials, logOutUser } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
