import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { FaSearch } from "react-icons/fa";
export const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                {/* left logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <img src={assets.logo}></img></Navbar.Brand>
                {/* for small size */}
                <Navbar.Toggle aria-controls="navbar-basic">
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-basic">
                    {/* right */}
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="fw-bold px-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cars" className="fw-bold px-3">Cars</Nav.Link>
                        <Nav.Link as={Link} to="/bookings" className="fw-bold px-3">My Bookings</Nav.Link>
                        <Form className="d-none d-lg-flex">
                            <div className="position-relative">
                                <Form.Control type="text" placeholder="Search cars" className="pe-5 border rounded-pill text-dark bg-transparent" onFocus={(e) => {
                                    e.target.style.boxShadow = "none";
                                    e.target.style.outline = "none";
                                }} />
                                <FaSearch className="position-absolute top-50 end-0 translate-middle-y text-muted me-3 " />

                            </div>

                        </Form>
                        <Nav.Link as={Link} to="/owner" className="fw-bold px-3">Dashboard</Nav.Link>
                        <Button as={Link} to="/login" variant="primary" className="ms-2 px-4"  >
                            Login
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}