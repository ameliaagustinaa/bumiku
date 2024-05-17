import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { CardHome } from "./components/CardHome";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <br />
      <cardHome />
      <br />
      <Footer />
    </div>
  );
}

export default App;
