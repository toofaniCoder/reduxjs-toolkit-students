import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/studentReducer";

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
