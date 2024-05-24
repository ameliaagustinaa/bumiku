// import logo from "./logo.svg";
// import "./App.css";
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

// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Info from "./page/Info";
import Informasi from "./page/informasi";
import Donasi from "./page/Donasi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/beranda" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/bantuan" element={<Info />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/donasi" element={<Donasi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
