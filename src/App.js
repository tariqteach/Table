import Home from "./pages/Home.js";
import About from "./pages/About.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
        </Switch>
      </Router>
    </>
  );
}
