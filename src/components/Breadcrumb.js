import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Breadcrumb = ({ items, separatorIcon = faChevronRight }) => {
  return (
    <Container className="p-0">
      <nav className="breadcrumb">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index !== items.length - 1 ? (
              <>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#03361e" }}
                >
                  {item}
                </a>
                <FontAwesomeIcon
                  icon={separatorIcon}
                  className="mx-2 pt-1"
                  style={{ color: "#A8DB98" }}
                />
              </>
            ) : (
              <span>{item}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </Container>
  );
};

export default Breadcrumb;
