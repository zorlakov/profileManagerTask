import React, { Component } from 'react';
import './credit-cards.css';
import TextBox from '../../components/text-box/text-box';
import CardSelected from '../../assets/cardSelected.svg';
import CardNormal from '../../assets/cardNormal.svg';

export default class CreditCards extends Component {
  render() {
    const info =
      'Select a valid credit card for your Balance account or add a new card by clicking add new card and filling out the required card information on the left. New card can be selected after being added on the list below.';
    const title = 'Your credit cards';
    return (
      <div className='page-cards'>
        <div className='cards-info'>
          <TextBox className='text-info' info={info} title={title} />

          <div className='cards-list'>
            <div className='single-card  add-card'>
              <p className='add-text'>+ Add new card</p>
            </div>
            <div className='single-card selected-card'>
              <img src={CardSelected} alt='selected' />
              <p className='card-text'>1234 5678 9012 3456</p>
              <p className='circle selected-circle'>
                <span className='check-yes'>&#10003;</span>
              </p>
            </div>
            <div className='single-card non-selected'>
              <img src={CardNormal} alt='normal' />

              <p className='card-text'>1234 5678 9012 3456</p>
              <p className='circle'></p>
            </div>
            <div className='single-card non-selected'>
              <img src={CardNormal} alt='normal' />

              <p className='card-text'>1234 5678 9012 3456</p>
              <p className='circle'></p>
            </div>
          </div>
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
