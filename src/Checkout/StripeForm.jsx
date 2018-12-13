import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements';

const StripeForm = props => {
  return (
    <div id="stripeForm">
      <div>
          <h1>Checkout</h1>
          <form method="POST" onSubmit={(ev) => props.pay(ev, props.stripe)}>
            <label>Credit Card Number</label>
            <CardNumberElement className="stripeElements cardNumber"/>
            <label>Expiration</label>
            <CardExpiryElement className="stripeElements cardExpire"/>
            <label>CVC / CVV</label>
            <CardCVCElement className="stripeElements cardCvc"/>
            <button id="payButton">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default injectStripe(StripeForm);
