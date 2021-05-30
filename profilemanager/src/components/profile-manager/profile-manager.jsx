import React, { Component } from 'react';
import BasicInfo from '../basic-info/basic-info';
import './profile-manager.css';

export default class ProfileManager extends Component {
  render() {
    return (
      <div className='page-body'>
        <div className='info'>
          <BasicInfo />
          <> {this.props.Page} </>
        </div>
      </div>
    );
  }
}
