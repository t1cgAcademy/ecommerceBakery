import React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import StripeForm from './StripeForm.jsx';

const Payment = (props) => {
  return (
    <div>
      <div id="paymentContainer">
        <StripeProvider apiKey={'pk_test_WhluGB40x4VajcJ93K9PFqdg'}>
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
