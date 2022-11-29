import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {},
  dropdownMenu: false
};

const NeverReducer = createSlice({
  name: "slicedbread",
  initialState: initialState,
  reducers: {
    showdropdown: (state) => {
      state.dropdownMenu = true;
    },
    hidedropdown: (state) => {
      state.dropdownMenu = false;
    },
  },
});

export const { showdropdown, hidedropdown } = NeverReducer.actions;
export default NeverReducer.reducer;
