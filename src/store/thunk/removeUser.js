import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("user/delete", async (user) => {
  const response = await axios.delete("http://localhost:3005/users/" + user.id);
  return user.id;
});
