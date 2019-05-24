import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const App = React.lazy(() => import("./App"));

const Loading = <div style={{ color: "gray" }}>Loading ...</div>;

ReactDOM.render(
  <React.Suspense fallback={Loading}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
