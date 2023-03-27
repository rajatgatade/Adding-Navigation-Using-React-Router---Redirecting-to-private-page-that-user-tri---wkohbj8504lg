import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import LocationDisplay from './LocationDisplay';

function Home() {
  return <h2>You are home.</h2>;
}

function About() {
  return <h2>You are on the about page.</h2>;
}

function NoMatch() {
  return <h2>No match.</h2>;
}


function App() {
  return (
    <Router>
      <div id="main">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <LocationDisplay />
      </div>
    </Router>
  );
}

export default App;
