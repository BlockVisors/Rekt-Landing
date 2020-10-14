import React from 'react';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
    Button,
    ButtonGroup
} from 'reactstrap';

export default class NavMain extends React.Component {

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
    return <Fragment>
      <Navbar navbar navbar-dark expand="md">
          {/* <Navbar navbar navbar-expand-lg navbar-light bg-light> */}
        {/* <NavbarBrand href="/">
        <img
              src="assets/images/logo/MooLogoPink.png"
              width="188"
              height="80"
              className="d-inline-block align-top"
              //alt="React Bootstrap logo"
              />
        </NavbarBrand> */}
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar id="nav5">
          
            <NavItem>
              <NavLink href="#faq" className="green-link">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sale" className="green-link">REKTR Sale</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#rektr" className="green-link">REKTR Token</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team" className="green-link">Team</NavLink>
            </NavItem>
        
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="green-link">Rekt App</NavLink>
            </NavItem>

{/*         
            <a className="btn btn-default" href="#">Stake</a> */}


            {/* <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '} */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  }
}