import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.jsx";

import firebase from "firebase/app";
import config from "./config/config.jsx";

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
