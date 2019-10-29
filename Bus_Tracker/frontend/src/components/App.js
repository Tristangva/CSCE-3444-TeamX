import React from "react";
import RoutesSidebar from "./RoutesSidebar"
import TestButton from "./TestButton.js"
// import DataProvider from "./DataProvider";
// import Table from "./Table";
import MapMarkerController from "./MapMarkerController"

const App = () => (
    <div>
        <RoutesSidebar/>
        {/*<Table/>*/}
        <iframe id="map"
                src="https://www.google.com/maps/embed/v1/view?zoom=14&center=33.2075%2C-97.1526&key=AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k"
                />
    </div>
);

export default App;