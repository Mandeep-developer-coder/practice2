import { Container, Row, Col, Button } from "react-bootstrap";
import banner from "../assets/banner_car_image.png";
import "./banner.css"; 

export const Banner = () => {
  return (
    <Container className="banner-container my-5 px-4 py-5 rounded-4">
      <Row className="align-items-center">
      
        <Col md={6}>
          <h1 className="fw-bold text-white mb-3">Do You Own a Luxury Car?</h1>
          <p className="text-white mb-4">
            Monetize your vehicle effortlessly by listing it on <strong>CarRental</strong>.<br />
            We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.
          </p>
          <Button className="custom-white-btn">List your car</Button>
        </Col>

      
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src={banner}
            alt="car"
            className="img-fluid"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
