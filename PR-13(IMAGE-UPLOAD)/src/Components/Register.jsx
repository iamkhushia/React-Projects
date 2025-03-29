

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAsync } from "../Servise/action/auth.action";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCreated, error } = useSelector((state) => state.userReducer);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAsync(inputData));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/");
    }
  }, [isCreated, navigate]);

  return (
    <>
      <Container className="register-container">
        <h2>📝 Create an Account</h2>

        {/* Show Error if any */}
        {error && <p className="error-message">❌ {error}</p>}

        {/* Registration Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="form-label">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleChanged}
                placeholder="Enter Email"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="form-label">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                name="password"
                value={inputData.password}
                onChange={handleChanged}
                placeholder="Enter Password"
                required
              />
            </Col>
          </Form.Group>

          <Button type="submit" variant="warning" className="btn-signup">
            🚀 Sign Up
          </Button>
        </Form>

        <p>
          🔐 Already have an account?{" "}
          <Link to="/signin">Login Here</Link>
        </p>
      </Container>
    </>
  );
};

export default Register;
