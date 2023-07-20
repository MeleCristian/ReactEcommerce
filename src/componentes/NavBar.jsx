import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useList } from "../customHooks/useList";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { Categorias } = useList();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Anime 3D</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
            {Categorias.map((element) => {
              return (
                <NavLink to={`/${element}`} className="nav-link" key={element}>
                  {element}
                </NavLink>
              );
            })}
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
