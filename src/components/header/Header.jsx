import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../header/header.css';

import logoImage from '../../assets/img/Avida.png';

const Header = ({ rol }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if ((rol = 'usuario'))
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' className='bg-green fixed-top'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              {' '}
              <img src={logoImage} alt='Logo' style={{ maxWidth: '100px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mx-auto align-items-center'>
                <Nav.Link as={Link} to='/'>
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to='/comunidad'>
                  Comunidad
                </Nav.Link>
                <Nav.Link as={Link} to='/mapa'>
                  Mapa
                </Nav.Link>
                <Nav.Link as={Link} to='/guia'>
                  Guía
                </Nav.Link>
                <Nav.Link as={Link} to='/tienda'>
                  Tienda
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={handleShowModal}>Mi Cuenta</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          dialogClassName='custom-micuenta'
        >
          <Modal.Header closeButton>
            <Modal.Title>Bienvenido a Ávida 🌳</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Link to='/loginform'>
              <Button variant='primary'>Iniciar Sesión</Button>{' '}
            </Link>
            <Link to='/regisform'>
              <Button variant='primary'>Registrarse</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    );

  if ((rol = 'admin'))
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' className='bg-green fixed-top'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              {' '}
              <img src={logoImage} alt='Logo' style={{ maxWidth: '100px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mx-auto align-items-center'>
                <Nav.Link as={Link} to='/'>
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to='/comunidad'>
                  Comunidad
                </Nav.Link>
                <Nav.Link as={Link} to='/mepeta'>
                  Mapa
                </Nav.Link>
                <Nav.Link as={Link} to='/guia'>
                  Guía
                </Nav.Link>
                <Nav.Link as={Link} to='/tienda'>
                  Tienda
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={handleShowModal}>Mi Cuenta</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          dialogClassName='custom-micuenta'
        >
          <Modal.Header closeButton>
            <Modal.Title>Bienvenido a Ávida 🌳</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Link to='/loginform'>
              <Button variant='primary'>Iniciar Sesión</Button>{' '}
            </Link>
            <Link to='/regisform'>
              <Button variant='primary'>Registrarse</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    );
};

export default Header;
