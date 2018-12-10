import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = props => {
  return (
    <div id="cart">
      {(props.cart.length === 0 && (
        <div>
          <h2>No Items in Your Cart</h2>
          <h3>Go Shop Till Ya Drop!</h3>
          <div
            style={{
              width: '100%',
              height: 0,
              paddingBottom: '56%',
              position: 'relative'
            }}
          >
            <iframe
              src="https://giphy.com/embed/xT0xeMA62E1XIlup68"
              width="100%"
              height="100%"
              style={{ position: 'absolute' }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </div>
      )) || (
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.img} />
                    <p>{item.product}</p>
                  </td>
                  <td>${(item.cost / 100).toFixed(2)}</td>
                  <td>1</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total">
            <p>Total:</p>
            <p>&nbsp;$ {props.totalCost}</p>
          </div>
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
