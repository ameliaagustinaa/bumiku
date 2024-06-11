import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Form } from "../components/Form";
import { AboutBumiku } from "../components/AboutBumiku";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const breadcrumbItems = ["Beranda", "Donasi"];

export default function About() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <AboutBumiku />
      <br />
      <Form />
      <br />
      <br />
      <Footer />
    </div>
  );
}
