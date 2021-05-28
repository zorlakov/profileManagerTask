import React, { Component } from 'react';
import './text-box.css';

export default class TextBox extends Component {
  render() {
    return (
      <div className='text-box'>
        <p className='box-title'>{this.props.title}</p>
        <div className='information-box'>
          <p className='information-text'>{this.props.info}</p>
        </div>
      </div>
    );
  }
}
