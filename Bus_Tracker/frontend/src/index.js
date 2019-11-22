import App from "./components/App"
import ReactDOM from "react-dom";
import React from "react";
import './components/App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;
//serviceWorker.unregister();