import React, { Component } from 'react';
import '../stylesheets/header.css';
import icon from '../images/icon.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass= this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    
  }

  render() {
    return (
      <div className="header-menu">
        <ul className="header-bar">
          <li>&nbsp;<img className="icon" src={icon}/></li>
          <li><a href="#home">PEPPA FILMTOPIA</a></li>
          <li className="user-mgmt"><a href="#signup">Sign Up</a></li>
          <li className="user-mgmt"><a href="#login">Log In</a></li>
        </ul>
        <ul className="navi-bar">
          <li><a className={this.state.active ? 'tab-active': null} 
                 onClick={this.toggleClass}  href="#home">Home</a></li>
          <li><a href="#discover">Discover</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#bs">Best Sellers</a></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">Favorites ❤</a>
            <div className="dropdown-content">
              <a href="#">Likes</a>
              <a href="#">Comments</a>
              <a href="#">Marks</a>
            </div>
          </li>
        </ul>
      <div className="button_box2">
        <form className="form-wrapper-2 cf">
              <input type="text" placeholder="Search movies here..." required></input>
            <button type="submit">Search</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Header;