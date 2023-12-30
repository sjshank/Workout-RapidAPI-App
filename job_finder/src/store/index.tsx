import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import jobReducer from "../features/job/jobSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    job: jobReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
