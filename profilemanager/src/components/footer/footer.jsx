import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return window.location.pathname === '/plan-canceled' ? (
      ''
    ) : (
      <div className='footer'>
        <span className='footer-text terms'>
          Terms &amp; Conditions | Privacy policy
        </span>
        <span className='footer-text version'>Version 1.0.2</span>
      </div>
    );
  }
}
