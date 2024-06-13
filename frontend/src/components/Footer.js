import { Container, Row, Col, Navbar, Image } from "react-bootstrap";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import { Link } from "react-router-dom";

// import IMAGES from "../assets/images/images.js";

export const Footer = () => {
  return (
    <footer className="text-white py-5 footer">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="p-0" style={{ textAlign: "left" }}>
            <Navbar.Brand
              href="#home"
              id="navbar-logo"
              style={{ color: "#A8DB98" }}
            >
              Bumiku.com
            </Navbar.Brand>
            <p>
              Bersama-sama Menjaga Bumi dan Membangun Masa Depan yang Hijau,
              Hari ini.
            </p>
          </Col>

          <Col
            md={4}
            className="d-flex justify-content-between p-0"
            style={{ alignContent: "end" }}
          >
            <Col md={4} style={{ textAlign: "left" }}>
              <h5>Komunitas</h5>
              <ul className="list-unstyled link-list">
                <li>
                  <Link to="/tentang-kami" className="text-white">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white">
                    Informasi
                  </Link>
                </li>
                <li>
                  <Link to="/bantuan" className="text-white">
                    Pusat Bantuan
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="mx-1" style={{ textAlign: "left" }}>
              <h5>Layanan</h5>
              <ul className="list-unstyled link-list">
                <li>
                  <Link to={"/donasi"} className="text-white">
                    Donasi
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white">
                    Kursus Daur Ulang
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white">
                    Pusat Berita Lingkungan
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} style={{ textAlign: "left" }}>
              <h5>Social Media</h5>
              <Col md={6}>
                <Row className="d-flex justify-content-between">
                  <Col md={1}>
                    <Link>
                      <img src={twitter} />
                    </Link>
                    {/* <Link>
                      <img src={IMAGES.footer.twitter} />
                    </Link> */}
                  </Col>

                  <Col md={1}>
                    <Link>
                      <img src={instagram} />
                    </Link>
                  </Col>
                  <Col md={1}>
                    <Link>
                      <img src={facebook} />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
