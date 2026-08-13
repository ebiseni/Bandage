import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types/product";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getBestsellerProducts: builder.query<
      { products: Product[] },
      { limit?: number; skip?: number }
    >({
      query: ({ limit = 10, skip = 0 }) =>
        `products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetBestsellerProductsQuery } = productsApi;
