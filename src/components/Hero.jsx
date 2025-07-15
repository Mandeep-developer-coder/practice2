// Hero.jsx
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import main_car from '../assets/main_car.png';
import { useState } from "react";


export const Hero = () => {
    const [location, setLocation] = useState("")
    const [pickup, setPickup] = useState("")
    const [returnDate, setReturnDate] = useState("")
    return (
        <div className="bg-light py-5 text-center">
            <Container>
                {/* HEADING */}
                <h1 className="fw-bold mb-4">Luxury cars on Rent</h1>

                {/* SEARCH BOX inside FORM */}
                <Form className="bg-white rounded-pill shadow p-3 px-4 mb-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">

                    {/* Location */}
                    <Form.Group controlId="location" className="text-start me-lg-3 mb-3 mb-lg-0">
                        <Form.Label className="fw-semibold mb-0">Pickup Location</Form.Label>
                        <Form.Select className="border-0" value={location} onChange={(e) => setLocation(e.target.value)} onFocus={(e) => {
                            e.target.style.outline = "none", e.target.style.boxShadow = "none"
                        }}>
                            <option>Please select location</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Houston</option>
                               <option>Chicago</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Pickup Date */}
                    <Form.Group controlId="pickup" className="text-start me-lg-3 mb-3 mb-lg-0">
                        <Form.Label className="fw-semibold mb-0">Pick-up Date</Form.Label>
                        <Form.Control type="date" className="border-0" value={pickup} onChange={(e) => setPickup(e.target.value)} onFocus={(e) => {
                            e.target.style.outline = "none", e.target.style.boxShadow = "none"
                        }} />
                    </Form.Group>

                    {/* Return Date */}
                    <Form.Group controlId="return" className="text-start me-lg-3 mb-3 mb-lg-0">
                        <Form.Label className="fw-semibold mb-0">Return Date</Form.Label>
                        <Form.Control type="date" className="border-0" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} onFocus={(e) => {
                            e.target.style.outline = "none", e.target.style.boxShadow = "none"
                        }} />
                    </Form.Group>

                    {/* Search Button */}
                    <Button type="submit" variant="primary" className="rounded-pill px-4">
                        <FaSearch className="me-2" /> Search
                    </Button>
                </Form>

                {/* CAR IMAGE */}
                <img
                    src={main_car}
                    alt="Luxury Car"
                    className="img-fluid"
                />
            </Container>
        </div>
    );
}


