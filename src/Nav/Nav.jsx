import React, { Component } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BakeryNav;
