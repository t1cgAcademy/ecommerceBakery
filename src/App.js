import React, { Component } from 'react';
import BakeryNav from './Nav/Nav.jsx';
import Landing from './Landing/Landing.jsx';
import Contact from './Contact/Contact.jsx';
import Shop from './Shop/Shop.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Payment.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Errors from './Errors/Errors';

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
      loading: null
    };
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
  handleSelect = key => {
    this.setState({
      view: key
    });
  };

  componentDidMount() {
    if (localStorage.getItem('cart') === null) this.setState({ cartLength: 0 });
    else {
      this.setState({
        cartLength: JSON.parse(localStorage.getItem('cart')).length
      });
    }
  }



  addToCart = async e => {
    e.preventDefault();
    let cart = [];
    if (localStorage.getItem('cart'))
      cart = JSON.parse(localStorage.getItem('cart'));
    else cart = [];
    cart.push(JSON.parse(e.target.value));
    this.setState({
      ...this.state,
      cartLength: this.state.cartLength + 1
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  getTotalCost = () => {
    let totalCost = 0;
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems === null) return 0;
    cartItems.map(item => (totalCost += item.cost));
    return (totalCost / 100).toFixed(2);
  };

  getCartItems = () => {
    if (localStorage.getItem('cart'))
      return JSON.parse(localStorage.getItem('cart'));
    else return [];
  };

  pay = async (e, stripe) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (!stripe) {
      this.setState({
        ...this.state,
        payError:
          'There was an error with your payment. Your card was not charged.'
      });
    }
    const payload = await stripe.createToken();
    if (!payload.token) {
      this.setState({
        ...this.state,
        payError:
          'There was an error with your payment. Your card was not charged.'
      });
    }
    const charge = JSON.stringify({
      token: payload.token,
      amount: parseInt(this.getTotalCost()) * 100
    });
    const url = 'http://localhost:3001/api/payment';
    const headers = { 'Content-Type': 'application/json' };
    const makePay = await fetch(url, { method: 'post', headers, body: charge });
    if (makePay.status >= 200 && makePay.status < 300) {
      this.setState({
        ...this.state,
        cartLength: 0,
        loading: false,
        payMessage: 'YUM YUM! Goodies On the Way!'
      });
      localStorage.removeItem('cart');
    } else {
      this.setState({
        ...this.state,
        loading: false,
        payMessage:
          'There was an error with your payment. Your card was not charged.'
      });
      localStorage.removeItem('cart');
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BakeryNav
            selectProp={this.handleSelect}
            view={this.state.view}
            cartLength={this.state.cartLength}
          />
          <div style={{ marginTop: '90px' }}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/shop"
                render={props => <Shop {...props} addToCart={this.addToCart} />}
              />
              <Route
                exact
                path="/cart"
                render={props => (
                  <Cart
                    {...props}
                    cart={this.getCartItems()}
                    totalCost={this.getTotalCost()}
                    handleSelect={this.handleSelect}
                  />
                )}
              />

              <Route
                exact
                path="/checkout"
                render={props => (
                  <Checkout
                    {...props}
                    pay={this.pay}
                    loading={this.state.loading}
                    payMessage={this.state.payMessage}
                    amount={this.getTotalCost()}
                  />
                )}
              />

              <Route component={Errors} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
