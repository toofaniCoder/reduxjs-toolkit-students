import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/studentSlice";

export default configureStore({
  reducer: {
    student: StudentReducer,
  },
});
