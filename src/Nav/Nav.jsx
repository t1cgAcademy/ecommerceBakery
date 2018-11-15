import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';
import './nav.css';

const BakeryNav = (props) => {
  return (
    <Navbar fixedTop collapseOnSelect={true} onSelect={props.selectProp} id="bakeryNav">
      <Navbar.Header>
         <Navbar.Brand>
           <a className={'logo'} href="http://localhost:3000">
             <span>
               <img src={logo}/>
               <p>Cake and Things</p>
             </span>
           </a>
         </Navbar.Brand>
         <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
         <NavItem className="links" eventKey={'home'}>
           Home
         </NavItem>
         <NavItem className="links" eventKey={'shop'}>
           Shop
         </NavItem>
         <NavItem className="links" eventKey={'contact'}>
           Contact
         </NavItem>
         <NavItem eventKey={'cart'} style={{position:'absolute'}}>
           <div className="circle">{props.cartLength}</div>
           <img className="cart" src={cart} />
         </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BakeryNav;
