import React, { Component } from 'react';
import ProfileManager from '../../components/profile-manager/profile-manager';
import CreditCards from '../../components/credit-cards/credit-cards';

export default class CardsPage extends Component {
  render() {
    return <ProfileManager className='page' Page={<CreditCards />} />;
  }
}
