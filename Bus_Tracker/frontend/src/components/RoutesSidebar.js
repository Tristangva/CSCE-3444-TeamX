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
                    <Click_Route/>
                </div>
            </div>
        );
    }
}

export default RoutesSidebar;