import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  clearStudent,
  fetchStudentById,
  updateStudentById,
} from "../../actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";

const EditStudent = ({ match }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const { student, loading } = useSelector((state) => state.student);
  useEffect(() => {
    dispatch(fetchStudentById(match.params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [dispatch, match]);

  useEffect(() => {
    reset(student);
  }, [reset, student]);

  const onSubmit = async (data) => {
    console.log(data);
    // dispatch your action for update student
    await dispatch(updateStudentById(data));
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    });
    history.push("/");
  };
  return (
    <div>
      {loading && <Loader />}
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button type="submit">Update Student</Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditStudent;
