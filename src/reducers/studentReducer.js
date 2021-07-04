import { createReducer, createEntityAdapter } from "@reduxjs/toolkit";
import {
  createStudent,
  updateStudent,
  removeStudent,
} from "../actions/studentAction";

const studentAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

const intialState = studentAdapter.getInitialState();

const studentReducer = createReducer(intialState, (builder) => {
  builder
    .addCase(createStudent, studentAdapter.addOne)
    .addCase(updateStudent, studentAdapter.updateOne)
    .addCase(removeStudent, studentAdapter.removeOne);
});

export default studentReducer;
