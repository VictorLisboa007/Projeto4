import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyNavBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
      <Container fluid>
        {/* Minha Logo = NavBar Brand */}
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSverEscgpretniczMUAoiX4wCCKnLQcO5I3g&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Gokuzinho
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#action1" className="active">Início</Nav.Link>
            <Nav.Link href="#action2" className="active">Dragon Ball</Nav.Link>
            <NavDropdown href="#action/3" className="active" title="Personagens" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Goku</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gohan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegeta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Trunks</NavDropdown.Item>
            </NavDropdown>
            {/* Link Desativado */}
            <Nav.Link href='#' disabled>
                Contato
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procure o personagem..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavBar