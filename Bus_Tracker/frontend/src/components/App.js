import React from "react";
import RoutesSidebar from "./RoutesSidebar"
import TestButton from "./TestButton.js"
// import DataProvider from "./DataProvider";
// import Table from "./Table";
import Map from "./Map"

class App extends React.Component {

    render(){
        return(
            <div>
                <RoutesSidebar/>
                <Map/>
            </div>
        )
    }
}

export default App;