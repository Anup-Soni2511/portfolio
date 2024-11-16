import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer text-center">
      <Row>
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Anup-Soni2511"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anup-soni-a61a271ab/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soni_sah_ab"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
