import React, { Component } from 'react';
import ProfileManager from '../../components/profile-manager/profile-manager';
import PersonalInfo from '../../components/personal-info/personal-info';

export default class PersonalPage extends Component {
  render() {
    return <ProfileManager className='page' Page={<PersonalInfo />} />;
  }
}
