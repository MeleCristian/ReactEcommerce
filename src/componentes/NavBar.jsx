import { Cart } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar= ()=> (
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Anime 3D</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#naruto">Naruto</Nav.Link>
                <Nav.Link href="#dragonball">Dragon ball</Nav.Link>
                <Nav.Link href="#onepiece">One piece</Nav.Link>
                </Nav>
                <Cart/>
            </Container>
        </Navbar>
        
    </>
)