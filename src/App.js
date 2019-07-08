import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <main className="content">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/cadastrar" component={SignUp} />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
