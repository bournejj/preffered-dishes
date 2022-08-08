import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: (query) => (query.length > 0 ? `/dishes${query}` : "/dishes"),
    }),
    getDishById: builder.query({
      query: (id) => `/dishes/${id}`,
    }),
    getRestaurantById: builder.query({
      query: (id) => `/restaurants/${id}`,
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useGetDishesQuery,
  useGetDishByIdQuery,
  useGetRestaurantByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = apiSlice;
