import React from 'react';
import RoutesButton from "./RoutesButton"
import Click_Route from "./routes.js"

class RoutesSidebar extends React.Component {
    render(){
        return (
            <div id="Sidebar-and-Button">
                <div id="RoutesSidebar">
                    <RoutesButton/>
                    <h1>List of Routes</h1>
                </div>
                <div>
                    <Click_Route routeName="Discovery Park" stops={["test"]}/>
                    <Click_Route routeName="Some Route" stops={["stop1", "stop2"]}/>
                </div>
            </div>
        );
    }
}

export default RoutesSidebar;