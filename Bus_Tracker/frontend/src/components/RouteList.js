import React from 'react';

const RouteList = (props) => {
    let stops = props.stops;
    let listItems = stops.map((stop) =>
    <div key={stop.toString()}>
      {stop}
    </div>
    );
    return (
        <div className="stopTile"> {listItems} </div>
    );
  };

  export default RouteList;