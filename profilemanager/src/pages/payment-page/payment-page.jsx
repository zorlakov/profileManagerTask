import React, { Component } from 'react';
import ProfileManager from '../../components/profile-manager/profile-manager';
import PaymentInfo from '../../components/payments-info/payments-info';

export default class PaymnetPage extends Component {
  render() {
    return <ProfileManager className='page' Page={<PaymentInfo />} />;
  }
}
