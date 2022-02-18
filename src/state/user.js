import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", () => {
  return axios.post("/api/login").then((r) => r.data);
});

export const addToFavorites = createAsyncThunk(
  "ADD_TO_FAVORITES",
  (flight, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .put(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
      .then(() => flight);
  }
);

export const removeFromFavorites = createAsyncThunk(
  "REMOVE_FROM_FAVORITES",
  (flight, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in"); // this should be imposible
    return axios
      .delete(`/api/favorites?userId=${user.id}&flightId=${flight.id}`)
      .then(() => flight);
  }
);

const userReducer = createReducer([], {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [addToFavorites.fulfilled]: (state, action) => {
    state.favorites.push(action.payload);
  },
  [removeFromFavorites.fulfilled]: (state, action) => {
    state.favorites = state.favorites.filter(
      (fav) => fav.id !== action.payload.id
    );
  },
});

export default userReducer;
