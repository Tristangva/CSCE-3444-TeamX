import React from "react";
import RoutesSidebar from "./RoutesSidebar"
import TestButton from "./TestButton.js"
// import DataProvider from "./DataProvider";
// import Table from "./Table";
import {initMap} from "./MapMarkerController"

class App extends React.Component {

    render(){

        return(
            <div>
                <RoutesSidebar/>
                {/*<Table/>*/}
                <iframe id="map"
                        src="https://www.google.com/maps/embed/v1/view?zoom=14&center=33.2075%2C-97.1526&key=AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k"
                        />
                {/*<div id="map"></div>*/}
                {/*<script async defer*/}
                {/*        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap">*/}
                {/*</script>*/}
            </div>
        )
    }
}

export default App;