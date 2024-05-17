import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HomeCard } from "./components/HomeCard";
import { Words } from "./components/Words";
import { Earth } from "./components/Earth";
import { Info } from "./components/Info";
import { AboutBumiku } from "./components/AboutBumiku";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
