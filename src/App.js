import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="about" component={home} />
            <Route path="contact" component={home} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
