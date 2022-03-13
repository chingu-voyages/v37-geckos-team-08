/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./dashboard";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Link to="/dashboard">dashboard</Link>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
