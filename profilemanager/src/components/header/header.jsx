import React, { Component } from 'react';
//import burgerMenu from '../../assets/burgermenu.svg';
import menuIcon from '../../assets/menuIcon.svg';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { displayMenu: false };
  }
  render() {
    return (
      <div className='header'>
        <img
          src={menuIcon}
          className='menu-icon mobile'
          alt='bill'
          onClick={() =>
            this.setState({ displayMenu: !this.state.displayMenu })
          }
        />
        {this.state.displayMenu ? (
          <div className='mobile-menu'>
            <Link to='/personal-info' className='mobile-item'>
              {' '}
              <p className='mobile-menu-option'>Personal info</p>{' '}
            </Link>
            <Link to='/credit-cards' className='mobile-item'>
              {' '}
              <p className='mobile-menu-option'>Credit card details</p>{' '}
            </Link>
            <Link to='/payment-plan' className='mobile-item'>
              {' '}
              <p className='mobile-menu-option'>Payment plan</p>{' '}
            </Link>
            <Link to='/billing' className='mobile-item'>
              {' '}
              <p className='mobile-menu-option'>Billing</p>{' '}
            </Link>
            <p className='mobile-menu-option footer-items'>
              Terms &amp; Conditions
            </p>{' '}
            <p className='mobile-menu-option footer-items'>Privacy policy</p>{' '}
            <p className='mobile-menu-option footer-items'>Version 1.0.2</p>{' '}
          </div>
        ) : (
          <div></div>
        )}

        {/*  <img src={menuIcon} className='menu-icon' alt='bill' /> */}
        <div className='user-info'>
          <div className='user-initials-box'>JD</div>
          <p className='user-name'>John Doe</p>
        </div>
      </div>
    );
  }
}
