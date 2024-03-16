import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="login-wallaper">
          <img
            src="https://i.ebayimg.com/images/g/SYgAAOSwgzFk4Nfy/s-l1200.webp"
            alt=""
          />
        </div>
        <div className="login-form-section">
          <Form className="login-form">
            <h1>Create your TMDB account</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button>Sign up</Button>
            <p>
              Already have an account? <a href="">Log in</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
