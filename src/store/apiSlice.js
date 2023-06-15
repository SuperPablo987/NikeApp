import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// okos machine
const baseUrl = "http://192.168.68.107:3000";

// const baseUrl = "http:localhost:3000";

export const apiSlice = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`
        }),
    }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;