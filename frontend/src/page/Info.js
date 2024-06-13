import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Info } from "../components/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const breadcrumbItems = ["Beranda", "Pusat bantuan"];

export default function About() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <Info />
      <br />
      <br />
      <Footer />
    </div>
  );
}
