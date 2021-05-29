import React, { Component } from 'react';
import ProfileManager from '../../components/profile-manager/profile-manager';
import BillingInfo from '../../components/billing-info/billing-info';

export default class BillingPage extends Component {
  render() {
    return <ProfileManager className='page' Page={<BillingInfo />} />;
  }
}
