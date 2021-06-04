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

const StudentItem = (props) => {
  const handleDelete = () => {
    // delete item code
    console.log("item deleted!");
  };
  return (
    <Grid sm={3} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" gutterBottom>
            Subroto Biswas
          </Typography>
          <IconButton component={Link} to="/students/100">
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">+91 111 1111 111</Typography>
        <Typography variant="caption">toofanicoder@example.com</Typography>
        <Typography variant="caption">Ranchi,Jharkhand</Typography>
        <Button
          component={Link}
          to="/students/100/edit"
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
