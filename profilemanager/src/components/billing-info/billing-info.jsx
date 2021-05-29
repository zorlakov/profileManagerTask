import React, { Component } from 'react';
import './billing-info.css';
import TextBox from '../text-box/text-box';

export default class BillingInfo extends Component {
  render() {
    const info =
      'This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button';
    const title = 'Billing info';
    return (
      <div className='billing-info'>
        <TextBox className='text-info' info={info} title={title} />
        <div className='table-area'>
          <div className='table-description'>
            <p className='table-title'>Billing information</p>
            <p className='table-secondary'>
              Overview of your credit card transactions
            </p>
          </div>

          <table className='billing-table'>
            <tr>
              <th>Subscription plan</th>
              <th>Amount paid</th>
              <th>Paid at</th>
            </tr>
            <tr>
              <td>Starter</td>
              <td>3964 USD</td>
              <td>01/21/2021 14:52:32</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>2554 USD</td>
              <td>01/24/2021 14:52:32</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>3547 USD</td>
              <td>01/27/2021 14:52:32</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
