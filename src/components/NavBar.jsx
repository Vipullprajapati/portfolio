import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavText from "./NavText";

const NavBar = () => {
  return (
    <Navbar
      // style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg p-3 mb-5 bg-dark "
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ff0d",
          }}
        >
          Mr Jonny
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link className="navlink" to="/">
              <p>Home</p>
            </Link>
            <Link className="navlink" to="/about">
              <p>About</p>
            </Link>
            {/* <Link className="navlink" to="/education">
              <NavText title="Education" />
            </Link> */}
            <Link className="navlink" to="/experience">
              <p>Experience</p>
            </Link>
            {/* <Link className="navlink" to="/project">
              <NavText title="Projects" />
            </Link> */}
            <Link className="navlink" to="/skills">
              <p>Skills</p>
            </Link>
            <Link className="navlink" to="/contact">
              <p>Contact</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
