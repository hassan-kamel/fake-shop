import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log('cart: ', cart);

  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Container>
        <Link className='navbar-brand' to='/'>
          FakeCartApp
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' to='/'>
              Products
            </Link>
            <Link className='nav-link' to='cart'>
              Cart - <Badge color='info'>{cart.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
