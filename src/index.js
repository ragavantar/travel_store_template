import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import PercentageLoader from "./components/PercentageLoader";

const App = React.lazy(() => import("./App"));

const Loading = <div style={{ color: "gray" }}>Loading ...</div>;

ReactDOM.render(
  <div>
    <PercentageLoader>
      <React.Suspense fallback={Loading}>
        <App />
      </React.Suspense>
    </PercentageLoader>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
