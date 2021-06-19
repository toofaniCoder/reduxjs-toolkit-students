import { createReducer } from "@reduxjs/toolkit";
import {
  findStudent,
  clearStudent,
  createStudent,
  updateStudent,
  removeStudent,
} from "../actions/studentAction";

const initialState = {
  students: [
    {
      id: 1,
      firstName: "Himadri",
      lastName: "Bhattathiri",
      email: "Chandramani_Talwar73@hotmail.com",
      phone: "+91620-320-4125",
      address: "474 Banerjee Fords",
    },
    {
      id: 2,
      firstName: "Subhasini",
      lastName: "Bhattacharya",
      email: "Chetan17@yahoo.co.in",
      phone: "+91953-928-4930",
      address: "52520 Bhisham Brooks",
    },
    {
      id: 3,
      firstName: "Daevika",
      lastName: "Ganaka",
      email: "Bharat89@gmail.com",
      phone: "+91-917-1416065",
      address: "78079 Patel Park",
    },
    {
      id: 4,
      firstName: "Tanya",
      lastName: "Trivedi",
      email: "Birjesh_Sinha3@hotmail.com",
      phone: "+91-644-6939697",
      address: "57761 Shreyashi Junctions",
    },
  ],
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
    .addCase(createStudent, (state, action) => {
      state.students = [action.payload, ...state.students];
    })
    .addCase(findStudent, (state, action) => {
      console.log(action.payload);
      state.student = state.students.find(
        (student) => student.id == action.payload
      );
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
    .addCase(updateStudent, (state, action) => {
      state.students = state.students.map((student) =>
        student.id == action.payload.id ? action.payload : student
      );
    })
    .addCase(removeStudent, (state, action) => {
      state.students = state.students.filter(
        (student) => student.id != action.payload
      );
    });
});

// const studentReducer = createReducer(initialState, {
//   [createStudent.type]: (state, action) => {
//     state.students = [action.payload, ...state.students];
//   },
//   [findStudent.type]: (state, action) => {
//     state.student = state.students.find(
//       (student) => student.id == action.payload
//     );
//   },
//   [clearStudent.type]: (state, action) => {
//     state.student = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       address: "",
//       phone: "",
//     };
//   },
//   [updateStudent.type]: (state, action) => {
//     state.students = state.students.map((student) =>
//       student.id == action.payload.id ? action.payload : student
//     );
//   },
//   [removeStudent.type]: (state, action) => {
//     state.students = state.students.filter(
//       (student) => student.id != action.payload
//     );
//   },
// });

export default studentReducer;
