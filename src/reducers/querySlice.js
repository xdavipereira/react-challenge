import { createSlice } from "@reduxjs/toolkit";

export const selectQueryValues = (state) => state.query;

const initialState = {
  maxResults: 10,
  query: '',
  startIndex: 0,
  filter: 'intitle'
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addQuery(state, action) {
      state.startIndex = action.payload.startIndex;
      state.maxResults = action.payload.maxResults;
      state.filter = action.payload.filter;
      state.query = action.payload.query;
    }
  }
});

export const { addQuery } = querySlice.actions;

export default querySlice.reducer;
