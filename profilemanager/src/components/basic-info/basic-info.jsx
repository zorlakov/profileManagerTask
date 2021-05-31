import React, { Component } from 'react';
import PersonalInfo from '../../assets/personalInfo.svg';
import CreditCard from '../../assets/creditCard.svg';
import Billing from '../../assets/billing.svg';
import PaymentPlan from '../../assets/paymentplan.svg';
import CreditCardColored from '../../assets/creditCardColored.svg';
import BillingColored from '../../assets/billingColored.svg';
import PersonalInfoColored from '../../assets/personalInfoColored.svg';
import PaymentPlanColored from '../../assets/paymentPlanColored.svg';
import { Link } from 'react-router-dom';

import './basic-info.css';

export default class BasicInfo extends Component {
  render() {
    console.log(window.location.pathname);
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
              src={
                window.location.pathname === '/personal-info'
                  ? PersonalInfoColored
                  : PersonalInfo
              }
              className='menu-option'
              alt='personal'
              to='/personal-ifno'
            />
            <p
              className={`${
                window.location.pathname === '/personal-info'
                  ? 'current-path'
                  : 'option-description'
              }`}
            >
              Personal info
            </p>
          </Link>
          <Link className='menu-item' to='/credit-cards'>
            <img
              src={
                window.location.pathname === '/credit-cards'
                  ? CreditCardColored
                  : CreditCard
              }
              alt='creditcard'
              className='menu-option'
            />
            <p
              className={`${
                window.location.pathname === '/credit-cards'
                  ? 'current-path'
                  : 'option-description'
              }`}
            >
              Credit card details
            </p>
          </Link>{' '}
          <Link className='menu-item' to='/payment-plan'>
            <img
              src={
                window.location.pathname === '/payment-plan'
                  ? PaymentPlanColored
                  : PaymentPlan
              }
              alt='payment'
              className='menu-option'
            />
            <p
              className={`${
                window.location.pathname === '/payment-plan'
                  ? 'current-path'
                  : 'option-description'
              }`}
            >
              Payment plan
            </p>
          </Link>
          <Link className='menu-item' to='/billing'>
            <img
              src={
                window.location.pathname === '/billing'
                  ? BillingColored
                  : Billing
              }
              alt='billing'
              className='menu-option'
            />
            <p
              className={`${
                window.location.pathname === '/billing'
                  ? 'current-path'
                  : 'option-description'
              }`}
            >
              Billing
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
