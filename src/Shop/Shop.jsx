import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './shop.css';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as shopActions from '../actions/shopActions';

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

  /**
   * handleGetProducts - make a request to the api for products
   *
   * This fn makes a http request to the api asking it
   * to get the product data from mongodb and returning
   * here.
   *
   * Once the data is returned we set the components state
   * with the returned data
   *
   */
  // handleGetProducts = () => {
  //   let request = {};
  //   request.method = 'get';
  //   request.headers = { 'Content-Type': 'application/json' };
  //   fetch('http://localhost:3001/api/products', request)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         products: data.data,
  //       });
  //     })
  //     .catch(error => {
  //       console.log('FETCH ERR:  ', error);
  //     });
  // };

  // updateQuantity = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     ...this.state,
  //     currentQuantity: e.target.value
  //   })
  // }
  // <input onChange={this.updateQuantity} type="number" max="10" min="0" defaultValue="0" value={this.value}/>
  // currentQuantity: 1

  /**
   * render - The html to be renderd to the DOM
   *
   * Theres a little extra logic in this render that
   * returns different html based on if the api returned
   * product data or not. We do this because if there is
   * no product data we cant create html that relys
   * on the data.  The website will crash with errors
   * if there is no data, unless we manage both instances
   * (data and no data).
   */
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
            {this.props.stuffs.map((product, i) => {
              return (
                <Col className="product" lg={4} md={6} sm={12} key={i}>
                  <img src={product.image} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>${(product.cost / 100).toFixed(2)}</p>
                  <Button
                    className="atc"
                    value={JSON.stringify({
                      img: product.image,
                      product: product.name,
                      cost: product.cost,
                    })}
                    onClick={this.props.addToCart}>
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
  console.log('state in mapStateToProps', state);
  return {
    stuffs: state.shop,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    shopActions: () => dispatch(shopActions.fetchStuff()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
