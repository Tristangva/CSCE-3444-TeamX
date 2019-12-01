import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
//import {userPosition} from "./UserPosition";
import Marker from './Marker';
import RoutesButton from './RoutesButton';
import axios from "axios";
import App from "./App";
//import RouteProvider from "Providers";


class Map extends React.Component {

    //constructor for each stop location
    constructor(props) {
        super(props);
        this.state = {
          stopTemp: {
              stop_name:"",
              color:"",
              lat:"",
              lng:""
          },
            //data to display
            stopData: [],
            stopsToDisplay: []

        };

        this.UpdateMarkers = this.UpdateMarkers.bind(this)
    }
    //default center
    static defaultProps = {
        center: {
          lat: 33.211073,
          lng: -97.146241
        },
        //centerAroundCurrentLocation: false,
        zoom: 16
      };
    //for component to mount
    componentDidMount() {
        this.stopList();
        this.routeList()
      }
      //gets data from JSON using axios
    stopList = () => {
        axios
          .get("/api/stops/")
          .then(res => this.setState({ stopData: res.data }))
          .catch(err => console.log(err));
      };

    routeList = () => {
         axios
          .get("/api/routes/")
          .then(res => this.setState({ routeD: res.data }))
          .catch(err => console.log(err));
    };

    //on user position tutorial
    UpdateMarkers() {

    }

    //for user position
    userPosition = (watch = false, settings = LocationDefaultSettings = {
        enableHighAccuracy: false,
        timeout: Infinity,
        maximumAge: 0
        }) => {
      const [position, setPosition] = useState({});
      const [error, setError] = useState(null);

      const onChange = ({coords}) => {
        setPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      };

      const onError = (error) => {
        setError(error.message);
      };

      useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
          setError('Geolocation is not supported');
          return;
        }

        let watcher = null;
        if (watch) {
          watcher = geo.watchPosition(onChange, onError, settings);
        } else {
          geo.getCurrentPosition(onChange, onError, settings);
        }

        return () => watcher && geo.clearWatch(watcher);
      }, [settings]);

      return {...position, error};
    };   //centered on the bus stop by the UNT union*/


    render(){

        this.state.stopTemp.color = ""; // temp color is blank
        let stops = this.state.stopData.map((d) => <Marker color={this.state.stopTemp.color} key={d.stop_name} lat={d.latitude} lng={d.longitude}>{d.stop_name}</Marker>);
        //var { latitude, longitude, accuracy, error } = userPosition(true);    //centered on the bus stop by the UNT union

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

export default Map;

