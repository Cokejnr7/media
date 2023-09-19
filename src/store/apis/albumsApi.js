import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      fetchAlbums: builder.query({
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

export const { useFetchAlbumsQuery } = albumsApi;
