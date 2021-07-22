import React, { useEffect } from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudents } from "../../actions/studentAction";
import Loader from "../layout/Loader";
import ErrorBox from "../layout/ErrorBox";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox message={error.message} />
      ) : (
        <>
          <Grid spacing={2} container>
            {students.map((student) => (
              <StudentItem key={student._id} student={student} />
            ))}
          </Grid>
          <Fab
            component={Link}
            to="/students/create"
            color="primary"
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        </>
      )}
    </>
  );
};

export default Students;
