import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Random from "./components/Random"

import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/random" exact component={Random} />
        </Switch>
      </Router>
    )
  }
}

export default App
