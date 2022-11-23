import { configureStore } from "@reduxjs/toolkit";
import { stockApi } from "../services/stockApi";
import { fnoApi } from "../services/fnoApi";
import { futuresApi } from "../services/futuresApi";
import { optionsApi } from "../services/optionsApi";

export default configureStore({
  reducer: {
    [stockApi.reducerPath]: stockApi.reducer,
    [fnoApi.reducerPath]: fnoApi.reducer,
    [futuresApi.reducerPath]: futuresApi.reducer,
    [optionsApi.reducerPath]: optionsApi.reducer,
  },
});
