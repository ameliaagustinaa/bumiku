import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Form } from "../components/Form";
import { AboutBumiku } from "../components/AboutBumiku";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col, Button } from "react-bootstrap";
import satwa from "../assets/images/satwa.png";
import air from "../assets/images/air.png";
import hutan from "../assets/images/hutan.png";
import qr from "../assets/images/qr.png";
import { Link } from "react-router-dom";

const breadcrumbItems = ["Beranda", "Donasi"];

export default function DonasiDetail() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <AboutBumiku />
      <br />
      <br />
      <Container>
        <Row className="text-start form-donasi justify-content-between">
          <Col
            md={8}
            className="form-data p-5"
            style={{
              paddingRight: "50px",
              backgroundColor: "#DEF5D8",
            }}
          >
            <h5>
              Terimakasih telah mempercayai kami untuk menyalurkan kontribusi
              baik kamu untuk alam!
            </h5>
            <p style={{ color: "#03361E" }}>
              Kami sangat menghargai niat baik Anda untuk membantu menjaga
              kelestarian alam. Untuk menyelesaikan proses donasi, mohon segera
              lakukan pembayaran melalui beberapa langkah berikut, dan
              konfirmasi pembayaranmu.
            </p>
            <Container className="d-flex detail-donasi align-items-center">
              <Col md={3}>
                <img src={qr} />
              </Col>
              <Col md={6} style={{ fontSize: "14px", paddingLeft: "50px" }}>
                <ul>
                  <li>Buka Aplikasi Gojek dan klik "Bayar".</li>
                  <li>Scan Kode QR berikut.</li>
                  <li>
                    Masukkan nominal transaksi/pastikan nominal transaksi sudah
                    sesuai.
                  </li>
                  <li>Klik "Konfirmasi & Bayar".</li>
                  <li>Masukkan PIN GoPay kamu.</li>
                  <li>Pembayaran berhasil.</li>
                </ul>
                <span className="p-4">
                  <Link style={{ color: "#03361E", fontWeight: "600" }}>
                    Unggah bukti transfer
                  </Link>
                </span>
              </Col>
            </Container>
            <span className="d-flex justify-content-end">
              <Button variant="dark" className="rounded-pill" id="button">
                Konfirmasi
              </Button>
            </span>
          </Col>

          <Col md={3} className="side-info">
            <h5>Dukunganmu akan membantu</h5>
            <span className="d-flex">
              <img src={satwa} width="20" height="20" />
              <p>Melestarikan satwa liat dan habitatnya</p>
            </span>
            <span className="d-flex">
              <img
                src={air}
                width="20"
                height="20"
                style={{ marginTop: "6px" }}
              />
              <p>
                Mewujudkan perairan yang bersih dan bebas dari sampah plastik
              </p>
            </span>
            <span className="d-flex">
              <img src={hutan} width="20" height="20" />
              <p>Melestarikan hutan melalui gerakan reboisasi</p>
            </span>
            <span></span>
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
