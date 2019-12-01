import React from "react"
import RouteContext from './contexts';


class RouteProvider extends React.Component {

    state = {
        routeButton: {RouteName: "", colorOfRoute: "", stopsDisplayed: ""}
    };

    render() {
        //default is blank state
        return(
            <RouteContext.Provider
                value={
                    {routeButton: this.state.routeButton,
                        setRouteButton: (value) => this.setState({routeButton})
                    }
                }
            >
                {this.props.children}
            </RouteContext.Provider>
        );

    }

}

export default RouteProvider;

