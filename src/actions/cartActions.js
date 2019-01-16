import * as types from './actionTypes';

// export function receiveStuff(json) {
//   console.log('show me the json variable pllllease', json.data.data);
//   return { type: types.RECEIVE_STUFF, stuff: json.data.data };
// }

export const addToCart = e => {
  return (dispatch, getState) => {
    dispatch({ type: types.ADD_ITEM, cart: getState().shop[e.target.value] });
  };
};

// addToCart = async e => {
//     e.preventDefault();
//     let cart = [];
//     if (localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));
//     else cart = [];
//     cart.push(JSON.parse(e.target.value));
//     this.setState({
//       ...this.state,
//       cartLength: this.state.cartLength + 1,
//     });
//     localStorage.setItem('cart', JSON.stringify(cart));
//   };
