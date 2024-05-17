import { Container, Row, Col, Button } from "react-bootstrap";

export const Earth = () => {
  return (
    <Container className="my-4 earth-container" style={{ textAlign: "left" }}>
      <div className="d-flex align-items-center earth-container-content">
        <Row className="py-5">
          <Col md={4} className="bumiku-image">
            <img src="./bumiku.png" />
          </Col>
          <Col md={6} className=" bumiku-content">
            <h3>Mari Jaga Kelestarian Bumi Kita</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="dark" className="rounded-pill" id="button">
              Selengkapnya
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Earth;
