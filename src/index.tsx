import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResumeProvider from "./context/resume";
import Router from "./router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          pauseOnHover
          style={{ color: "#1b262c" }}
        />
        <Router />
      </ResumeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
