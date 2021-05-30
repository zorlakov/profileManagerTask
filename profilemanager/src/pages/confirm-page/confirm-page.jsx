import React, { Component } from 'react';
import ProfileManager from '../../components/profile-manager/profile-manager';
import CancelPlan from '../../components/cancel-plan/cancel-plan';

export default class confirm extends Component {
  render() {
    return (
      <div>
        <ProfileManager className='page' Page={<CancelPlan />} />
      </div>
    );
  }
}
