import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./reducers/rootReducer";
import { apiSlice } from "../services/apiSlice";
import dishesReducer from "../features/dishes/dishesSlice";
import userReducer from "../features/user/userSlice";
import filterOptionsReducer from "../features/filterOptions/filterOptionsSlice";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    dishes: dishesReducer,
    restaurants: restaurantsReducer,
    filterOptions: filterOptionsReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// const store = createStore(rootReducer);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { createWrapper } from 'next-redux-wrapper';
// import rootReducer from './reducers/rootReducer';

// const middleware = [thunk];

// const makeStore = () =>
//   createStore(rootReducer, compose(applyMiddleware(...middleware)));
// // const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

// export const wrapper = createWrapper(makeStore);
