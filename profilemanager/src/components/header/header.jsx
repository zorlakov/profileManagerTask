import React, { Component } from 'react';
//import burgerMenu from '../../assets/burgermenu.svg';
import menuIcon from '../../assets/menuIcon.svg';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={menuIcon} className='menu-icon' alt='bill' />

        <div className='user-info'>
          <div className='user-initials-box'>JD</div>
          <p className='user-name'>John Doe</p>
        </div>
      </div>
    );
  }
}
