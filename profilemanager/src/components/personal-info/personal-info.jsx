import React, { Component } from 'react';
import './personal-info.css';
import TextBox from '../text-box/text-box';

export default class PersonalInfo extends Component {
  render() {
    const info =
      'This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button';
    const title = 'Personal info';
    return (
      <div className='personal-infopage'>
        <TextBox className='text-info' info={info} title={title} />
        <form className='input-form'>
          <div className='form-group'>
            <label className='input-label'>First name</label>
            <input className='input' type='text' name='firstname' />
          </div>
          <div className='form-group'>
            <label className='input-label'>Email</label>
            <input className='input' type='text' name='lastname' />
          </div>
          <div className='form-group'>
            <label className='input-label'>Last name</label>
            <input className='input' type='text' name='email' />
          </div>
          <div className='form-group'>
            <label className='input-label'>Mobile phone</label>
            <input className='input' type='number' name='mobile' />
          </div>
          <div className='form-group'>
            <label className='input-label'>Password</label>
            <input className='input' type='password' name='password1' />
          </div>
          <div className='form-group'>
            <label className='input-label'>Confirm password</label>
            <input className='input' type='password' name='password2' />
          </div>
          <div className='password-rules'>
            <span className='password-info'>At least one uppercase letter</span>
            <span className='password-info'>At least one lowercase letter</span>
            <span className='password-info'>At least one number</span>
            <span className='password-info'>
              At least one special character
            </span>
            <span className='password-info'>
              At least eight characters long
            </span>
          </div>
        </form>
      </div>
    );
  }
}
