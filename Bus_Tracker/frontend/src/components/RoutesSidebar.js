import React from 'react';
import RoutesButton from "./RoutesButton"

class RoutesSidebar extends React.Component {
    render(){
        return (
            <div id="Sidebar-and-Button">
                <div id="RoutesSidebar">
                    <button id="RoutesButton" className="RoundButton">Test</button>
                    <h3>List Of Routes</h3>
                </div>
            </div>
        );
    }
}

export default RoutesSidebar;