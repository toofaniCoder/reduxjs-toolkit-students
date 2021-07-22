import { Paper, Typography } from "@material-ui/core";
import { findStudent, clearStudent } from "../../actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Student = ({ match }) => {
  const dispatch = useDispatch();
  // student id
  console.log(match.params.id);
  useEffect(() => {
    dispatch(findStudent(match.params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [dispatch, match]);

  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, address, phone } = student;
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>
    </Paper>
  );
};

export default Student;
