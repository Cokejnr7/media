import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/usersSlice";
import { fetchUsers } from "./thunk/fetchUsers";
import { addUser } from "./thunk/addUser";

const store = configureStore({ reducer: { users: userReducer } });

export default store;
export { fetchUsers, addUser };
