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

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
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
};
