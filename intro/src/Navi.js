import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';
import CardSummary from './CardSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home Page</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/membership">Membership</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/EmirKbr">GitHub</NavLink>
              </NavItem>
              <CardSummary removeFromCard={this.props.removeFromCard} card={this.props.card}></CardSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}