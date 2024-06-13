import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container className="navbar">
        <Navbar.Brand href="#home" id="navbar-logo">
          Bumiku.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navbar-link">
            <Nav.Link as={Link} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/informasi">
              Informasi
            </Nav.Link>
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/kursus">
                  Kursus
                </Nav.Link>
                <Nav.Link as={Link} to="/donasi">
                  Donasi
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="navbar-button">
            {isLoggedIn ? (
              <Link
              className="text-decoration-none"
              style={{ color: "#03361e" }}
              onClick={handleLogout}
            >
              Hi, Jane Doe
            </Link>
            ) : (
              <>
                <Button
                  className="rounded-pill outline-primary"
                  id="button1"
                  as={Link} to="/Daftarlogin"
                  onClick={handleLogin}
                >
                  Daftar
                </Button>
                <Button
                  variant="dark"
                  className="rounded-pill"
                  id="button"
                  as={Link} to="/Login"
                  onClick={handleLogin}
                >
                  Masuk
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};