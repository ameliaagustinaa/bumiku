import { Container, Row, Col } from "react-bootstrap";

export const Words = () => {
  return (
    <Container className="words">
      <Row>
        <Col>
          <h3>
            "Lingkungan yang bersih adalah budaya orang yang memiliki pola pikir
            maju."
          </h3>
        </Col>
      </Row>
      <Row className="text-end watermark">
        <h4>-Nusantara</h4>
      </Row>
    </Container>
  );
};
