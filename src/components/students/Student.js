import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { studentSelector } from "../../redux/features/studentSlice";

const Student = () => {
  const params = useParams();
  const student = useSelector((state) =>
    studentSelector.selectById(state, params.id)
  );

  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {student.firstName} {student.lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {student.phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.address}
      </Typography>
    </Paper>
  );
};

export default Student;
