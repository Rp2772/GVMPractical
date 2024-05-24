import Hoc from "./hoc/Hoc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Hoc />
      <Switch>
        {routes().map((item) => {
          return <Route exact path={item.path} component={item.component} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
