import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import satwa from "../assets/images/satwa.png";
import air from "../assets/images/air.png";
import hutan from "../assets/images/hutan.png";

import detail from "../assets/images/detail.png";

const breadcrumbItems = ["Beranda", "Informasi"];
export default function Detail() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <Container className="p-0">
        <img src={detail} />
      </Container>
      <br />
      <Container>
        <Row className="text-start form-donasi justify-content-between">
          <Col md={9} className="form-data" style={{ paddingRight: "50px" }}>
            <h4 className="">Apa Itu Pencemaran Lingkungan?</h4>
            <p>
              <span style={{ fontWeight: "bold" }}>Bumiku.com -</span> Menurut
              Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan
              Pengelolaan Lingkungan Hidup, pencemaran lingkungan (Environmental
              Pollution) adalah dimasukkannya zat energi atau komponen yang
              merusak lingkungan, ataupun berubahnya terhadap segala bentuk
              tatanan lingkungan yang berasal hasil dari kegiatan manusia maupun
              proses alam sehingga dapat mengancam kualitas lingkungan.
              <br />
              <br />
              Pencemaran lingkungan dapat juga diartikan sebagai perubahan
              faktor abiotik akibat kegiatan yang melebihi ambang batas
              toleransi ekosistem biotik. Secara umum, terdapat dua bentuk
              penyebab pencemaran lingkungan yaitu: Degradable, yaitu penyebab
              pencemaran yang dapat diuraikan kembali atau dapat diturunkan
              sifat bahayanya ke tingkat yang dapat diterima oleh proses alam.
              Contohnya: Kotoran manusia, hewan dan sisa tumbuhan yang mati.
              Non-Degradable, yaitu polutan yang tidak dapat diuraikan secara
              alami karena bentuk unsurnya yang terlalu kompleks. Contohnya:
              Limbah berbahaya dan beracun (B3), merkuri, timah hitam, arsenik,
              dan lain-lain. Fenomena pencemaran lingkungan disebabkan oleh
              beragam faktor secara alami atau pengaruh lain. Namun, faktor
              terbesarnya adalah peningkatan aktivitas manusia.
              <br />
              <br />
              Pencemaran lingkungan disebabkan oleh beragam faktor. Namun,
              faktor terbesarnya adalah manusia. Sadar atau tidak, kita telah
              berkontribusi dalam proses pencemaran lingkungan. Mulai dari
              pertambahan jumlah penduduk yang tak terkendali, banyaknya
              sumber-sumber zat pencemaran sehingga alam tak mampu menetralisir.
              Dengan adanya begitu banyak penyebab pencemaran lingkungan itu
              sendiri menghasilkan berbagai dampak pula kepada lingkungan yang
              ada dan hal ini dilakukan analisis pada buku Analisis Mengenai
              Dampak Lingkungan (Amdal).
            </p>
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
