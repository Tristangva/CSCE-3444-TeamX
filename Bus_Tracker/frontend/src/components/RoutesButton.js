import React from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class RoutesButton extends React.Component {
    handleClick() {
        const menu = document.getElementById("RoutesMenu");
        menu.classList.toggle('slideout')
    }
  render() {
    return (
        <div className="RoutesButton">
          <button   className="button circle-button"
                    onClick={() => this.handleClick()}>
              <FontAwesomeIcon icon={faBars} />
          </button>

        </div>
    );
  }
}

export default RoutesButton;