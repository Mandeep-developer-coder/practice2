import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { dummyMyBookingsData } from "../assets/assets"; 
import { format } from "date-fns";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const MyBookings = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-3">My Bookings</h2>
      <p className="1text-muted mb-4">View and manage your car bookings</p>

      {dummyMyBookingsData.map((booking) => (
        <Card key={booking._id} className="mb-4 shadow-sm border-0">
          <Card.Body>
            <Row>
              {/* LEFT: Car Image */}
              <Col xs={12} md={3} className="mb-3 mb-md-0">
                <Card.Img
                  src={booking.car.image}
                  className="img-fluid rounded"
                  style={{ height: "160px", objectFit: "cover" }}
                />
              </Col>

              {/* MIDDLE: Car Info */}
              <Col xs={12} md={6}>
                <h5 className="fw-bold">{booking.car.brand} {booking.car.model}</h5>
                <p className="text-muted mb-1">
                  {booking.car.year} • {booking.car.category} • {booking.car.location}
                </p>

                <p className="mb-1">
                  <FaCalendarAlt className="me-2 text-muted" />
                  <strong>Rental Period:</strong> {format(new Date(booking.pickupDate), "MMM d, yyyy")} - {format(new Date(booking.returnDate), "MMM d, yyyy")}
                </p>
                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2 text-muted" />
                  <strong>Pick-up Location:</strong> {booking.car.pickupLocation || "Not Specified"}
                </p>
                <p>
                  <FaMapMarkerAlt className="me-2 text-muted" />
                  <strong>Return Location:</strong> {booking.car.returnLocation || "Not Specified"}
                </p>
              </Col>

              {/* RIGHT: Price and Status */}
              <Col xs={12} md={3} className="text-md-end text-start mt-3 mt-md-0">
                <Badge
                  bg={booking.status === "confirmed" ? "success" : "warning"}
                  className="mb-2 text-capitalize"
                >
                  {booking.status}
                </Badge>
                <h5 className="fw-bold text-primary">${booking.price}</h5>
                <small className="text-muted">Booked on {format(new Date(booking.createdAt), "MMM d, yyyy")}</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
