import { createAction } from "@reduxjs/toolkit";

export const createStudent = createAction("student/create");
export const updateStudent = createAction("student/update");
export const removeStudent = createAction("student/remove");
