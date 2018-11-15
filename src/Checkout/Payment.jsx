import React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import StripeForm from './StripeForm.jsx';

const Payment = (props) => {
  return (
    <div>
      <div id="paymentContainer">
        <StripeProvider apiKey={'your_api_key_here'}>
          <Elements>
            <StripeForm
              amount={100}
              pay={props.pay}
            />
          </Elements>
        </StripeProvider>
      </div>
    </div>
  );
};

export default Payment;
