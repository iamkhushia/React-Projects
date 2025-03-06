import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="keep-header" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="keep-brand">
          <img
            src="http://localhost:5175/src/assets/Images/google-keep-logo.png"
            alt="Keep Logo"
            className="keep-logo"
          />
          Google Keep
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
