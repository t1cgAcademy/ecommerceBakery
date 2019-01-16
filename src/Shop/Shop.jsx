import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './shop.css';

import { connect } from 'react-redux';

import * as shopActions from '../actions/shopActions';
import * as cartActions from '../actions/cartActions';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    this.props.shopActions();
  }

  render() {
    if (1 === 2) {
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>No Products To Show :(</h1>
        </div>
      );
    } else {
      return (
        <div id="shop">
          <h1>Shop Till You Drop</h1>
          <Grid>
            {this.props.products.map((product, i) => {
              return (
                <Col className="product" lg={4} md={6} sm={12} key={i}>
                  <img src={product.image} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>${(product.cost / 100).toFixed(2)}</p>
                  <Button className="atc" value={i} onClick={this.props.cartActions}>
                    Add To Cart
                  </Button>
                </Col>
              );
            })}
          </Grid>
        </div>
      );
    }
  }
}

// export default Shop;
function mapStateToProps(state) {
  return {
    products: state.shop,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    shopActions: () => dispatch(shopActions.fetchStuff()),
    cartActions: e => dispatch(cartActions.addToCart(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
