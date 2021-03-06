import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div
      style={{
        textAlign: "center",
        position: "fixed",
        width: "100%",
        marginTop: "200px",
      }}
    >
      <h2>Welcome to Noter</h2>
      <h4>Simple way to Keep your Notes Safe at one Place</h4>
      <Row>
        <Col>
          <a href="/login" style={{ textDecoration: "none" }}>
            <Button variant="dark">LOGIN</Button>
          </a>
        </Col>
        <Col>
          <a href="/register" style={{ textDecoration: "none" }}>
            <Button variant="dark">REGISTER</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
