import { Container, Row, Col, Button } from "react-bootstrap";
import satwa from "../assets/images/satwa.png";
import air from "../assets/images/air.png";
import hutan from "../assets/images/hutan.png";
import gopay from "../assets/images/gopay.png";
import dana from "../assets/images/dana.png";
import ovo from "../assets/images/ovo.png";
import shopeepay from "../assets/images/shopeepay.png";
import { Link } from "react-router-dom";

export const Form = () => {
  return (
    <Container>
      <Row className="text-start form-donasi">
        <Col md={9} className="form-data">
          <h4>
            Berikan donasi terbaikmu dan mulai untuk berkontribusi menjaga
            kelestarian alam
          </h4>

          <div className="button-group mt- mb-4">
            <Button className=" rounded-pill outline-primary" id="button1">
              Rp15.000
            </Button>
            <Button className=" rounded-pill outline-primary" id="button1">
              Rp20.000
            </Button>
            <Button className=" rounded-pill outline-primary" id="button1">
              Rp30.000
            </Button>
            <Button className=" rounded-pill outline-primary" id="button1">
              Rp50.000
            </Button>
            <Button className=" rounded-pill outline-primary" id="button1">
              Rp100.000
            </Button>
            <input
              type="text"
              placeholder="Rp"
              className="input-custom mt-4"
            ></input>
          </div>

          <div className="form-diri">
            <h4 style={{ marginTop: "80px" }}>
              Silahkan isi informasi data diri berikut:{" "}
            </h4>
            <Row className="my-4">
              <Col md={6}>
                <span>
                  <h6>*Nama depan</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <h6>*Nama belakang</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <h6>*Email</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <h6>Telepon</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
            </Row>
          </div>

          <div className="form-alamat my-5">
            <h5>Informasi lainnya </h5>
            <Row className="my-4">
              <Col md={6}>
                <span>
                  <h6>Alamat</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <h6>Kota</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <h6>Provinsi</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <h6>Kode pos</h6>
                  <input type="text" className="input-text"></input>
                </span>
              </Col>
            </Row>
          </div>

          <div className="form-pembayaran">
            <h5>Metode pembayaran</h5>
            <div className="button-group">
              <Button
                className="  outline-primary"
                id="button3"
                style={{ borderRadius: "15px", borderColor: "#A8DB98" }}
              >
                <img src={gopay} />
              </Button>
              <Button
                className="  outline-primary"
                id="button3"
                style={{ borderRadius: "15px", borderColor: "#A8DB98" }}
              >
                <img src={dana} />
              </Button>
              <Button
                className="  outline-primary"
                id="button3"
                style={{ borderRadius: "15px", borderColor: "#A8DB98" }}
              >
                <img src={ovo} />
              </Button>
              <Button
                className=" outline-primary"
                id="button3"
                style={{ borderRadius: "15px", borderColor: "#A8DB98" }}
              >
                <img src={shopeepay} />
              </Button>
            </div>

            <div className="form-button my-5">
              <Link to={"/detail-donasi"}>
                <Button variant="dark" className=" rounded-pill" id="button">
                  Donasi
                </Button>
              </Link>
            </div>
          </div>
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
            <p>Mewujudkan perairan yang bersih dan bebas dari sampah plastik</p>
          </span>
          <span className="d-flex">
            <img src={hutan} width="20" height="20" />
            <p>Melestarikan hutan melalui gerakan reboisasi</p>
          </span>
          <span></span>
        </Col>
      </Row>
    </Container>
  );
};
