import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {},
};

const NeverReducer = createSlice({
  name: "slicedbread",
  initialState: initialState,
  reducers: {
    changeLocation: (state) => {
      state.location = {};
    },
  },
});

export const { changeLocation } = NeverReducer.actions;
export default NeverReducer.reducer;
