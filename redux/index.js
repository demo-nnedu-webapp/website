import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdownMenu: false,
  modal: false,
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
    showModal: (state) => {
      state.modal = true;
    },
    hideModal: (state) => {
      state.modal = false;
    },
  },
});

export const { showdropdown, hidedropdown, showModal, hideModal } =
  NeverReducer.actions;
export default NeverReducer.reducer;
