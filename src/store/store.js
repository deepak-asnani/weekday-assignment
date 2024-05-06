import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/api";
import filtersReducer from "./filtersSlice";
import counterReducer from "./counterSlice.js";

// export const rootReducer = combineSlices(api.reducer, filtersReducer, counterReducer)

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
