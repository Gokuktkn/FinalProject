import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wallaper">
        <img
          src="https://i.ebayimg.com/images/g/SYgAAOSwgzFk4Nfy/s-l1200.webp"
          alt=""
        />
      </div>
      <div className="login-form-section">
        <Form className="login-form">
          <h1>Welcome back</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button>Log in</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
