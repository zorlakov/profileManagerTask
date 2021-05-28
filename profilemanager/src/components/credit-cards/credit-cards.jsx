import React, { Component } from 'react';
import './credit-cards.css';
import TextBox from '../../components/text-box/text-box';

export default class CreditCards extends Component {
  render() {
    const info =
      'Select a valid credit card for your Balance account or add a new card by clicking add new card and filling out the required card information on the left. New card can be selected after being added on the list below.';
    const title = 'Your credit cards';
    return (
      <div className='infopage'>
        <div className='cards-info'>
          <TextBox className='text-info' info={info} title={title} />
          <p>add new card</p>
        </div>
        <form className='cards-form'>
          <div className='cards-group'>
            <label className='input-label'>Card number</label>
            <input
              className='cardname-input input'
              type='number'
              name='number'
            />
          </div>
          <div className='expiration-info'>
            <div className='cards-group'>
              <label className='input-label'>Expiration month</label>
              <input
                className='expiration-input input'
                type='number'
                name='month'
              />
            </div>
            <div className='cards-group'>
              <label className='input-label'>Expiration year</label>
              <input
                className='expiration-input input'
                type='number'
                name='year'
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
