import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import emmaImg from "../assets/testimonial_image_1.png"; 
import johnImg from "../assets/user_profile.png";
import avaImg from "../assets/testimonial_image_2.png";

export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      address: "Barcelona, Spain",
      rating: 5,
      review: "I've rented cars from various companies, but the experience with CarRental was exceptional.",
      image: emmaImg,
    },
    {
      id: 2,
      name: "John Smith",
      address: "New York, USA",
      rating: 5,
      review: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
      image: johnImg,
    },
    {
      id: 3,
      name: "Ava Johnson",
      address: "Sydney, Australia",
      rating: 5,
      review: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
      image: avaImg,
    },
  ];

  return (
    <Container fluid className="bg-light py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">What Our Customers Say</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.
        </p>
      </div>

      <Container style={{ maxWidth: "1140px" }}>
        <Row className="justify-content-center g-4">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={12} sm={10} md={6} lg={4} className="mx-auto">
              <Card className="shadow text-center h-100 rounded-4 p-4">
                <div className="d-flex align-items-center gap-3 justify-content-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle"
                    width="70"
                    height="70"
                  />
                  <div className="text-start">
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.address}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-center text-warning mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <Card.Text className="text-muted px-2">"{testimonial.review}"</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
