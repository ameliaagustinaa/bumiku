import { Container, Row, Col } from "react-bootstrap";

export const Words = (props) => {
  console.log(props);
  return (
    <Container className="words">
      <Row>
        <Col>
          <h3>{props.words}</h3>
        </Col>
      </Row>
      <Row className="text-end watermark">
        <h4>-Nusantara</h4>
      </Row>
    </Container>
  );
};
