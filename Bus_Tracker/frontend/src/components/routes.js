import React from 'react';
import GoogleMapReact from 'google-map-react';

//For each route, the name will be clickible

class Click_Route extends React.Component {

    handleClick(){
        const menu = document.getElementById("Route clicked");
        menu.classList.toggle('click')
    }


    render() {
        return(
            //button should have text change for each route
            <button id="Click_Route" className="Button" onClick={() => this.handleClick()}>
                Discovery Park
            </button>
        )
    }
}

export default Click_Route;