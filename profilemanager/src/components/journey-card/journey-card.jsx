import React, { Component } from 'react';
import './journey-card.css';

export default class JourneyCard extends Component {
  render() {
    return (
      <div className='journey-card'>
        <p className='journey-number'>{this.props.number}</p>
        <p className='journey-text'>{this.props.text}</p>
      </div>
    );
  }
}
