import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/studentSlice";

const preloadedState = {
  student: {
    ids: [1, 2, 3, 4],
    entities: {
      1: {
        id: 1,
        firstName: "Himadri",
        lastName: "Bhattathiri",
        email: "Chandramani_Talwar73@hotmail.com",
        phone: "+91620-320-4125",
        address: "474 Banerjee Fords",
      },
      2: {
        id: 2,
        firstName: "Subhasini",
        lastName: "Bhattacharya",
        email: "Chetan17@yahoo.co.in",
        phone: "+91953-928-4930",
        address: "52520 Bhisham Brooks",
      },
      3: {
        id: 3,
        firstName: "Daevika",
        lastName: "Ganaka",
        email: "Bharat89@gmail.com",
        phone: "+91-917-1416065",
        address: "78079 Patel Park",
      },
      4: {
        id: 4,
        firstName: "Tanya",
        lastName: "Trivedi",
        email: "Birjesh_Sinha3@hotmail.com",
        phone: "+91-644-6939697",
        address: "57761 Shreyashi Junctions",
      },
    },
  },
};
export default configureStore({
  reducer: {
    student: StudentReducer,
  },
  preloadedState,
});
