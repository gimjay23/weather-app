import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imported components
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import DataHouse from "./components/DataHouse";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/datahouse" component={DataHouse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
