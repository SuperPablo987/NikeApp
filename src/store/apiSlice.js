import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// okos machine
const baseUrl = "http://192.168.68.110:3000";

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
        // orders
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'orders', 
                method: 'POST',
                body: newOrder
            })
        }),
        getOrder: builder.query({
            query: (ref) => `orders/${ref}`,
        }),
        // Payments
        createPaymentIntent: builder.mutation({
            query: (data) => ({
                url: 'payments/intents',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { 
    useGetProductQuery, 
    useGetProductsQuery, 
    useCreateOrderMutation, 
    useGetOrderQuery,
    useCreatePaymentIntentMutation 
} = apiSlice;