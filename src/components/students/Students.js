import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const classes = useStyles();
  const students = useSelector((state) => state.student.students);

  return (
    <>
      <Grid spacing={2} container>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
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
  );
};

export default Students;
