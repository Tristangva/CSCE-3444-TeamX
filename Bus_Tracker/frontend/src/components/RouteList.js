import React from 'react';

const RouteList = (props) => {
    const stops = props.stops;
    const listItems = stops.map((stop) =>
    <div className='stopTile' key={stop.toString()}>
      {stop}
    </div>
    );
    return (
        <div> {listItems} </div>
    );
  };

  export default RouteList;