import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import fire from "../assets/images/forestfires.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Cards = () => {
  return (
    <Container className="p-0">
      <div className="text-start card-custom">
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
              <h3 className="title">Apa Itu Pencemaran Lingkungan?</h3>
              <p className="text">
                Pencemaran lingkungan (Environmental Pollution) adalah
                dimasukkannya zat energi atau komponen yang merusak lingkungan,
                ataupun berubahnya terhadap segala bentuk tatanan
                lingkungan yang berasal hasil dari kegiatan manusia.
              </p>
              <div className="text-end mx-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#204D38"
                  style={{ fontSize: "22px" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Link>

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
              <h3 className="title">Apa Itu Pencemaran Lingkungan?</h3>
              <p className="text">
                Pencemaran lingkungan (Environmental Pollution) adalah
                dimasukkannya zat energi atau komponen yang merusak lingkungan,
                ataupun berubahnya terhadap segala bentuk tatanan
                lingkungan yang berasal hasil dari kegiatan manusia.
              </p>
              <div className="text-end mx-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#204D38"
                  style={{ fontSize: "22px" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Link>

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
              <h3 className="title">Apa Itu Pencemaran Lingkungan?</h3>
              <p className="text">
                Pencemaran lingkungan (Environmental Pollution) adalah
                dimasukkannya zat energi atau komponen yang merusak lingkungan,
                ataupun berubahnya terhadap segala bentuk tatanan
                lingkungan yang berasal hasil dari kegiatan manusia.
              </p>
              <div className="text-end mx-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#204D38"
                  style={{ fontSize: "22px" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Container>
  );
};
