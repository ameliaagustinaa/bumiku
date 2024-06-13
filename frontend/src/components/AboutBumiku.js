import { Container, Row, Col } from "react-bootstrap";
import fire from "../assets/images/forestfires.png";

export const AboutBumiku = () => {
  return (
    <Container className="p-0">
      <div className="about-container">
        <Row className="m-0">
          <Col md={6} className="text-start m-auto p-5">
            <h4>Bumiku.com</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="text-end">
              <h5>-Nusantara</h5>
            </span>
          </Col>
          <Col md={6} className="overflow-hidden p-0 ">
            <img src={fire} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
