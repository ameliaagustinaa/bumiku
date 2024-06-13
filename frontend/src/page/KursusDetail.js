import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import test from "../assets/video/test.mp4";

const breadcrumbItems = ["Beranda", "Kursus"];
export default function KursusDetail() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <Container>
        <video width="1311" controls>
          <source src={test} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
      <br />
      <Container>
        <Row>
          <Col md={10} className="text-start detail-heading">
            <h5>Kreasi Daur Ulang Sampah Botol Plastik </h5>
            <h6 style={{ fontSize: "14px" }}>Nusantara</h6>
            <h6 style={{ fontSize: "14px" }}>
              1,6 jt x ditonton . 5 hari yang lalu
            </h6>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}
