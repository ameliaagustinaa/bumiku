import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const TabNav = () => {
  return (
    <Container className="tab-custom mb-3">
      <Row className=" justify-content-between">
        <Col md={6} className="text-start link-group px-0 ">
          <Link id="link">Informasi Umum</Link>
          <Link id="link">Berita</Link>
          <Link id="link">Flora & Fauna</Link>
        </Col>
        <Col md={3} className="d-flex justify-content-end pr-3">
          <input
            type="text"
            className="input-search"
            placeholder="Cari disini..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon my-auto"
            style={{ marginLeft: "-30px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
