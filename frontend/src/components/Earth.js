import { Container, Row, Col, Button } from "react-bootstrap";

export const Earth = (props) => {
  return (
    <Container className="my-4 earth-container" style={{ textAlign: "left" }}>
      <div className="d-flex align-items-center earth-container-content">
        <Row className="py-5">
          <Col md={4} className="bumiku-image">
            <img src="./bumiku.png" />
          </Col>
          <Col md={7} className=" bumiku-content">
            <h3>{props.heading}</h3>
            <p>{props.p}</p>
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
