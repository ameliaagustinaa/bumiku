import { Navbar, Nav, Button, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container className="navbar">
        <Navbar.Brand href="#home" id="navbar-logo">
          Bumiku.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navbar-link">
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#informasi">Informasi</Nav.Link>
          </Nav>
          <div className="navbar-button">
            <Button className=" rounded-pill outline-primary" id="button1">
              Daftar
            </Button>
            <Button variant="dark" className="rounded-pill" id="button2">
              Masuk
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
