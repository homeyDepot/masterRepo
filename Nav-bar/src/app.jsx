import React, { Component } from "react";
import '../dist/style.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="#Store Finder"></a>
          <a className="Help">Help</a>
          <a className="For the Pro">Track Order</a>
          <a className="Favorites">Favorites</a>
          <a className="Credit Services">Credit Services</a>
          <a className="Gift Cards">Gift Cards</a>
          <a className="For the Pro">For the Pro</a>
          <a className="Truck & Tool Rental">Truck & Tool Rental</a>
          <a className="Help">Store Finder</a>
        </div>
        <div>
          <img className="logo" src={"./img/home_repo_logo.jpg"} />
        </div>
        <container>
          <div className="mainform">
            <form
              className="mainform"
              onSubmit={() => {
                console.log("click");
              }}
            />
            <input
              type="text"
              id="headerSearch"
              placeholder="What can we help you find today?"
              size="100"
            />
          </div>
          <img className="searchButton" src={"./img/searchButton.png"} />
        </container>
        <div className="MyAccount">
          <a className="link">My Account</a>
        </div>
        <div>
          <img className="AccountIcon" src={"./img/myAccountIcon.png"} />
        </div>
        <div className="cart">Cart | 0 items</div>
        <img className="Mycart" src={"./img/cartIcon.png"} />
      </div>
    );
  }
}

export default Header;
