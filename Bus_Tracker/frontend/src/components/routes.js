import React from 'react';
import RouteList from './RouteList'
import GoogleMapReact from 'google-map-react';

//For each route, the name will be clickible

// testing
const stops = ["first stop", "second stop", "third stop"];

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
                  Discovery Park
                </button>
                {this.state.isHidden && <RouteList stops={stops}/>}
            </div>
        )
    }
}

export default Click_Route;