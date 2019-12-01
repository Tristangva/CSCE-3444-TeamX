import React from 'react';

const RouteList = (props) => {
    let stops = props.stops;
    let listItems = stops.map((stop) =>
    <div key={stop.toString()}>
      {stop}
    </div>
    );
    return (
        <div> {listItems} </div>
    );
  };

  export default RouteList;