import React from "react";
import { Form, Button } from "react-bootstrap";
export default function Login() {
  return (
    <div>
      <Form
        style={{
          width: "300px",
          alignContent: "center",
          marginLeft: "38%",
          marginTop: "7%",
        }}
        variant="dark"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label variant="dark">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
