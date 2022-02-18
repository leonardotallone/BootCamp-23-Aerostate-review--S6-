import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getFlightsRequest = createAsyncThunk("FLIGHTS", () => {
  return axios.get("/api/flights").then((r) => r.data);
});

const flightsReducer = createReducer([], {
  [getFlightsRequest.fulfilled]: (state, action) => action.payload,
});

export default flightsReducer;
