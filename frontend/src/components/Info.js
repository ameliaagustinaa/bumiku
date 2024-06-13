import { Container, Row, Col } from "react-bootstrap";

export const Info = () => {
  return (
    <Container className="p-0">
      <div className="bumiku-info">
        <Row>
          <Col md={6} className="m-auto info-title">
            <h3>Hallo, kami disini dan siap membantu!</h3>
            <p>
              Silahkan buhungi kami melalui informasi berikut, kami akan
              membantu kamu selama jam operasional
            </p>
          </Col>
        </Row>
        <Row className="info-card d-flex justify-content-around px-5 m-3">
          <Col md={3} className="card-item">
            <h4>Kontak</h4>
            <p>
              Terkait kritik, saran, dan pertanyaan silahkan hubungi nomor
              berikut: +628 999 999
            </p>
          </Col>
          <Col md={3} className="card-item">
            <h4>Lokasi</h4>
            <p>
              Jl. Tuanku Tambusai, Delima, Kec. Tampan, Kota Pekanbaru, Riau
              28290
            </p>
          </Col>
          <Col md={3} className="card-item">
            <h4>E-mail</h4>
            <p>
              Terkait kritik, saran, dan pertanyaan silahkan kirim e-mail ke
              alamat berikut: bumiku@gmail.com
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
