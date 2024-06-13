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
              Kebersihan lingkungan adalah cerminan dari cinta dan tanggung jawab kita terhadap bumi. 
              Dalam setiap helai rumput yang hijau dan setiap tetes air yang jernih, 
              tersimpan harapan untuk masa depan yang lebih bersih dan lestari, 
              bebas dari pencemaran yang merusak keindahan dan kehidupan.
              </p>
            </Col>
            <Col md={4}>
              <img src={card2} />
              <p className="card-text">
              Setiap langkah kecil yang kita ambil dapat memberikan dampak besar bila dilakukan bersama-sama. 
              Dengan berkomitmen untuk menjaga dan merawat bumi, 
              kita memastikan bahwa generasi mendatang dapat menikmati lingkungan yang sehat dan lestari.
              </p>
            </Col>
            <Col md={4}>
              <img src={card3} />
              <p className="card-text">
              Menjaga kebersihan lingkungan dari pencemaran adalah bentuk kasih sayang kita terhadap alam. 
              Setiap upaya kecil untuk menjaga kebersihan adalah langkah besar menuju masa depan yang lebih hijau dan indah, 
              di mana udara segar dan air jernih menjadi warisan bagi generasi mendatang.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
