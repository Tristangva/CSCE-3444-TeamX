import React from 'react';
import RouteList from './RouteList'
import GoogleMapReact from 'google-map-react';

//For each route, the name will be clickible

class Click_Route extends React.Component {
    constructor () {
        super()
        this.state = {
            hiddenRoute: true
        }
    }
      toggleHidden () {
          this.setState({
              isHidden: !this.state.isHidden
          })
      }
    render() {
        return(
            //button should have text change for each route
            <div>
                <button onClick={this.toggleHidden.bind(this)} >
                    {this.props.routeName}
                </button>
                {this.state.isHidden && <RouteList stops={this.props.stops}/>}
            </div>
        )
    }
}

export default Click_Route;