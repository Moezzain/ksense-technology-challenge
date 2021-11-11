import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import DataTables from "views/DataTablesPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/data-tables-page" />}
      />
      <Route path="/data-tables-page" component={DataTables} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
