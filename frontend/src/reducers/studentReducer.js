import { createReducer } from "@reduxjs/toolkit";
import {
  clearStudent,
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
  loading: false,
  error: null,
};

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllStudents.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      state.loading = false;
    })
    .addCase(fetchAllStudents.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(clearStudent, (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    })
    .addCase(createNewStudent.pending, (state) => {
      state.loading = true;
    })
    .addCase(createNewStudent.fulfilled, (state, action) => {
      state.students = [action.payload, ...state.students];
      state.loading = false;
    })
    .addCase(fetchStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchStudentById.fulfilled, (state, action) => {
      state.student = action.payload;
      state.loading = false;
    })
    .addCase(fetchStudentById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(updateStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateStudentById.fulfilled, (state, action) => {
      state.students = state.students.map((student) =>
        student._id == action.payload._id ? action.payload : student
      );
      state.loading = false;
    })
    .addCase(deleteStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteStudentById.fulfilled, (state, action) => {
      state.students = state.students.filter(
        (student) => student._id != action.payload
      );
      state.loading = false;
    });
});

export default studentReducer;
