import React from "react";
import "./App.css";

//Imported Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imported components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import About from "./components/About";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Switch>
          <Route>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
