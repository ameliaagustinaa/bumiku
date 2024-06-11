import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fire from "../assets/images/forestfires.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Cards = ({ title, subTitle, description }) => {
  return (
    <Col md={4} className="p-0 mb-4 ">
      <Link className="text-decoration-none">
        <Card className="card-custom-item">
          <div>
            <Card.Img
              variant="top"
              src={fire}
              style={{ borderRadius: "40px", padding: "24px 30px" }}
            />
          </div>
          <Card.Body className=" item-body">
            <h3 className="title">{title ?? ""}</h3>
            {subTitle != "" ? <h3 className="text">{subTitle}</h3> : ""}
            <p className="text">{description ?? ""}</p>
            <div className="text-end mx-3">
              <Link to={"/detail"}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#204D38"
                  style={{ fontSize: "22px" }}
                />
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
