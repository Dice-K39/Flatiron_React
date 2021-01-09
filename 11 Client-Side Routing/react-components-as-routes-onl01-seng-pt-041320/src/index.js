import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import Messages from "./Messages";
import Signup from "./Signup";
// Step 1: Import react-router functions.
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

// Step 2: Changed to have router coordinate what is displayed
ReactDOM.render
(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')

  // <Home />,
  // document.getElementById('root')
);
