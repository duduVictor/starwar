import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from "react-router-dom";

// pages

import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import Characters from "./pages/Charaters";
import Films from "./pages/Films";
import Planets from "./pages/Planets";


class App extends Component {
  render () {
  return  (
  <Router>
  <Switch>  
  <Route exact path="/" component={MainPage}/>
  <Route exact path="/404" component={NotFoundPage}/>
  <Route exact path="/Characters" component={Characters}/>
  <Route exact path="/Films" component={Films}/>
  <Route exact path="/Planets" component={Planets}/>
  <Redirect to="404"/>
  </Switch>
  </Router>

  );
}
}
export default App;
