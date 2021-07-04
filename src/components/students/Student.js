import { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { studentSelector } from "../../reducers/studentReducer";

const Student = ({ match }) => {
  const student = useSelector((state) =>
    studentSelector.selectById(state, match.params.id)
  );
  const { id, firstName, lastName, email, phone, address } = student;
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
