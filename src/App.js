import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";

import { Layout } from "./components/Layout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
