import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/CardInformasi";
import { TabNav } from "../components/TabNav";
import { Breadcrumb } from "../components/Breadcrumb";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const breadcrumbItems = ["Beranda", "Informasi"];

export default function Informasi() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
    {
      id: 2,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
    {
      id: 3,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
    {
      id: 4,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
    {
      id: 5,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
    {
      id: 6,
      title: "Apa itu pencemaran lingkungan?",
      subTitle: "",
      description:
        "Bumiku.com - Pencemaran lingkungan adalah dimasukkannya zat energi atau komponen yang merusak lingkungan, ataupun berubahnya terhadap segala bentuk tatanan lingkungan yang disebabkan oleh kegiatan manusia atau proses alam.",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <TabNav />
      <Container className="p-0">
        <Row className="text-start card-custom m-0 d-flex justify-content-between">
          {posts.map((v) => (
            <Cards
              key={v.id} // Properti key yang unik
              title={v.title}
              subTitle={v.subTitle}
              description={v.description}
            />
          ))}
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
}
