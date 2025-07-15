
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { FaUsers, FaGasPump, FaCogs, FaMapMarkerAlt } from "react-icons/fa";
import "./CarCards.css"; 
import { useSelector } from "react-redux";

export const CarCards = () => {
  const navigate = useNavigate();
  const {cars}=useSelector((state)=>state.car)

  return (
    <div className="p-4 ">
      <h2 className="text-center fw-bold fs-1">Featured Vehicles</h2>
      <p className="text-center text-muted mb-4">
        Explore our selection of premium vehicles available for your next adventure.
      </p>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {cars.slice(0,6).map((car) => (
          <Col key={car._id}>
            <Card
              onClick={() => navigate(`/car-details/${car._id}`)}
              className="h-100 vehicle-card"
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={car.image}
                  className="car-image"
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

                {/* ICON LAYOUT */}
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

      {/* Explore All Button */}
      <div className="text-center mt-4">
        <Button variant="outline-dark" onClick={() => navigate("/cars")}>
          Explore All cars 
        </Button>
      </div>
    </div>
  );
};
