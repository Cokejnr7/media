import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photoApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),

  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: `/photos/?album=${album}.id`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery } = photoApi;
