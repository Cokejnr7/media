import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

export const photoApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),

  endpoints: (builder) => {
    return {
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: `/photos`,
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photo",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photoApi;
