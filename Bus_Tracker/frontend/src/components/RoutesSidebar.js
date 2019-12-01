import React from 'react';
import RoutesButton from "./RoutesButton"
import Click_Route from "./routes.js"
import axios from "axios";
//import RouteProvider from "Providers";

class RoutesSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeTemp: {
                name: "",
                color: "",
                stps: "",
            },
            routeData: []
        };
        //this.UpdateMarkers = this.UpdateMarkers.bind(this)
    }
    componentDidMount() {
        this.routeList()
      }
      //fetches JSON data
      routeList = () => {
         axios
          .get("/api/routes/")
          .then(res => this.setState({ routeData: res.data }))
          .catch(err => console.log(err));
    };
    render(){
        //template for each route button
        let routeButton = this.state.routeData.map((r) => <Click_Route key={r.id} routeName={r.name} stops={r.stps}>{r.name}</Click_Route>);

        return (
            <div id="Sidebar-and-Button">
                <RoutesButton/>
                <div id="RoutesSidebar">
                    <div id="SidebarTitle">
                        List of Routes
                    </div>
                    <div id="RouteList" className="Scrollable">
                        {routeButton}

                    </div>
                </div>
            </div>
        );
    }
}

export default RoutesSidebar;