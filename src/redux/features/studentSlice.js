import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentAdapter = createEntityAdapter();
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

export const studentSlice = createSlice({
  name: "student",
  initialState: studentAdapter.getInitialState(),
  reducers: {
    addStudent: studentAdapter.addOne,
    updateStudent: studentAdapter.updateOne,
    deleteStudent: studentAdapter.removeOne,
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
