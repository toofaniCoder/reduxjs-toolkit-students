import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const clearStudent = createAction("student/clear");

export const fetchAllStudents = createAsyncThunk(
  "students/fetchAllStudents",
  async (student, thunkApi) => {
    try {
      if (thunkApi.getState().student.students.length > 0) {
        return thunkApi.getState().student.students;
      }
      const { data } = await axios.get("/students");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
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
  async (studentId, thunkApi) => {
    try {
      const { data } = await axios.get(`/students/${studentId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
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
  async (studentId, thunkApi) => {
    try {
      await axios.delete(`/students/${studentId}`);
      return studentId;
    } catch (error) {
      console.log(error.response);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
