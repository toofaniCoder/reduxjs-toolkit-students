import { Paper, Typography } from "@material-ui/core";
import { clearStudent, fetchStudentById } from "../../actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../layout/Loader";
import ErrorBox from "../layout/ErrorBox";

const Student = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentById(match.params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [dispatch, match]);

  const { student, loading, error } = useSelector((state) => state.student);
  const { firstName, lastName, email, address, phone } = student;
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox message={error.message} />
      ) : (
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
      )}
    </>
  );
};

export default Student;
