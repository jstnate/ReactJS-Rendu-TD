import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://iim.etherial.fr" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ["products"],
    }),
    getProductComments: builder.query({
      query: (id) => `products/${id}/comments`,
      providesTags: ["comments"],
    }),
    createComment: builder.mutation({
      query: (data) => ({
        url: `/products/${data.id}/comments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCommentsQuery,
  useCreateCommentMutation,
} = productAPI;
