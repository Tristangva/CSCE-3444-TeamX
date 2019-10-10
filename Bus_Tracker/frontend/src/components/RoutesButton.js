import React from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class RoutesButton extends React.Component {
    handleClick() {
        const menu = document.getElementById("Sidebar-and-Button");
        menu.classList.toggle('slideout')
    }
  render() {
    return (
      <button id="RoutesButton" className="RoundButton"
                onClick={() => this.handleClick()}>
          <FontAwesomeIcon icon={faBars} />
      </button>
    );
  }
}

export default RoutesButton;