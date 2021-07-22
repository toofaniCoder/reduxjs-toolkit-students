import Alert from "@material-ui/lab/Alert";

const ErrorBox = ({ message }) => {
  return (
    <Alert variant="filled" severity="error">
      {message}
    </Alert>
  );
};

export default ErrorBox;
