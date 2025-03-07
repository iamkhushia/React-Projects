import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="keep-header" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="keep-brand">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.O_BEi15EGH4F2vCLcTVFwwHaKI&pid=Api&P=0&h=180"
            // alt="Keep Logo"
            className="keep-logo"
          />
          Google Keep
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
