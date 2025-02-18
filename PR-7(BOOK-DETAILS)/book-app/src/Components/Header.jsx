
import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';


const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add")
  }
  return (
    <>
      <div className="header-section">
          <Navbar className="navbar-custom">
            <Container>
              <Navbar.Brand href="/" className="navbar-brand">
                  Books-List
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleClick} variant="success">Add Book</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    </>
  );
};

export default Header;
