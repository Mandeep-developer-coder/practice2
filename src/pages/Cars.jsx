import { Container, Row, Col, Form, Badge, Card } from "react-bootstrap";
import { FaSearch, FaFilter, FaUsers, FaGasPump, FaCogs, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cars.css";

export const Cars = () => {
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.car);
  const total = cars.length;

  return (
    <>
      {/* Search Section */}
      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8} className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>Available Cars</h1>
            <p className="text-muted fw-bold">
              Browse our selection of premium vehicles available for your next adventure
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} sm={10} md={8} lg={5}>
            <div className="rounded-pill shadow-sm text-muted d-flex bg-white align-items-center px-3 py-2">
              <FaSearch className="text-muted me-2" />
              <Form.Control
                type="text"
                placeholder="Search by model or features"
                className="border-0"
                style={{
                  fontSize: "1rem",
                  color: "#6c757d",
                  outline: "none",
                  boxShadow: "none"
                }}
              />
              <FaFilter className="text-muted ms-2" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Card Section */}
      <Container className="p-4">
        <p className="text-muted">Showing {total} Cars</p>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {cars.map((car) => (
            <Col key={car._id}>
              <Card
                onClick={() => navigate(`/car-details/${car._id}`)}
                className="h-100 vehicle-card"
                style={{ cursor: "pointer" }}
              >
                <div className="position-relative">
                  <Card.Img
                    src={car.image}
                    variant="top"
                    className="img-fluid car-image"
                  />
                  <Badge bg="primary" className="position-absolute top-0 start-0 m-2">
                    Available Now
                  </Badge>
                  <div className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded">
                    <strong>${car.pricePerDay}</strong> / day
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{car.brand} {car.model}</Card.Title>
                  <Card.Text className="text-muted">
                    {car.category} • {car.year}
                  </Card.Text>
                  <div className="d-flex justify-content-between flex-wrap text-muted small">
                    <span><FaUsers className="me-1" /> {car.seating_capacity} Seats</span>
                    <span><FaCogs className="me-1" /> {car.transmission}</span>
                    <span><FaGasPump className="me-1" /> {car.fuel_type}</span>
                    <span><FaMapMarkerAlt className="me-1" /> {car.location}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
