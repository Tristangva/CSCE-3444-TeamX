import React from "react";
import RoutesSidebar from "./RoutesSidebar"
import TestButton from "./TestButton.js"
import Map from "./Map"
//import RouteProvider from "Providers";

class App extends React.Component {

    render(){
        //route provider goes between the RoutesSidebar and Map would be there if it worked
        return(

                <div>
                    <RoutesSidebar/>
                    <Map/>
                </div>

        )
    }
}

export default App;