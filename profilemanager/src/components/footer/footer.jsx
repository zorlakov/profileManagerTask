import React, { Component } from 'react';
import './footer.css';

export default class footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span className='footer-text'>
          Terms &amp; Conditions | Privacy policy
        </span>
        <span className='footer-text'>Version 1.0.2</span>
      </div>
    );
  }
}
