import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import NeverReducer from "./index";

export const store = configureStore({
  reducer: {
    locationReducer: NeverReducer,
  },
});
