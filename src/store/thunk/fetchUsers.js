import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("https://localhost:3005/users");
  return response.data;
});
