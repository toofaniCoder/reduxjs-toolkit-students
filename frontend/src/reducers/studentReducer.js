import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAllStudents,
  createNewStudent,
  fetchStudentById,
  updateStudentById,
  deleteStudentById,
} from "../actions/studentAction";

const initialState = {
  students: [],
  student: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  },
};

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
    .addCase(createNewStudent.fulfilled, (state, action) => {
      state.students = [action.payload, ...state.students];
    })
    .addCase(fetchStudentById.fulfilled, (state, action) => {
      state.student = action.payload;
    })
    .addCase(updateStudentById.fulfilled, (state, action) => {
      state.students = state.students.map((student) =>
        student._id == action.payload._id ? action.payload : student
      );
    })
    .addCase(deleteStudentById.fulfilled, (state, action) => {
      state.students = state.students.filter(
        (student) => student._id != action.payload
      );
    });
});

export default studentReducer;
