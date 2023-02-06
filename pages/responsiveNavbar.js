import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './responsiveNavbar.module.css';
import Image from 'next/image';

const ResponsiveNavbar = (props) => {
  const { logo, links } = props;
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.menu}>
      <Container>
      <Navbar.Brand href="#home">
        <Image src="/images/common/logoTitle.png" alt="Logo" width="100" height="200"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;