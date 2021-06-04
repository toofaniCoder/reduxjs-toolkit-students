import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./theme";

import Students from "./components/students/Students";
import Student from "./components/students/Student";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/students/create" component={AddStudent} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/students/:id/edit" component={EditStudent} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
