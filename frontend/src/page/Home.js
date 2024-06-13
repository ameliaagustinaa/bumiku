import "../App.css";
import "../App.scss";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HomeCard } from "../components/HomeCard";
import { Words } from "../components/Words";
import { Earth } from "../components/Earth";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <br />
      <HomeCard />
      <br />
      <br />
      <Words
        words='"Lingkungan yang bersih adalah budaya orang yang memiliki pola pikir
            maju."'
      />
      <br />
      <br />
      <Earth
        heading="Mari Jaga Kelestarian Bumi Kita"
        p="Bumi adalah rumah kita bersama, dan oleh karena itu, menjaga dan merawatnya adalah tanggung jawab kita semua. Perubahan iklim, pencemaran lingkungan, deforestasi, dan berkurangnya keanekaragaman hayati adalah beberapa tantangan besar yang kita hadapi saat ini. Untuk mengatasi tantangan ini, kita perlu mengambil tindakan kolektif yang mencakup berbagai aspek kehidupan kita sehari-hari."
      />
      <br />
      <Footer />
    </div>
  );
}
