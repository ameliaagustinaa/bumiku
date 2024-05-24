import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { TabNav } from "../components/TabNav";
import { Breadcrumb } from "../components/Breadcrumb";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const breadcrumbItems = ["Beranda", "Informasi"];

export default function Informasi() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Breadcrumb items={breadcrumbItems} separatorIcon={faChevronRight} />
      <TabNav />
      <Cards />
      <Cards />
      <Cards />
      <br />
      <br />
      <Footer />
    </div>
  );
}
