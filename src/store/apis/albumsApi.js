import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  // this identifies the reducer for the api
  reducerPath: "albums",
  // this enables the api to know how and where to send requests
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
});
