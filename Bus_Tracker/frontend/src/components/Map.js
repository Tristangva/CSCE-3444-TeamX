import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {userPosition} from "./UserPosition";

class Map extends React.Component {
    constructor(props) {
        const { latitude, longitude, accuracy, error } = userPosition(true);    //centered on the bus stop by the UNT union
        const [center, setCenter] = useState({lat: 33.211073, lng: -97.146241});
        const [zoom, setZoom] = useState(16);
  }
    static defaultProps = {
    const [center, setCenter] = useState({lat: 33.211073, lng: -97.146241});
    zoom: 16
  };

    render(){
        const data =[   {"name": "2384098", "color":"green", "lat": 33.2147452, "lng":-97.1579706},
                        {"name": "2394646", "color":"green", "lat": 33.211193, "lng":-97.146198},
                        {"name": "838961", "color":"green", "lat": 33.215695, "lng":-97.139411},
                        {"name": "838962", "color":"green", "lat": 33.21570111, "lng":-97.14362844},
                        {"name": "838963", "color":"green", "lat": 33.215747, "lng":-97.146264},
                        {"name": "838964", "color":"green", "lat": 33.21573087, "lng":-97.14945763},
                        {"name": "838965", "color":"green", "lat": 33.21576901, "lng":-97.15388529},
                        {"name": "838966", "color":"green", "lat": 33.21579013, "lng":-97.15727745},
                        {"name": "838967", "color":"green", "lat": 33.2158306, "lng":-97.1596222},
                        {"name": "838993", "color":"green", "lat": 33.213498, "lng":-97.144214},
                        {"name": "839017", "color":"green", "lat": 33.24457836, "lng":-97.14051087},
                        {"name": "839093", "color":"green", "lat": 33.211442, "lng":-97.144268},
                        {"name": "839365", "color":"green", "lat": 33.211468833204, "lng":-97.15359322609},
                        {"name": "839366", "color":"green", "lat": 33.213668803, "lng":-97.151442641},
                        {"name": "839367", "color":"green", "lat": 33.213998, "lng":-97.148406},
                        {"name": "839371", "color":"green", "lat": 33.214719803, "lng":-97.159470643},
                        {"name": "839372", "color":"green", "lat": 33.213860803, "lng":-97.155108642},
                        {"name": "839373", "color":"green", "lat": 33.211860803, "lng":-97.155152642},
                        {"name": "839387", "color":"green", "lat": 33.253467, "lng":-97.153912},
                        {"name": "839397", "color":"green", "lat": 33.210993729, "lng":-97.146209593}];

        const stops = data.map((d) => <Marker color={d.color} key={d.name} lat={d.lat} lng={d.lng}>{d.name}</Marker>);

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact classname="map"
                  bootstrapURLKeys={{ key: 'AIzaSyDgYMarUznWd6jqCkxDh0GBnfnZ2DGsp0k' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                    {stops}
                </GoogleMapReact>
          </div>
        );
    }
}
}
export default Map;