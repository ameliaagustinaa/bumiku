import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { TabNav } from "../components/TabNav";
import { Breadcrumb } from "../components/Breadcrumb";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const breadcrumbItems = ["Beranda", "Kursus"];

export default function Kursus() {
  const [posts, setPost] = useState([
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
    {
      title: "Kreasi Daur Ulang Sampah Plastik",
      subTitle: "Nusantara",
      description: "1,6 jt x ditonton . 5 hari yang lalu",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <Container className="p-0">
        <Row className="text-start card-custom m-0 d-flex justify-content-between">
          {posts.map((v) => {
            console.log(v);
            return (
              <Cards
                title={v.title}
                subTitle={v.subTitle}
                description={v.description}
              />
            );
          })}
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
}
