import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PurchasesSidebar from './PurchasesSidebar';
const AppNavbar = () => {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className='navbar' fixed='top' bg="primary" variant='dark' expand="md">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
              <Nav.Link as={Link} to='/login'><i class="fa-solid fa-user"></i></Nav.Link>
              <Nav.Link onClick={handleShow}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
              <Nav.Link onClick={logOut} >Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PurchasesSidebar show={show} handleClose={handleClose}/>
    </>
  );
};

export default AppNavbar;