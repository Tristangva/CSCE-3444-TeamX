import React from 'react';
import RoutesButton from "./RoutesButton"
import Click_Route from "./routes.js"

class RoutesSidebar extends React.Component {
    render(){
        return (
            <div id="Sidebar-and-Button">
                <RoutesButton/>
                <div id="RoutesSidebar">
                    <div id="SidebarTitle">
                        List of Routes
                    </div>
                    <div id="RouteList" className="Scrollable">
                        <Click_Route routeName="Discovery Park" stops={["dp stop1", "dp stop2", "dp stop3"]}/>
                        <Click_Route routeName="Discovery Park" stops={["dp stop1", "dp stop2", "dp stop3"]}/>
                        <Click_Route routeName="Discovery Park" stops={["dp stop1", "dp stop2", "dp stop3"]}/>
                        <Click_Route routeName="Discovery Park" stops={["dp stop1", "dp stop2", "dp stop3"]}/>
                        <Click_Route routeName="Discovery Park" stops={["dp stop1", "dp stop2", "dp stop3"]}/>
                        <Click_Route routeName="Some Route" stops={["stop1", "stop2"]}/>
                        <Click_Route routeName="Some Route" stops={["stop1", "stop2"]}/>
                        <Click_Route routeName="Some Route" stops={["stop1", "stop2"]}/>
                        <Click_Route routeName="Some Route" stops={["stop1", "stop2"]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoutesSidebar;