import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {userPosition} from "./UserPosition";

const Map = (props) => {
    //centered on the bus stop by the UNT union
    const { latitude, longitude, accuracy, error } = userPosition(true);    //centered on the bus stop by the UNT union
    const [center, setCenter] = useState({lat: 33.211073, lng: -97.146241});
    const [zoom, setZoom] = useState(16);
    return (
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k', language: 'en'}}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <Marker
                    lat={latitude}
                    lng={longitude}
                    name="My Marker"
                    color="blue"
                />
            </GoogleMapReact>
        </div>
    );
}
export default Map;