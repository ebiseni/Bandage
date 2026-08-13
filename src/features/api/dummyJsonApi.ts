import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductsResponse } from "../../types/product";

export const dummyJsonApi = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponse,
      { limit?: number; skip?: number }
    >({
      query: ({ limit = 10, skip = 0 }) =>
        `products?limit=${limit}&skip=${skip}`,
      // This merges incoming pagination data with existing data for our "Load More" feature
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCacheData, responseData, { arg }) => {
        if (arg.skip === 0) {
          return responseData;
        }
        currentCacheData.products.push(...responseData.products);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = dummyJsonApi;
