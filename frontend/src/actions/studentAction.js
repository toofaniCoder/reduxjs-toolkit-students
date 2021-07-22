import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const clearStudent = createAction("student/clear");

export const fetchAllStudents = createAsyncThunk(
  "students/fetchAllStudents",
  async (student, thunkApi) => {
    if (thunkApi.getState().student.students.length > 0) {
      return thunkApi.getState().student.students;
    }
    const { data } = await axios.get("/students");
    return data;
  }
);

export const createNewStudent = createAsyncThunk(
  "students/createNewStudent",
  async (student) => {
    const { data } = await axios.post("/students", student);
    return data;
  }
);

export const fetchStudentById = createAsyncThunk(
  "students/fetchStudentById",
  async (studentId) => {
    const { data } = await axios.get(`/students/${studentId}`);
    return data;
  }
);

export const updateStudentById = createAsyncThunk(
  "students/updateStudentById",
  async (student) => {
    const { _id, ...rest } = student;
    const { data } = await axios.put(`/students/${_id}`, rest);

    return data;
  }
);

export const deleteStudentById = createAsyncThunk(
  "students/deleteStudentById",
  async (studentId) => {
    await axios.delete(`/students/${studentId}`);
    return studentId;
  }
);
