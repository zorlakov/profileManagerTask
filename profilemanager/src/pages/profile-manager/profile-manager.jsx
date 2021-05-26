import React, { Component } from 'react';
import BasicInfo from '../../components/basic-info/basic-info';
import './profile-manager.css';

export default class ProfileManager extends Component {
  render() {
    return (
      <div className='page-body'>
        <div className='info'>
          <BasicInfo />
        </div>
        {/*   <div className='menu-icons'>
          <img src={PersonalInfo} alt='personal' />
          <img src={CreditCard} alt='creditcard' />
          <img src={PaymentPlan} alt='payment' />
          <img src={Billing} alt='billing' />
        </div> */}
      </div>
    );
  }
}
