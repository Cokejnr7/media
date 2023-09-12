import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/usersSlice";

const store = configureStore({ reducer: { users: userReducer } });

export default store;
