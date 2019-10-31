import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends React.Component {
    static defaultProps = {
    center: {
      lat: 33.219348,
      lng: -97.146405
    },
    zoom: 16
  };
    render(){
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
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
                </GoogleMapReact>
          </div>
        );
    }
}

export default Map;