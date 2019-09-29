import React from "react";
import ReactDOM from "react-dom";
import TestButton from "./TestButton.js"
import './App.css';
// import DataProvider from "./DataProvider";
// import Table from "./Table";


const App = () => (
    <div className="is-warning">
        <div>
            <h1> Hello World </h1>
        </div>
        <TestButton/>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Jon made all of this with React
                    </h1>
                    <h2 className="subtitle">
                        With the help of styling from Bulma
                    </h2>
                </div>
            </div>
        </section>
        <section className="hero is-link is-fullheight is-fullwidth">
            <div className="hero-body is-danger has-text-centered">
                <h1>Test</h1>
            </div>
        </section>
    </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;