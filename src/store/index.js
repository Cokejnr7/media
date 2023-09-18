import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/usersSlice";
import { fetchUsers } from "./thunk/fetchUsers";
import { addUser } from "./thunk/addUser";
import { removeUser } from "./thunk/removeUser";

const store = configureStore({ reducer: { users: userReducer } });

export default store;
export { fetchUsers, addUser, removeUser };
