import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HomeCard } from "./components/HomeCard";
import { Words } from "./components/Words";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <br />
      <HomeCard />
      <br />
      <br />
      <Words />
      <br />
      <Footer />
    </div>
  );
}

export default App;
