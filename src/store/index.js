import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/usersSlice";
import { fetchUsers } from "./thunk/fetchUsers";
import { addUser } from "./thunk/addUser";
import { removeUser } from "./thunk/removeUser";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

import {
  photoApi,
  useAddPhotoMutation,
  useFetchPhotosQuery,
  useRemovePhotoMutation,
} from "./apis/photosApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photoApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
export {
  fetchUsers,
  addUser,
  removeUser,
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
  useAddPhotoMutation,
  useFetchPhotosQuery,
  useRemovePhotoMutation,
};
