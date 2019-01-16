import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';
import './nav.css';
import { Link } from 'react-router-dom';

const BakeryNav = props => {
  return (
    <Navbar fixedTop collapseOnSelect={true} onSelect={props.selectProp} id="bakeryNav">
      <Navbar.Header>
        <Navbar.Brand>
          <Link className={'logo'} to="/">
            <span>
              <img src={logo} />
              <p>Cake and Things</p>
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className="links" eventKey={'home'}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem className="links" eventKey={'shop'}>
            <Link to="/shop">Shop</Link>
          </NavItem>
          <NavItem className="links" eventKey={'contact'}>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem eventKey={'cart'} style={{ position: 'absolute' }}>
            <div className="circle">{props.cartLength}</div>
            <Link to="/cart">
              <img className="cart" src={cart} />
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BakeryNav;
