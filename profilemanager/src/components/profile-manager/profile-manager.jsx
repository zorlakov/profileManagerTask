import React, { Component } from 'react';
import BasicInfo from '../basic-info/basic-info';
//import PersonalInfo from '../personal-info/personal-info';

import './profile-manager.css';

export default class ProfileManager extends Component {
  render() {
    return (
      <div className='page-body'>
        <div className='info'>
          <BasicInfo />
          <> {this.props.PersonalInfo} </>
        </div>
      </div>
    );
  }
}
