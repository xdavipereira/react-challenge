import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
