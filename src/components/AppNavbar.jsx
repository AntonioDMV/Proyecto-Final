import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const AppNavbar = () => {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
  }

  return (
    <div>
      <Navbar className='navbar' fixed='top' bg="primary" variant='dark' expand="md">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
              <Nav.Link >Cart (sideabar)</Nav.Link>
              <Nav.Link onClick={logOut} >Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;