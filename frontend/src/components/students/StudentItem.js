import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudentById } from "../../actions/studentAction";

const StudentItem = ({ student }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, email, address, phone } = student;
  const handleDelete = () => {
    dispatch(deleteStudentById(_id));
  };
  return (
    <Grid xs={12} sm={6} lg={3} md={4} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" gutterBottom>
            {firstName} {lastName}
          </Typography>
          <IconButton component={Link} to={`/students/${_id}`}>
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{address}</Typography>
        <Button
          component={Link}
          to={`/students/${_id}/edit`}
          variant="outlined"
          startIcon={<EditIcon />}
        >
          edit
        </Button>
        <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
          delete
        </Button>
      </Paper>
    </Grid>
  );
};

export default StudentItem;
