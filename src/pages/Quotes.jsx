import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import LinkBtn from "../components/LinkBtn";

import "../styles/Pages.css";
import quotes from "../data/Quotes.json";

export default function Qutoes() {
  useEffect(() => {
    document.title = "Quotes | Hunter Goff";
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Quotes</h1>
          <h6 className="quotes-text">
            {" "}
            Inspired by{" "}
            <a
              href="http://www.paulgraham.com/quo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Paul Graham's quote page <LinkBtn />{" "}
            </a>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {quotes.quotes.map((quote, i) => (
              <div key={quote.id}>
                <li key={quote.id}> "{quote.quote}."</li>
                <ul>
                  <p> -- {quote.attributed_to}</p>
                </ul>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
