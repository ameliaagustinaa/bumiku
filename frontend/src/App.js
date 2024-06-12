// import logo from "./logo.svg";
import "./App.css";
// import "./App.scss";
// import { NavBar } from "./components/NavBar";
// import { Footer } from "./components/Footer";
// import { Hero } from "./components/Hero";
// import { HomeCard } from "./components/HomeCard";
// import { Words } from "./components/Words";
// import { Earth } from "./components/Earth";
// import { Info } from "./components/Info";
// import { AboutBumiku } from "./components/AboutBumiku";
// import { Form } from "./components/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import HomeLogin from "./pageLogin/HomeLogin";
import KursusLogin from "./pageLogin/KursusLogin";
import InformasiLogin from "./pageLogin/InformasiLogin";
import About from "./page/About";
import Footer from "./components/Footer";
import FooterLogin from "./pageLogin/FooterLogin";
import AboutLogin from "./pageLogin/AboutLogin";
import Info from "./page/Info";
import Daftarlogin from "./components/Daftarlogin";
import Login from "./components/Login";
import Admininformasi from "./components/Admininformasi";
import Adminkursus from "./components/Adminkursus";
import Admindonasi from "./components/Admindonasi";
import Tambahinformasi from "./components/Tambahinformasi";
import Tambahkursus from "./components/Tambahkursus";
import Informasi from "./page/informasi";
import Donasi from "./page/Donasi";
import DonasiLogin from "./pageLogin/DonasiLogin";
import Detail from "./page/InformasiDetail";
import DonasiDetail from "./page/DonasiDetail";
import DonasiDetailLogin from "./pageLogin/DonasiDetailLogin";
import KursusDetail from "./page/KursusDetail";
import Kursus from "./page/Kursus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/beranda" element={<Home />} />
          <Route path="/BerandaLogin" element={<HomeLogin />} />
          <Route path="/KursusLogin" element={<KursusLogin />} />
          <Route path="/InformasiLogin" element={<InformasiLogin />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/tentang-kami-login" element={<AboutLogin />} />
          <Route path="/bantuan" element={<Info />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Footer" element={<Footer/>}/>
          <Route path="/FooterLogin" element={<FooterLogin/>}/>
          <Route path="/Daftarlogin" element={<Daftarlogin/>}/>
          <Route path="/Admininformasi" element={<Admininformasi/>}/>
          <Route path="/Adminkursus" element={<Adminkursus/>}/>
          <Route path="/Admindonasi" element={<Admindonasi/>}/>
          <Route path="/Tambahinformasi" element={<Tambahinformasi/>}/>
          <Route path="/Tambahkursus" element={<Tambahkursus/>}/>
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/donasiLogin" element={<DonasiLogin />} />
          <Route path="/kursus" element={<Kursus />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail-donasi" element={<DonasiDetail />} />
          <Route path="/detail-donasi-login" element={<DonasiDetailLogin />} />
          <Route path="/detail-kursus" element={<KursusDetail />} />
        </Routes>
      </BrowserRouter>        
    </div>
  );
}

export default App;