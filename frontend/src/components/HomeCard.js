import { Container, Row, Col, Navbar, Image } from "react-bootstrap";

import card1 from "../assets/images/cardhome1.png";
import card2 from "../assets/images/cardhome2.png";
import card3 from "../assets/images/cardhome3.png";

export const HomeCard = () => {
  return (
    <div className="card-home my-5">
      <div className="card-heading">
        <h3 className="card-title">Bumi lalah Tanggung Jawab Kita Bersama</h3>
      </div>
      <div className="card-body">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <img src={card1} />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col md={4}>
              <img src={card2} />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col md={4}>
              <img src={card3} />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
