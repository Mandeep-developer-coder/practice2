import { useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector} from "react-redux";

import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export const CarDetails = () => {
  const {cars}=useSelector((state)=>state.car)
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturn] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((car) => car._id == id);

  if (!car) {
    return <p className="text-center mt-5">Car not found</p>;
  }

  const featureList = [
    "Leather Seats",
    "Panoramic Sunroof",
    "Wireless Charging",
    "360 Camera",
  ];

  return (
    <Container className="py-5">
      <Row className="align-items-start">
        {/* Left Image Section */}
        <Col lg={8}>
          <Button
            variant="link"
            className="mb-3 ps-0 text-decoration-none text-muted"
            onClick={() => navigate("/")}
          >
            ← Back to all cars
          </Button>

          
          <div
            className="mb-4"
            style={{
              height: "400px",
              overflow: "hidden",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={car.image}
              alt={car.model}
              style={{
              height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <h3 className="fw-bold">{car.brand} {car.model}</h3>
          <p className="text-muted mb-4">
            {car.year} • {car.category}
          </p>

          <Row className="g-3 mb-4">
            <Col xs={6} md={3}>
              <div className="border rounded text-center py-3 bg-light">
                <FaUsers className="mb-2 fs-5" />
                <div>{car.seating_capacity} Seats</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="border rounded text-center py-3 bg-light">
                <FaGasPump className="mb-2 fs-5" />
                <div>{car.fuel_type}</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="border rounded text-center py-3 bg-light">
                <FaCogs className="mb-2 fs-5" />
                <div>{car.transmission}</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="border rounded text-center py-3 bg-light">
                <FaMapMarkerAlt className="mb-2 fs-5" />
                <div>{car.location}</div>
              </div>
            </Col>
          </Row>

          <div className="mb-4">
            <h5>Description</h5>
            <p className="text-muted">
              The {car.brand} {car.model} is a premium vehicle perfect for urban and highway travel. Enjoy a comfortable and tech-loaded ride with outstanding performance.
            </p>
          </div>

          <div>
            <h5>Features</h5>
            <Row className="mt-2">
              {featureList.map((feat, idx) => (
                <Col
                  xs={6}
                  md={3}
                  key={idx}
                  className="d-flex align-items-center gap-2 text-primary mb-2"
                >
                  <FaCheckCircle />
                  <span className="text-muted">{feat}</span>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        {/* Right Booking Panel */}
        <Col lg={4}>
          <div className="sticky-top mt-5" style={{ top: "100px" }}>
            <Card className="shadow-sm p-4">
              <h3 className="fw-bold">${car.pricePerDay}</h3>
              <p className="text-muted small">per day</p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturn(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Book Now
                </Button>
                <p className="text-muted text-center small mt-2">
                  No credit card required to reserve
                </p>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
