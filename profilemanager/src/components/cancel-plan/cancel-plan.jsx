import React, { Component } from 'react';
import './cancel-plan.css';
import { Link } from 'react-router-dom';
import TextBox from '../text-box/text-box';
import JourneyCard from '../journey-card/journey-card';
export default class CancelPlan extends Component {
  render() {
    const info =
      'This is the payment plan section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button';
    const title = 'Payment plan';
    return (
      <div className='cancel-plan-main info'>
        <TextBox className='text-info' info={info} title={title} />
        <div className='cancelation-items'>
          <div className='farewell-message'>
            <p className='main-message message'>We are sorry to see you go</p>
            <p className='message'>
              Before you unsubscribe consider changing the payment plan. If you
              are uncertain which plan best suites your business do not hesitate
              to contact our support and we will do our best to assist you in
              choosing the right plan for you.{' '}
            </p>
          </div>

          <div className='journey-container'>
            <p className='cards-header'>OUR JOURNEY SO FAR</p>
            <div className='journey-cards-list'>
              <JourneyCard number={'4'} text={'PROJECTS'} />
              <JourneyCard number={'3'} text={'GATEWAYS'} />
              <JourneyCard number={'$14K'} text={'PAYMENTS'} />
            </div>
          </div>
          <div className='confirm-unsub'>
            <p className='main-message message'>
              Are you sure you want to unsubscribe?
            </p>
            <p className='message'>
              If you cancel your subscription you won’t be able to use any of
              the platform features and your payments will be discontinued.{' '}
            </p>
            <div className='cancel-buttons-options'>
              <Link to='/payment-plan'>
                <button className='select-cancel'>Cancel</button>
              </Link>
              <Link to='/plan-canceled'>
                <button className='select-cancel'>Confirm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
