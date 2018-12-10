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
        <form method="POST" onSubmit={ev => props.pay(ev, props.stripe)}>
          <h4>Checkout</h4>
          <p>Total: ${props.amount}</p>
          <label>Credit Card Number</label>
          <CardNumberElement className="stripeElements cardNumber" />
          <label>Expiration</label>
          <CardExpiryElement className="stripeElements cardExpire" />
          <label>CVC / CVV</label>
          <CardCVCElement className="stripeElements cardCvc" />
          <button id="payButton">Pay Now</button>
          <span style={{ display: 'block', width: '100%', height: '20px' }}>
            {' '}
          </span>
        </form>
      </div>
    </div>
  );
};

export default injectStripe(StripeForm);
