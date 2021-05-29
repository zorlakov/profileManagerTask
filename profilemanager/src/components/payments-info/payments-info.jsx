import React, { Component } from 'react';
import TextBox from '../text-box/text-box';
import PaymentOption from '../../components/payment-option/payment-option';
import StarterIcon from '../../assets/starter.svg';
import EnterpriseIcon from '../../assets/enterprise.svg';
import BusinessIcon from '../../assets/business.svg';
import './payments-info.css';

export default class Payments extends Component {
  render() {
    const info =
      'This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button';
    const title = 'Personal info';
    const starterDesc = (
      <p>
        Up to 5 gateways <br></br> Basic supoprt <br></br> Monthly updates{' '}
        <br></br> First month free <br></br> Cancel anytime
      </p>
    );
    const businessDesc = (
      <p>
        Up to 10 gateways <br></br> Basic supoprt <br></br> Monthly updates{' '}
        <br></br> First month free <br></br> Cancel anytime
      </p>
    );
    const enterpriseDesc = (
      <p>
        Up to 5 gateways <br></br> 24/7 supoprt <br></br> Monthly updates{' '}
        <br></br> First month free <br></br> Cancel anytime
      </p>
    );

    return (
      <div className='payments'>
        <TextBox className='text-info' info={info} title={title} />
        <div className='payment-options'>
          <PaymentOption
            icon={StarterIcon}
            type={'Starter'}
            price={'$5'}
            description={starterDesc}
            selected={true}
          />
          <PaymentOption
            icon={BusinessIcon}
            type={'Business'}
            price={'$10'}
            description={businessDesc}
            selected ={false}
          />
          <PaymentOption
            icon={EnterpriseIcon}
            type={'Enterprise'}
            price={'$15'}
            description={enterpriseDesc}
            selected={false}
          />
        </div>
      </div>
    );
  }
}
