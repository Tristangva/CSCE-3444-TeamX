import React from 'react';

let RouteList = (props) => {
    let stops = props.stops;
    let listItems = stops.map((stop) =>
    <li key={stop.toString()}>
      {stop}
    </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  };

  export default RouteList;