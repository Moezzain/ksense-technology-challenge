import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import UserPage from "views/UsersPage";
import UserPost from "views/UserPost";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/user/:id" element={<UserPost />} />
    </Routes>
  </Router>,
  // <Router history={hist}>
  //   <Route path="/" component={DataTables} />
  // </Router>,
  document.getElementById("root")
);
