import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './payment-option.css';

export default class PaymentOption extends Component {
  render() {
    return (
      <div className='option-card'>
        <div className='paymentinfo-main'>
          <img src={this.props.icon} className='payment-image' alt='option' />
          <p className='payment-option-text type'>{this.props.type}</p>

          <p className='payment-option-text price'>
            {this.props.price} <span className='monthly'>/ per month</span>
          </p>
        </div>
        <p className='payment-option-text description'>
          {this.props.description}
        </p>
        {this.props.selected ? (
          <div className='plan-buttons'>
            <button className='select-cancel selected'>Plan selected</button>
            <Link to='/confirm-cancelation'>
              <button className='select-cancel'>Cancel subscription</button>
            </Link>
          </div>
        ) : (
          <button className='select-cancel'>Select plan</button>
        )}
      </div>
    );
  }
}
