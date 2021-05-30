import React, { Component } from 'react';
import './canceled-page.css';
import CancelledImg from '../../assets/cancelled.png';

export default class CanceledPage extends Component {
  render() {
    return (
      <div className='canceled-page'>
        <img src={CancelledImg} alt='canceled' className='canceled-image' />
        <div className='canceled-text-info'>
          <p className='info-cancel main'>You have cancelled your subscription</p>
          <p className='info-cancel secondary'>
            If you wish to continue using our platform please renew your
            subscription
          </p>
        </div>
      </div>
    );
  }
}
