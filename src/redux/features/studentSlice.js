import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});

export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

export const studentSlice = createSlice({
  name: "student",
  initialState: studentAdapter.getInitialState(),
  reducers: {
    addStudent: {
      reducer: studentAdapter.addOne,
      prepare: (data) => {
        return { payload: { createdAt: Date.now(), ...data } };
      },
    },
    updateStudent: studentAdapter.updateOne,
    deleteStudent: studentAdapter.removeOne,
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
