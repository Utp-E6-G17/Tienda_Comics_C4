import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar color='dark' dark expand='md' fixed='top' full light>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarBrand href='/LogginComic'>Sing In</NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
