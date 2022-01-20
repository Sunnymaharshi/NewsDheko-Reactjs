import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={8}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={8}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  pageSize={8}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={8}
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={8}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={8}
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={8}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
