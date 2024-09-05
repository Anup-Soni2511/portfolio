import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anup Soni </span>
            from <span className="purple"> Kishangarh (Ajmer), India.</span>
            <br />
            I am currently employed as a software developer at CodeTrade.io.
            <br />
            I have completed Bachelor of Technology (B.Teach) in Computer Science Branch.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anup</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
