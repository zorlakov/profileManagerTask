import React, { Component } from 'react';
import './text-box.css';

export default class TextBox extends Component {
  render() {
    return (
      <div className='text-box'>
        <p className='box-title'>{this.props.title}</p>
        <div className='information-box'>
          <span className='information-text'>{this.props.info}</span>
        </div>
      </div>
    );
  }
}
