import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import StripeForm from './StripeForm.jsx';
import './checkout.css';

const Payment = props => {
  return (
    <div>
      <div id="paymentContainer">
        <StripeProvider apiKey={'your_api_key_here'}>
          <Elements>
            <StripeForm amount={props.amount} pay={props.pay} />
          </Elements>
        </StripeProvider>
      </div>

      {props.loading ? (
        <h1>Loading Response...</h1>
      ) : (
        <div>
          <h1>{props.payMessage}</h1>
        </div>
      )}
    </div>
  );
};

export default Payment;
