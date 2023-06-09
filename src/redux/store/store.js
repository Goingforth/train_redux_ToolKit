import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducer/slice/counterSlice";
const store = configureStore({
  reducer: counterReducer,
});
export default store;
