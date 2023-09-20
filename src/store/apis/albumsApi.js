import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// creating an api automatically generates a slice,thunk and hook
export const albumsApi = createApi({
  // this identifies the reducer for the api
  reducerPath: "albums",
  // this enables the api to know how and where to send requests
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: ["Album"],
        // query is a function that returns parameters for a request
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: ["Album"],
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

// creates a new hook useFetchAlbumsQuery

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
