import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = (props) => {
    const [center, setCenter] = useState({lat: 33.215079, lng: -97.133103 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={33.215079}
            lng={-97.133103}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;