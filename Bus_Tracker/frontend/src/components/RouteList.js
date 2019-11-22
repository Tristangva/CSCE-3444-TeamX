import React from 'react';

const RouteList = (props) => {
    const stops = props.stops;
    const listItems = stops.map((stop) =>
    <li key={stop.toString()}>
      {stop}
    </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  };

  export default RouteList;