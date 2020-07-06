import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit-icons";
import "../src/utilities/moment-locale";

ReactDOM.render(<App />, document.getElementById("root"));
