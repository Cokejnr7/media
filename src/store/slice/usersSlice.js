import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers";
import { addUser } from "../thunk/addUser";
import { removeUser } from "../thunk/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    });
  },
});

export const userReducer = usersSlice.reducer;
