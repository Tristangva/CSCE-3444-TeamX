import React from "react";
import RoutesSidebar from "./RoutesSidebar";
import TestButton from "./TestButton.js"
import UserPosition from "UserPosition";
import geolocated, from "react-geolocated"

// import DataProvider from "./DataProvider";
// import Table from "./Table";


const App = () => (
    <div>
        <RoutesSidebar/>
        <UserPosition/>
    </div>
);

export default App;