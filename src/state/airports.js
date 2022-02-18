import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getAirportsRequest = createAsyncThunk("AIRPORTS", () => {
  return axios.get("/api/airports").then((r) => r.data);
});

const airportReducer = createReducer([], {
  [getAirportsRequest.fulfilled]: (state, action) => action.payload,
});

export default airportReducer;
