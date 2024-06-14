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
              Bumiku.com adalah sebuah platform inovatif yang bertujuan untuk mengurangi pencemaran lingkungan melalui edukasi, kolaborasi, dan aksi nyata. Situs ini menyediakan informasi terkini tentang isu-isu lingkungan, menawarkan
              solusi praktis untuk mengurangi jejak karbon, dan mengajak komunitas global untuk berpartisipasi dalam inisiatif ramah lingkungan. Dengan fitur interaktif seperti forum diskusi, program daur ulang, dan kampanye kebersihan,
              Bumiku.com berkomitmen untuk menciptakan bumi yang lebih bersih dan sehat bagi generasi mendatang. Melalui kerjasama dengan berbagai organisasi dan individu yang peduli lingkungan, Bumiku.com menjadi pusat informasi dan aksi
              bagi mereka yang ingin berkontribusi dalam menjaga kelestarian planet kita.
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
