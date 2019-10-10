import App from "./components/App"
import ReactDOM from "react-dom";
import React from "react";
import './components/App.css';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;