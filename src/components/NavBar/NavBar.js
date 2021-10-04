import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              {/* container */}
              <Container>
              <Navbar.Brand href="/home"><b><i>Your Chef</i></b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  {/* stack */}
                <Stack direction="horizontal" gap={3}>
                    <NavLink to="/home" className="f-13"   activeStyle={{
                      fontWeight: "bold",
                      color: "white"
                    }}>Home</NavLink>
                    <NavLink to="/service" className="f-13"   activeStyle={{
                      fontWeight: "bold",
                      color: "white"
                    }}>Service</NavLink>
                    <NavLink to="/about" className="f-13"   activeStyle={{
                      fontWeight: "bold",
                      color: "white"
                    }}>About</NavLink>
                    <NavLink to="/news" className="f-13"   activeStyle={{
                      fontWeight: "bold",
                      color: "white"
                    }}>News</NavLink>
                  </Stack>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;