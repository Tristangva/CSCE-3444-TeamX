import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          location: [
              {lat: 32.219348, lng: -97.146405}
          ]
        };

        this.UpdateMarkers = this.UpdateMarkers.bind(this)
  }
    static defaultProps = {
    center: {
      lat: 33.219348,
      lng: -97.146405
    },
    zoom: 16
  };

    UpdateMarkers() {

    }

    componentDidMount() {
      this.interval = setInterval(() => this.UpdateMarkers(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    render(){
        {
            var second = Math.floor(Date.now()/1000)
            console.log(second)
            if(second % 2 === 0){
                console.log("test 1!")
                var children = document.body.childNodes
            }
            else {
                console.log("test 2!")
            }
        }
        const data =[{"name":"test1", "lat":33.209348, "lng": -97.136405},{"name":"test2", "lat":33.229348, "lng": -97.156405}];
        const listItems = data.map((d) => <Marker color="red" key={d.name} lat={d.lat} lng={d.lng}>{d.name}</Marker>);
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact classname="map"
                  bootstrapURLKeys={{ key: 'AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                    <Marker id="testMarker"
                        lat={33.219348}
                        lng={-97.146405}
                        name="My Marker"
                        color="blue"
                    />
                    {listItems}
                </GoogleMapReact>
          </div>
        );
    }
}

export default Map;