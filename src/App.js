import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { CardHome } from "./components/CardHome";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "./components/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <CardHome />
      <CardHome />
      <CardHome />
      <br />

      <Avatar/>
      <Footer />
    </div>
  );
}

export default App;
