import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Artist extends React.Component {
  state = {
    artists: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3000/artists").then((res) => {
      const artists = res.data;
      this.setState({ artists });
    });
  }
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Horrorcore Bible</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ backgroundColor: "#BA1313" }}>
          <Row xs={1} md={3} className="g-4">
            {this.state.artists
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((artist) => (
                <Col>
                  <Card className="text-center" border="dark" style={{ width: "27.95rem", backgroundColor: "black" }}>
                    <Card.Img
                      variant="top"
                      src={artist.image}
                      alt="artist"
                      className="image"
                      style={{ height: 400, width: 445 }}
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center", color: "white" }}>{artist.name}</Card.Title>
                      <Button variant="danger" style={{ align: "center" }}>
                        More Info
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </>
    );
  }
}

// export default Artist;
