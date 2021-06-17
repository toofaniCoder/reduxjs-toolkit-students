import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const classes = useStyles();
  return (
    <>
      <Grid spacing={2} container>
        {new Array(12).fill("").map((item, index) => (
          <StudentItem key={index} />
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
