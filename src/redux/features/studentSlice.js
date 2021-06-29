import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentAdapter = createEntityAdapter();
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

export const studentSlice = createSlice({
  name: "student",
  initialState: studentAdapter.getInitialState(),
  reducers: {
    addStudent: (state, action) => {
      studentAdapter.addOne(state, action.payload);
    },
    updateStudent: (state, action) => {
      const { id, ...rest } = action.payload;
      console.log(id, rest);
      studentAdapter.updateOne(state, { id, changes: rest });
    },
    deleteStudent: (state, action) => {
      studentAdapter.removeOne(state, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
