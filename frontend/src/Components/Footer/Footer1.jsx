import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer1() {
  return (
    <div
      style={{
        bottom: 0,
        width: "100%",
        textAlign: "center",
        position: "fixed",
      }}
    >
      <footer>
        <Container>
          <Row>
            <Col>
              <h3>&copy; Notes Taking</h3>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
