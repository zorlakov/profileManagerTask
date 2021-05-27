import React, { Component } from 'react';
import PersonalInfo from '../../assets/personalInfo.svg';
import CreditCard from '../../assets/creditCard.svg';
import Billing from '../../assets/billing.svg';
import PaymentPlan from '../../assets/paymentplan.svg';
import { Link } from 'react-router-dom';

import './basic-info.css';

export default class BasicInfo extends Component {
  render() {
    return (
      <div className='basic-info'>
        <div className='heading-text'>
          <h3 className='heading'>Your account</h3>
          <p className='info-text'>You can modify personal information here</p>

          <div className='info-box'>
            <div className='initials-circle'>JD</div>
            <div className='box-text'>
              <p className='box-name'>John Doe</p>
              <p className='contact-text'>john.doe@email.com</p>
              <p className='contact-text'>387 61 123 456</p>
            </div>
          </div>
        </div>
        <div className='menu-icons'>
          <Link className='menu-item' to='/personal-info'>
            <img
              src={PersonalInfo}
              alt='personal'
              className='menu-option'
              to='/personal-ifno'
            />
            <p className='option-description'>Personal info</p>
          </Link>
          <Link className='menu-item' to='/credit-cards'>
            <img src={CreditCard} alt='creditcard' className='menu-option' />
            <p className='option-description'>Credit card details</p>
          </Link>{' '}
          <Link className='menu-item' to='/payment-plan'>
            <img src={PaymentPlan} alt='payment' className='menu-option' />
            <p className='option-description'>Payment plan</p>
          </Link>
          <Link className='menu-item' to='/billing'>
            <img src={Billing} alt='billing' className='menu-option' />
            <p className='option-description'>Billing</p>
          </Link>
        </div>
      </div>

      /*    <div className='info-box'>
        <h3 className='heading'>Your account</h3>
        <p className='info-text'>You can modify personal information here</p>
        <div>
          <div className='ova'>
            <div className='ova'>
              <div className='initials-circle'>JD</div>
              <div className='box-text'>
                <p className='box-name'>John Doe</p>
                <p className='contact-text'>john.doe@email.com</p>
                <p className='contact-text'>387 61 123 456</p>
              </div>
            </div>

            <div className='menu-icons'>
              <img src={PersonalInfo} alt='personal' className='menu-option' />
              <img src={CreditCard} alt='creditcard' className='menu-option' />
              <img src={PaymentPlan} alt='payment' className='menu-option' />
              <img src={Billing} alt='billing' className='menu-option' />
            </div>
          </div>
        </div>
      </div> */
    );
  }
}
