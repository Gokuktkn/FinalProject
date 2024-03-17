import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState, useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      if (response.data.success) {
        console.log("Login successful");
        setIsAuthenticated(true);
        if (location.state && location.state.from) {
          // If there's a previous location, navigate back to it
          navigate(location.state.from);
        } else {
          // Otherwise, navigate to the home page
          navigate("/");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login">
      <div className="login-wallaper">
        <img
          src="https://i.ebayimg.com/images/g/SYgAAOSwgzFk4Nfy/s-l1200.webp"
          alt=""
        />
      </div>
      <div className="login-form-section">
        <Form className="login-form" onSubmit={handleLogin}>
          <h1>Welcome back</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>} {/* Display error message if present */}
          <Button type="submit">Log in</Button>
          <p>
            Don't have an account yet? <a href="">Register</a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
