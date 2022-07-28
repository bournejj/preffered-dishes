import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: (query) => (query.length > 0 ? `/dishes${query}` : "/dishes"),
    }),
  }),
});

export const { useGetDishesQuery } = apiSlice;
