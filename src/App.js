import React, { Component } from 'react';
import BakeryNav from './Nav/Nav.jsx';
import Landing from './Landing/Landing.jsx';
import Contact from './Contact/Contact.jsx';
import Shop from './Shop/Shop.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Payment.jsx';

class App extends Component {
  /**
   * constructor - build class App
   *
   * super calls the parent class "Component"
   * and tells it to add extended values to this component.
   * Enabling prototypical methods such as React Lifestyle Fns
   * and state management Fns ie this.setState()
   */
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      cart: []
    }
  }

  /**
   * handleSelect - event handler for nav selection
   *
   * This function sets the state for what view to render.
   * Default is set to "home", thus why homepage is what we
   * first when going to http://localhost:300.
   *
   * When we click a nav option, the event key is passed
   *
   */
  handleSelect = (key) => {
    this.setState({
      view: key
    })
  }

  addToCart = async (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      cart: [...this.state.cart, JSON.parse(e.target.value)]
    })
  }

  pay = async (e, stripe) => {
    e.preventDefault();
    if (!stripe) {
      this.setState({
        ...this.state,
        payError: 'There was an error with your payment. Your card was not charged.'
      })
    }
    const payload = await stripe.createToken();
    if (!payload.token) {
      this.setState({
        ...this.state,
        payError: 'There was an error with your payment. Your card was not charged.'
      })
    }
    const charge = JSON.stringify({
      token: payload.token,
      amount: 1000
    });
    const url = 'http://localhost:3001/api/payment';
    const headers = {'Content-Type': 'application/json'};
    const makePay = await fetch(url, {method: 'post', headers, body: charge});
    if (makePay.message === 'Successful Charge') {
      this.setState({
        ...this.state,
        paySuccess: 'YUM YUM! Goodies On the Way!'
      })
    } else {
      this.setState({
        ...this.state,
        payError: 'There was an error with your payment. Your card was not charged.'
      })
    }
      // .then((response) => response.json())
      // .then(resp => {
      //   if (resp.message === "Successful Charge") {
      //     return 'success';
      //   } else {
      //     return 'fail pay';
      //   }
      // })
      // .catch(err => {
      //   return 'system error';
      // });
  }

  render() {
    return (
      <div className="App">
        <BakeryNav
          selectProp={this.handleSelect}
          view={this.state.view}
          cartLength={this.state.cart.length}
        />
        <div style={{marginTop: "90px"}}>
          {this.state.view === 'home' &&
            <Landing />
          }
          {this.state.view === 'shop' &&
            <Shop addToCart={this.addToCart}/>
          }
          {this.state.view === 'contact' &&
            <Contact/>
          }
          {this.state.view === 'cart' &&
            <Cart cart={this.state.cart} handleSelect={this.handleSelect}/>
          }
          {this.state.view === 'checkout' &&
            <Checkout pay={this.pay}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
